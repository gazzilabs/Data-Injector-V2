# Data-Injector-V2

![image](https://user-images.githubusercontent.com/73579881/220856566-82b92fb7-072f-4ef4-966c-5decbb77afb9.png)

### Data Injector V2 ? ###
Data Injector V2는 프로젝트 단위로 각 작업(work)을 순서 흐름(workflow)에 맞게 실행 및 관리할 수 있는 프로그램입니다. 각 프로젝트는 gazzilabs의 여러 솔루션에 대한 테스트를 하나의 작업으로 관리하며, 작업에 대한 설정을 쉽게 커스텀하고 작업에 대한 과정(워크플로우)과 결과(파일 리스트)를 보기 쉽게 확인할 수 있는 프로그램입니다.

### 기능 ###

프로젝트 데이터 관리
+ 데이터 추가 (NetworkDrive)
+ 데이터 변경 이력 관리 (watching)

작업
+ 전 작업 파일 리스트 출력
+ 기존 Data Injector V1 기능
  + COCO 데이터셋 변환
  + Video to Image
  + 자동 라벨링
  + Hawkeye
+ 신규 작업 추가
+ 작업 이력 확인
+ 작업 설정 커스터마이징

연동
+ XDQ 연동 (Data Injector의 순서 흐름에 추가한 동일한 데이터를 XDQ에 등록하여 XDQ에서 해당 데이터를 사용할 수 있도록 합니다)

뷰어
+ 원본 파일 리스트 출력
+ 작업 결과 파일 리스트 출력

### 환경세팅 / 라이브러리 ###
+ Python 3.11.2
+ Django 4.1.7
 + asgiref==3.6.0
 + sqlparse==0.4.3
 + tzdata==2022.7 
+ fontawesomefree 6.3.0

### HTML / JAVA SCRIPT / CSS 라이브러리 ###
(static 파일에 포함되어 있습니다)
+ Drowflow (https://jerosoler.github.io/Drawflow/)
+ Bootstrap 5.3 (https://getbootstrap.com/ )
+ Bootstrap Table (https://bootstrap-table.com/ )

### Install ###
1. 파이썬 3.11v 설치
2. 파이썬 가상환경 세팅
3. requirements 설치
