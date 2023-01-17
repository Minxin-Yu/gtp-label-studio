import React from "react";
import { DescriptionList } from '../../components/DescriptionList/DescriptionList';
import { Card } from '../../components';
import { cn } from '../../utils/bem';
import { Button } from '../../components';
import SERVICES from "../../config/CentralApi";


export function ServicesCard(props) {
  let taskLists = '';

  const handleStart = (id) => {
    fetch(SERVICES.SERVICE + id + '?' + new URLSearchParams({
      force: false,
    }),
    { method: 'POST' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleRestart = (id) => {
    fetch(SERVICES.SERVICE + id + '?' + new URLSearchParams({
      force: true,
    }),
    { method: 'POST' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleDelete = (id) => {
    fetch(SERVICES.SERVICE + id, {
      method: 'DELETE',
    })
      .then(res => res.text())
      .then(res => console.log(res));
  };

  if (props.service.services) {
    taskLists = props.service.services.map((task) =>
      <li key={task.taskId}>{task.taskId}</li>,
    );
  }
  
  return (
    <div>
      <Card style={{ marginTop: 0 }} header={props.service.name}
      >
        <DescriptionList className={cn('ml').elem('summary')}>
          <DescriptionList.Item term="Action">
            <Button onClick={() => handleStart(props.service.id)}>Start</Button>
            <Button onClick={() => handleRestart(props.service.id)}>Restart</Button>
            <Button onClick={() => handleDelete(props.service.id)}>Delete</Button>
          </DescriptionList.Item>

          <DescriptionList.Item term="Running/Replicas">
            {props.service.running}/{props.service.replicas}
          </DescriptionList.Item>

          <DescriptionList.Item term="Description">
            {props.service.description}
          </DescriptionList.Item>

          <DescriptionList.Item term="Task">
            <ul>{taskLists}</ul>
          </DescriptionList.Item>

        </DescriptionList>

      </Card>
    </div>
  );
}
