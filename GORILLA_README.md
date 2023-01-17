The branch is for Gorilla Training Platform.
It should be synced with the Label Studio (https://github.com/heartexlabs/label-studio).


# Build a local image with Docker Bug
- 由於Build image是依照deploy/requirements.txt設置配另起一個環境進行Build，在原始檔案中drf_yasg版本有問題無法使用需修改版本

```
drf_yasg==1.20.0 => drf_yasg==1.21.4
```

# Build a local image with Docker
- build
    - 需有root權限
    - docker build -t 產生tag名稱 .
    ```
    sudo docker build -t label-studio:0.0.1 .
    ```
- push
    - 需有root權限
    - docker push 目標位置/tag名稱
    ```
    sudo docker push 192.168.10.223:5000/gtp-label-studio:0.0.1
    ```

- 192.168.21.100(home/gorilla/gtp-label-studio/docker-compose.yml)
    - 將image檔改為新的版號
    ```
    image: 192.168.10.223:5000/gtp-label-studio:0.0.2 => image: 192.168.10.223:5000/gtp-label-studio:0.0.3
    ```

- 進入對應資料夾
    - cd gtp-label-studio

- 重啟docker compose
    - docker compose down
    - docker compose up
    ```
    檢查服務是否有啟動，若有啟動則會顯示label-studio相關資訊
    確認後可ctrl+C關閉，改為常駐啟動
    ```
    - docker compose up -d