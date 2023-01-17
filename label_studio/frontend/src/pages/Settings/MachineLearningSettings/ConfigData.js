import { DescriptionList } from '../../../components/DescriptionList/DescriptionList';
import { Card } from '../../../components';
import { cn } from '../../../utils/bem';

export const ConfigData = ({ config, taskCount }) => {
  if (config.tasks !== undefined) {
    if (config.tasks[taskCount] !== undefined) {
      let ExperimentListLink = '';
      let TaskIdDisplay = <text>{config.tasks[taskCount].id}</text>;
      let CompareSubTasks = '';
      let ConfigDateTime = (config.tasks[taskCount].createDttm !== undefined ? (new Date(config.tasks[taskCount].createDttm)) : null);

      if (config.tasks[taskCount].experiment !== undefined) {
        ExperimentListLink = 'http://192.168.21.100:5000/#/experiments/' + config.tasks[taskCount].experiment + '/s?search=params.master_task%3D%27' + config.tasks[taskCount].id + '%27&orderByAsc=false';
        TaskIdDisplay = <a href={ExperimentListLink}>{config.tasks[taskCount].id}</a>;

        config.tasks[taskCount].runs.forEach(element => {
          if (CompareSubTasks === '') {
            CompareSubTasks = '%22' + element + '%22';
          }
          else {
            CompareSubTasks += ',%22' + element + '%22';
          }
        });
      }

      return (
        <div>
          <br />
          <Card style={{ marginTop: 0 }} header={config.tasks[0].name}
          >
            <DescriptionList className={cn('ml').elem('summary')}>
              <DescriptionList.Item term="ID">
                {TaskIdDisplay}
              </DescriptionList.Item>

              <DescriptionList.Item term="Project ID">
                {config.tasks[taskCount].projectId}
              </DescriptionList.Item>

              <DescriptionList.Item term="Name">
                {config.tasks[taskCount].name}
              </DescriptionList.Item>

              <DescriptionList.Item term="Sub Task Total">
                {config.tasks[taskCount].subTaskTotal}
              </DescriptionList.Item>

              <DescriptionList.Item term="Sub Task Finish Total">
                {config.tasks[taskCount].subTaskFinishTotal}
              </DescriptionList.Item>

              <DescriptionList.Item term="Create Time">
                {formatDate(ConfigDateTime)}
              </DescriptionList.Item>

              <DescriptionList.Item term="Sub Task" >
                <SubTaskList SubTask={config.tasks[taskCount].subTask} Experiment={config.tasks[taskCount].experiment} Runs={config.tasks[taskCount].runs}></SubTaskList>
              </DescriptionList.Item>

              <DescriptionList.Item term="Compare Sub Task">
                {config.tasks[taskCount].subTaskTotal > 1 && config.tasks[taskCount].experiment !== undefined
                  ? (
                    <a href={'http://192.168.21.100:5000/#/compare-runs?runs=[' + CompareSubTasks + ']&experiment=' + config.tasks[taskCount].experiment}>Compare<br /></a>
                  )
                  : null
                }
              </DescriptionList.Item>
            </DescriptionList>

          </Card>
        </div>
      );
    }
  }
  return null;
};

function formatDate(date) {
  var d = new Date(date),
    month = ((d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1)),
    day = (d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()),
    year = d.getFullYear(),
    hh = (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()),
    mm = (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()),
    ss = (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds());

  return [year, month, day].join('-') + " " + [hh, mm, ss].join(':');
}

const SubTaskList = ({ SubTask, Experiment, Runs }) => {
  return (
    <div>
      {Experiment !== undefined
        ? (
          SubTask.map((item, index) => (
            <a key={item} href={'http://192.168.21.100:5000/#/experiments/' + Experiment + '/runs/' + Runs[index]}>{item}<br /></a>
          ))
        )
        : (
          SubTask.map((item) => (
            <a key={item}>{item}<br /></a>
          ))
        )
      }
    </div>
  );
};
