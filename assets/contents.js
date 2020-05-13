var jobs = [
  ['도둑', '연쇄절도범', '수호자', '담당일진', '약탈자', '방문판매원', '파괴자', '테러범', '교제사실을들킨', '뺏어먹는', '관찰자', '밑장빼기9단', '추종자', '셔틀', '지배자', '사재기빌런', '갈취왕', '단속반', '스틸러'],
  ['카사노바', '소리없는방귀빌런', '절대강자', '노숙자', '진상손님', '술고래', '터줏대감', '트월킹머신', '관짝춤머신', '화장실문지기', '탈모인협회장', '지박령', '푸드파이터', '잔반처리반', '앞을서성이는', '청소부장', '앞에서절두번하는', '축구대회태클마스터', '에서코딱지파다가뒤통수맞는', '개미핥기조련사', '공문서위조마스터', '층간소음마스터', '화장실변기뚜껑닫고볼일보는']
]
// 화장실변기뚜껑닫고볼일보는 -> 화장실 예외처리

var locations = [
  ['노인정', '사우나', '성인용품점', '러브호텔', '피시방', '국어학원', '수학학원', '영어학원', '과학학원', '기숙학원', '기숙사', '독서실', '대형마트', '스터디카페', '노약자석', '임산부석', '장애인석', '대형마트시식코너', '경찰서', '대중목욕탕', '무료급식소', '유치원', '초등학교', '중학교', '고등학교', '편의점', '학원가', '세탁소', '풋살장', '미용실', '찜질방', '동사무소', '전통시장', '태권도장', '놀이터', '헬스장', '할매순댓국밥', '버스정류장', '삼성프라자', '국회의사당', '흡연실', '아파트관리사무소', '생활관', '서점', '도서관', '급식실', '휴대폰대리점', '주유소', '공원', '에버랜드', '롯데월드', '지하철', '지하철역', '시내버스', '고속버스', '중화반점', '동대문시장', '맘스터치', '맥도날드', '롯데리아', '우정사업본부', '산채비빔밥먹는스님앞에서', '길고양이급식소', '휴지통속', '반찬가게', '동물원', '왁싱샵', '노인복지관', '공중화장실'],
  ['폐지줍는할머니', '포식자', 'AD', '수능시험장', '결국사람', '펩시', '유모차레이스', '엄마가준비한식사', '어린이보호구역', '노인에게서슴지않고', '어린이탐정단', '냉탕에오줌싸서', '스키장상급자코스', '장례식장', '고구려대학교', '고아원', '수능갤러리', '공사장', '군부대', '훈련소', '납골당', '논', '밭', '롯데마트', '시공의폭풍', '웹툰미리보기사이트', '파인애플피자', '주식', '비트코인', '도박', '토토', '대학원연구실', '내다버린', '식물인간에게', '온라인클래스', '시대에', 'ISIS', '박스에서자고있는', '머리카락못내밀면서', '다이어트하는친구', '부모님등골', '지구평면설', '붕어빵에', '클럽가서놀다보니', '자택에서', '교회에서', '절에서', '연애경험이', '친구에어팟', '택시타고', '게임의폭력성을이해하기위해', '배고파서', '배고프면', '틀니', '벽돌집벽돌', '고깃집공깃밥', '뻐꾸기훔쳐가려고']
]
// 비활성화:  '아이언', '실버', '골드', '떡볶이', '엽떡', '베라맛보기스푼으로', '싸이월드도토리'  
/* 목록이 길어져서 분리
작성규칙:
인덱스 0 : 장소
인덱스 1 : 특별한 위치 변수 정의용(장소가 아님)

* 인덱스 0 마지막 콤마(,) 잃어버리지 않게 조심
*/

var specificLocations = {
  '어린이보호구역': ['스피드레이서', true],
  '장례식장' : ['육개장미식가', true],
  '수능갤러리' : ['삼수생', true],
  '공사장' : ['안전모도둑', true],
  '노인에게서슴지않고' : ['돌을던지는', false],
  'Pornhub' : ['대주주', true],
  '웹툰미리보기사이트' : ['업로더', true],
  '어린이탐정단' : ['돋보기도둑', false],
  '냉탕에오줌싸서' : ['온탕으로바꾸는', false],
  '고아원' : ['에서아빠힘내세요를부르는', true],
  '군부대' : ['전화선절단범', true],
  '훈련소' : ['에서탄피하나잃어버린', false],
  '납골당' : ['generate.js 특별한 문장 정의에서 처리', true],
  '고구려대학교' : ['신입생', false],
  '논' : ['에불지르는', false],
  '밭' : ['에불지르는', false],
  '수능시험장' : ['에서소리지르는', false],
  '포식자' : ['정글유미원챔', false],
  'AD' : ['원딜티모원챔', false],
  '별수호자' : ['', false], 
  '사랑의추적자' : ['', false],
  '수영장파티' : ['', false],
  '겨울동화' : ['', false],
  '펩시' : ['성애자', true],
  '유모차레이스' : ['4관왕', true],
  '엄마가준비한식사' : ['먹다던지는', false],
  '롯데마트' : ['쇼핑카트뺑소니현행범', true],
  '스키장상급자코스' : ['앞구르기장인', true],
  '폐지줍는할머니' : ['폐지뺏어서똥닦는', false],
  '결국사람' : ['이름이되지못한', false],
  '시공의폭풍' : ['속으로빨려들어간', false],
  '파인애플피자' : ['위에민트초코올려먹는', false],
  '주식' : ['으로일가족전재산을날려버린', false],
  '비트코인' : ['으로일가족전재산을날려버린', false],
  '도박' : ['으로일가족전재산을날려버린', false],
  '토토' : ['로일가족전재산을날려버린', false],
  '아이언' : ['의페이커야스오장인', false],
  '실버' : ['의울프마스터이장인', false],
  '골드' : ['의테디아펠리오스장인', false],
  '대학원연구실' : ['커피마스터', false],
  '내다버린' : ['가문의수치', false],
  '식물인간에게' : ['물주는', false],
  '온라인클래스' : ['쓰리컴으로돌리다걸린', false],
  '시대에' : ['뒤쳐진', false],
  'ISIS' : ['행동대장', false],
  '박스에서자고있는' : ['노숙자포장하는', false], 
  '머리카락못내밀면서' : ['의견내미는대머리', false],
  '다이어트하는친구' : ['귀에먹방ASMR트는', false],
  '부모님등골' : ['먹방유튜버꿈나무', false],
  '지구평면설' : ['을믿는', false],
  '붕어빵에' : ['붕어없다고진상부리는', false],
  '클럽가서놀다보니' : ['이태원이었던', false],
  '떡볶이' : ['순한맛밖에못먹는', false],
  '엽떡' : ['순한맛밖에못먹는', false],
  '자택에서' : ['검거된', false],
  '교회에서' : ['염불외우는', false],
  '절에서' : ['주기도문외우는', false],
  '연애경험이' : ['전무한', false],
  '친구에어팟' : ['하수구에빠뜨려버리는', false],
  '택시타고' : ['다섯걸음앞에서내리는', false],
  '게임의폭력성을이해하기위해' : ['PC방전원을내려버린', false],
  '배고파서' : ['치킨집전단지뜯어먹는', false],
  '배고프면' : ['갈매기밥뺏어먹는', false],
  '틀니' : ['압수당한', false],
  '벽돌집벽돌' : ['빼서젠가하는', false],
  '고깃집공깃밥' : ['만먹고이쑤시개쓸어가는', false],
  '뻐꾸기훔쳐가려고': ['12시까지뻐구기시계앞에서서성이는', false],
  '베라맛보기스푼으로' : ['31가지맛다맛보다가뺨맞는', false]
}

var objects = [
  '수건', '때밀이수건', '할머니때밀이수건', '흑돌', '백돌', '러브젤', '노트', '교재', '연필심', '샤프심', '휴대폰충전기', '마우스', '지우개', '테이저건', '콘돔', '분필', '젓가락', '잔디', '바리깡', '틀니', '잼민이휴대폰', '할아버지지팡이', '종이컵', '비타민', '리코더', '줄넘기', '프로틴', '단백질', '다데기', '탈모치료제', '생각하는의자', '단무지', '진라면순한맛', '짝퉁명품', '할머니리어카', '진동벨', '이쑤시개', '영양갱', '계란장수계란', '씹던껌', '고양이사료', '개사료', '휴지쪼가리', '냅킨', '락앤락통', '슬리퍼', '가발', '곽티슈', '케찹', '빨대', '마스크', '이유식', '에어컨'
]

var exampleNames = [
  '엄준식', '박종현', '유현재', '고강건', '안주현', '김민식', '김준표', '오민서', '문성수'
]
// '정지웅', '노강민'

/* 인구순 나열 (동탄 제외) */
var exampleLocations = [
  '동탄', '서울', '부산', '인천', '대구', '대전', '광주', '울산', '제주', '수원', '고양', '용인', '창원', '성남', '청주', '부천', '화성', '남양주', '전주', '천안', '안산', '안양'
]
