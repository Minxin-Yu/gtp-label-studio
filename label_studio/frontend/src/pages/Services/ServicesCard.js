import React from "react";
import { DescriptionList } from '../../components/DescriptionList/DescriptionList';
import { Card } from '../../components';
import { cn } from '../../utils/bem';
import { Button } from '../../components';
import SERVICES from "../../config/CentralApi";


export function ServicesCard(service) {
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

  if (service.service.services) {
    taskLists = service.service.services.map((task) =>
      <li key={task.taskId}>{task.taskId}</li>,
    );
  }

  console.log(service);
  return (
    <div>
      <Card style={{ marginTop: 0 }} header={service.service.name}
      >
        <DescriptionList className={cn('ml').elem('summary')}>
          <DescriptionList.Item term="Action">
            <Button onClick={() => handleStart(service.service.id)}>Start</Button>
            <Button onClick={() => handleRestart(service.service.id)}>Restart</Button>
            <Button onClick={() => handleDelete(service.service.id)}>Delete</Button>
          </DescriptionList.Item>

          <DescriptionList.Item term="Running/Replicas">
            {service.service.running}/{service.service.replicas}
          </DescriptionList.Item>

          <DescriptionList.Item term="Description">
            {service.service.description}
          </DescriptionList.Item>

          <DescriptionList.Item term="Task">
            <ul>{taskLists}</ul>
          </DescriptionList.Item>

        </DescriptionList>

      </Card>
    </div>
  );
}
