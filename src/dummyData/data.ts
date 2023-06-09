import { dataType,menuType } from "./dataType"

export const data:dataType[] = [
	{ 
		category:"파워트레인",
		number:1,
		title:"바디 타입",
		menu:{
			type:menuType.titleType,
			menuData:[
				{title:"세단"},
				{title:"롱휠베이스"}
			]
		}
	},
	{
		category:"파워트레인",
		number:2,
		title:"엔진 타입",
		menu:{
			type:menuType.titleType,
			menuData:[{
				title:"가솔린 3.5 터보"
			}]
		}
	},
	{
		category:"파워트레인",
		number:3,
		title:"구동 타입",
		menu:{
			type:menuType.titleType,
			menuData:[
				{title:"2WD"},
				{title:"AWD"}
			]
		}
	},
	{

		category:"파워트레인",
		number:4,
		title:"인승 타입",
		menu:{
			type:menuType.titleType,
			menuData:[
				{title:"스탠다드 시트 (5인승)"},
				{title:"퍼스트 클래스 VIP 시트 (4인승)"}
			]
		}
	},

	{
		category:"외장 디자인",
		number:5,
		title:"외장 컬러",
		menu:{
			type:menuType.color,
			menuData:[
				{
					title:"글로시 (유광)",
					subMenu:["우유니 화이트","세빌 실버","마칼루 그레이","비크 블랙", "마우이 블랙", "한라산 그린", "카프리 블루","태즈먼 블루", "발렌시아 골드", "바릴로체 브라운"]
				},
				{
					title:"매트 (무광)",
					subMenu:["베르비에 화이트", "마칼루 그레이"]
				}
			]
		}
	},
	{
		category:"외장 디자인",
		number:6,
		title:"휠 & 타이어",
		menu:{
			type:menuType.titleType,	
			menuData:[
				{
					title:"19인치 다이아몬드 컷팅 휠",
					subTitle:"피렐리 타이어 (245/50R19)"
				},
				{
					title:"19인치 다이아몬드 컷팅 휠 + 멀티 챔버 에어 서스펜션",
					subTitle:"피렐리 타이어 (245/50R19)"
				},
				{
					title:"19인치 다이아몬드 컷팅 휠 + 멀티 챔버 에어 서스펜션 + 능동형 후륜 조향 (RWS)",
					subTitle:"피렐리 타이어 (245/50R19)"
				},
				{
					title:"20인치 다이아몬드 컷팅 휠",
					subTitle:"미쉐린 타이어 (245/45R20(앞), 275/40R20(뒤))"
				},
				{
					title:"20인치 다이아몬드 컷팅 휠 + 멀티 챔버 에어 서스펜션",
					subTitle:"미쉐린 타이어 (245/45R20(앞), 275/40R20(뒤))"
				},
				{
					title:"20인치 다이아몬드 컷팅 휠 + 멀티 챔버 에어 서스펜션 + 능동형 후륜 조향 (RWS)",
					subTitle:"미쉐린 타이어 (245/45R20(앞), 275/40R20(뒤))"
				},
				{
					title:"20인치 다크 하이퍼 실버 휠",
					subTitle:"미쉐린 타이어 (245/45R20(앞), 275/40R20(뒤))"
				},
				{
					title:"20인치 다크 하이퍼 실버 휠 + 멀티 챔버 에어 서스펜션",
					subTitle:"미쉐린 타이어 (245/45R20(앞), 275/40R20(뒤))"
				},
				{
					title:"20인치 다크 하이퍼 실버 휠 + 멀티 챔버 에어 서스펜션 + 능동형 후륜 조향 (RWS)",
					subTitle:"미쉐린 타이어 (245/45R20(앞), 275/40R20(뒤))"
				}				
			]
		}
	}
,
	{
		category:"내장 디자인",
		number:7,
		title:"내장 컬러 및 재질",
		menu:{
			type:menuType.color,
			menuData:[
				{
					title:"스탠다드 디자인",
					subMenu:["옵시디언 블랙 모노톤","옵시디언 블랙 / 보르도 브라운 투톤","어반 브라운 / 글레이셔 화이트 투톤","갤럭시 블랙 / 모던 그레이 투톤","벨벳 버건디 / 듄 베이지 투톤"],
				},
				{
					title:"시그니처 디자인 셀렉션",
					subMenu: ["옵시디언 블랙 모노톤","옵시디언 블랙 / 보르도 브라운 투톤","어반 브라운 / 글레이셔 화이트 투톤","갤럭시 블랙 / 모던 그레이 투톤","벨벳 버건디 / 듄 베이지 투톤"]
				}
			]
		}
	},
	{
		category:"내장 디자인",
		number:8,
		title:"인테리어 옵션",
		menu:{
			type:menuType.color,
			menuData:[
				{
					title:"인서트 필름",
					subMenu:["인서트 필름 (스탠다드 디자인)"]
				}
			]
		}
	},
	{
		category:"옵션 & 패키지",
		number:9,
		title:"추천 사양",
		menu:{
			type:menuType.option,
			menuData:[
				{
					title:"프리미엄 컬렉션",
					option:["컨비니언스 패키지","드라이빙 어시스턴스 패키지","뒷좌석 컴포트 패키지 I","하이테크 패키지"]
				},
				{
					title:"프리미엄 컬렉션 + 이지 클로즈 시스템",
					option:["컨비니언스 패키지","드라이빙 어시스턴스 패키지","뒷좌석 컴포트 패키지 I","하이테크 패키지","이지 클로즈 시스템"]
				},
				{
					title:"프리미엄 컬렉션 + 뒷좌석 컴포즈 패키지 II",
					option:["컨비니언스 패키지","드라이빙 어시스턴스 패키지","뒷좌석 컴포트 패키지 I","하이테크 패키지","뒷좌석 컴포트 패키지 II"]
				},
				{
					title:"프리미엄 컬렉션 + 뒷좌석 컴포즈 패키지 II + 이지 클로즈 시스템",
					option:["컨비니언스 패키지","드라이빙 어시스턴스 패키지","뒷좌석 컴포트 패키지 I","하이테크 패키지","뒷좌석 컴포트 패키지 II","이지 클로즈 시스템"]
				}
			]
		}
	},
	
	{
		category:"옵션 & 패키지",
		number:10,
		title:"옵션 선택",
		menu:{
			type:menuType.selectableOption,
			menuData:[
				{
					title:"파노라마 선루프",
					option:["파노라마 선루프"],
					selected:false
				},
				{
					title:"전동식 뒷좌석 듀얼 모니터",
					option:["전동식 뒷좌석 듀얼 모니터"],
					selected:false
				},
				{
					title:"하이테크 패키지",
					option:["헤드업 디스플레이","지능형 헤드램프"],
					selected:false
				},
				{
					title:"컨비니언스 패키지",
					option:["운전석 / 동승석 에르고 릴렉싱 시트","고스트 도어 클로징","무드 큐레이터"],
					selected:false
				},
				{
					title:"컨비니언스 패키지 + 이지 클로즈 시스템",
					option:["운전석 / 동승석 에르고 릴렉싱 시트","고스트 도어 클로징","무드 큐레이터","이지 클로즈 시스템"],
					selected:false
				},
				{
					title:"드라이빙 어시스턴스 패키지",
					option:["서라운드 뷰 모니터 (증강현실 내비게이션 포함)","후측방 모니터","원격 스마트 주차 보조 (광각 카메라 기반 주차 및 사선 주차 포함)","주차 충돌방지 보조 (전/측/후방)","앞좌석 프리 액티브 시트벨트"],
					selected:false
				},
				{
					title:"뒷좌석 컴포즈 패키지  I",
					option:["뒷좌석 전동 시트 / 통풍 시트","VIP 좌석 레그레스트","어드밴스드 3존 공조 (B필러 에어벤트)","뒷좌석 목베개 & 윙아웃 헤드레스트","뒷좌석 스마트폰 무선 충전"],
					selected:false
				},
				{
					title:"뒷좌석 컴포트 패키지 I + II",
					option:["뒷좌석 전동 시트 / 통풍 시트","VIP 좌석 레그레스트","어드밴스드 3존 공조 (B필러 에어벤트)","뒷좌석 목베개 & 윙아웃 헤드레스트","뒷좌석 스마트폰 무선 충전","뒷좌석 에르고 릴렉싱 시트 (뒷좌석 마사지, VIP 좌석 발 마사지)","VIP 좌석 풋레스트","뒷좌석 프라이버시 글라스"],
					selected:false
				},
				{
					title:"뒷좌석 컴포트 패키지 I + II + 컨비니언스 패키지",
					option:["뒷좌석 전동 시트 / 통풍 시트","VIP 좌석 레그레스트","어드밴스드 3존 공조 (B필러 에어벤트)","뒷좌석 목베개 & 윙아웃 헤드레스트","뒷좌석 스마트폰 무선 충전","뒷좌석 에르고 릴렉싱 시트 (뒷좌석 마사지, VIP 좌석 발 마사지)","VIP 좌석 풋레스트","뒷좌석 프라이버시 글라스","운전석 / 동승석 에르고 릴렉싱 시트","고스트 도어 클로징","무드 큐레이터"],
					selected:false
				},
				{
					title:"뒷좌석 컴포트 패키지 I + II + 컨비니언스 패키지 + 이지 클로즈 시스템",
					option:["뒷좌석 전동 시트 / 통풍 시트","VIP 좌석 레그레스트","어드밴스드 3존 공조 (B필러 에어벤트)","뒷좌석 목베개 & 윙아웃 헤드레스트","뒷좌석 스마트폰 무선 충전","뒷좌석 에르고 릴렉싱 시트 (뒷좌석 마사지, VIP 좌석 발 마사지)","VIP 좌석 풋레스트","뒷좌석 프라이버시 글라스","운전석 / 동승석 에르고 릴렉싱 시트","고스트 도어 클로징","무드 큐레이터","이지 클로즈 시스템"],
					selected:false
				},
				{
					title:"뱅앤올룹슨 사운드 패키지",
					option:["뱅앤올룹슨 프리미어 3D 사운드 시스템","버츄얼 베뉴"],
					selected:false
				},
				{
					title:"빌트인 캠 패키지",
					option:["빌트인 캠","보조 배터리"],
					selected:false
				},
				{
					title:"차량 보호 필름 (Genesis Genuine Parts)",
					option:["차량 보호 필름"],
					selected:false
				},
				{
					title:"플로팅 휠 캡 & 메탈 페달 (Genesis Genuine Parts)",
					option:["플로팅 휠 캡 & 메탈 페달"],
					selected:false
				}
			]
		}
	}
]

