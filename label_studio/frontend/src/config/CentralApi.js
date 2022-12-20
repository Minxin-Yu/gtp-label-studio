// https://redmine.gorilla-technology.com:3000/projects/text-mining/wiki/TP_Central_Service
export const TP_CENTRAL_SERVICE = 'http://192.168.21.11:6150';
// 取得資源監控 (目前提供設定與預期數據)
export const RESOURCES = `${TP_CENTRAL_SERVICE}/service/resources`;
// 透過設定ID檔部署服務
export const SERVICE = `${TP_CENTRAL_SERVICE}/service/`;
// 取得服務資訊列表
export const LIST_SERVICE_INFOS = `${TP_CENTRAL_SERVICE}/service/list_service_infos?task_size=0`;
// 取得指定服務資訊
export const SERVICE_INFOS = `${TP_CENTRAL_SERVICE}/service/service_info/`;
// 建立訓練任務
export const TRAIN = `${TP_CENTRAL_SERVICE}/task/train/`;

export default{
  TP_CENTRAL_SERVICE,
  RESOURCES,
  SERVICE,
  LIST_SERVICE_INFOS,
  SERVICE_INFOS,
  TRAIN,
};
