const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const prisma = new PrismaClient();

const RepairFacility = [
  {
    id: "clmz4i4090000yuj051lqpoi8",
    state: "Andhra Pradesh",
    address:
      "M/s. Green Waves Environmental Solution, Sy. No. 43/1, Mindi (V), Gajuwaka (M), Visakhapatnam District.",
    city: "Visakhapatnam",
    pincode: null,
  },
  {
    id: "clmz4i4090001yuj0trqp4xwv",
    state: "Andhra Pradesh",
    address:
      "M/s. Apna Bhoomi E-Waste Management Services, Sy. No. 119, Near Bharat Junction, Kusalapuram (V), Etcherla (M), Srikakulam District. - 532005",
    city: "Srikakulam",
    pincode: "532005",
  },
  {
    id: "clmz4i4090002yuj04g6u3ktd",
    state: "Andhra Pradesh",
    address:
      "M/s. Veera Waste Management Systems, Plot No. 42, Block-D Extension, IDA, Autonagar Visakhapatnam District.-530012,",
    city: "Visakhapatnam",
    pincode: null,
  },
  {
    id: "clmz4i4090003yuj0azbdvazs",
    state: "Andhra Pradesh",
    address: "M/s. Binbag Recycling Services Pvt. Ltd, Anatapur District",
    city: "Anatapur",
    pincode: null,
  },
  {
    id: "clmz4i4090004yuj00812ivmf",
    state: "Andhra Pradesh",
    address: "M/s. Clean Earth Green Earth Solutions, Krishna District",
    city: "Machilipatnam",
    pincode: null,
  },
  {
    id: "clmz4i4090005yuj0hgc19q41",
    state: "Andhra Pradesh",
    address:
      "M/s. E-Parisaraa Pvt. Ltd, Plot No. 42A/4, Sy. No. 285 Part And Sy. No. 288 (P), Gollapuam (V), Hindupuram (M), Annathapuramu Distirct",
    city: "Annathapuramu",
    pincode: null,
  },
  {
    id: "clmz4i4090006yuj00z3u58n0",
    state: "Andhra Pradesh",
    address:
      "M/s. World Scrap Recycling Solutions (P) Ltd Plot No 50,Chittor District",
    city: "Chittor",
    pincode: null,
  },
  {
    id: "clmz4i4090007yuj02jeum2ij",
    state: "Andhra Pradesh",
    address:
      "M/s World Scrap Recycling Solutions Pvt Ltd., Shed No 10 11 12,Chittor District",
    city: "Chittor",
    pincode: null,
  },
  {
    id: "clmz4i4090008yuj0m22dzmby",
    state: "Andhra Pradesh",
    address:
      "M/s. Sungeel India Recycling Pvt. Ltd., Plot No. 59C & 59D, APIIC Industrial Park, Gollapuram (V), Hindupur (M), Anantapur District-515211",
    city: "Anantapur",
    pincode: null,
  },
  {
    id: "clmz4i4090009yuj0rrck1nsn",
    state: "Andhra Pradesh",
    address:
      "M/s. Ramky ARM Recycling Pvt. Ltd., Plot No.84/A & B, Road, No. 20/5, JNPC, Parawada,Visakhapatnam District- 531019",
    city: "Visakhapatnam",
    pincode: "531019",
  },
  {
    id: "clmz4i409000ayuj0etcixxzb",
    state: "Assam",
    address:
      "M/s. United Global Trust, F-5, Zoo Road, S enduri Ali Path, Guwahati, Dist. Kamrup (M) Assam",
    city: "Guwahati",
    pincode: null,
  },
  {
    id: "clmz4i409000byuj044sn4n06",
    state: "Chhattisgarh",
    address:
      "M/s. ADV Metal Combine Pvt. Ltd., Shed No. - 25, Borai Industrial Growth Center, Rasmada, Dist.- Durg (C.G)",
    city: "Durg",
    pincode: null,
  },
  {
    id: "clmz4i409000cyuj0zymzat7w",
    state: "Chhattisgarh",
    address:
      "M/s. Star E-Processors, Village-Baktara, P.O.- Godi, Tehsil-Arung, District- Raipur, Chhattisgarh",
    city: "Raipur",
    pincode: null,
  },
  {
    id: "clmz4i409000dyuj04afvivpl",
    state: "Delhi",
    address:
      "M/s Fozia Traders, Khasra No.13/1, Saboli Mandoli Industrial Area, Delhi-110093",
    city: "Delhi",
    pincode: null,
  },
  {
    id: "clmz4i40a000eyuj0lg7pm66s",
    state: "Delhi",
    address:
      "M/s Muskan Technologies, B-96,Okhla Industrial Area,Phase-1,Delhi- 110020",
    city: "Delhi",
    pincode: "110020",
  },
  {
    id: "clmz4i40a000fyuj0pc13qv83",
    state: "Delhi",
    address:
      "M/s. Adatte E-Waste Management Pvt. Ltd., C6/23, Opposite to Post Office , Safdarganj Development Area, New Delhi",
    city: "Delhi",
    pincode: null,
  },
  {
    id: "clmz4i40a000gyuj0pvpk4f4f",
    state: "Delhi",
    address:
      "M/s. Shivnath Computers, E-47/2, 1st Floor, Okhla Phase-2, Delhi- 110019",
    city: "Delhi",
    pincode: "110019",
  },
  {
    id: "clmz4i40a000hyuj02g6fioyl",
    state: "Delhi",
    address:
      "M/s. Techchef E-Waste Solutions Private Limited, C-61, Top Floor, DDA Shed Okhla Industrial Area, Delhi-110020",
    city: "Delhi",
    pincode: null,
  },
  {
    id: "clmz4i40a000iyuj003ffu97p",
    state: "Delhi",
    address:
      "M/s. Greenscape Eco Management Private Ltd., 348, Patparganj Industrial Area, Delhi- 110020",
    city: "Delhi",
    pincode: "110020",
  },
  {
    id: "clmz4i40a000jyuj0fob2dp3x",
    state: "Delhi",
    address:
      "M/s. Shree Raman E-Waste, Plot No. 7, Khasra No. 487, Peeragarhi Industrial Area, Peeragarhi Village, Delhi -110087",
    city: "Delhi",
    pincode: null,
  },
  {
    id: "clmz4i40a000kyuj0zqa6hbld",
    state: "Gujarat",
    address:
      "M/s. E-coli Waste Management P. Ltd, Plot No.- 90 TO 92 Sabar Industrial Park Pvt. Ltd Vill- Asal Ta-Bhiloda Dist-Sabar kantha",
    city: "Himatnagar",
    pincode: null,
  },
  {
    id: "clmz4i40a000lyuj0zk6fomsj",
    state: "Gujarat",
    address:
      "M/s. Mangalam ECS Environment Ltd, ECS House, 11-12 Garden View, Opp. Auda Garden, Sindhu Bhawan road, Off SG Highway-Pakwan Circle, Bodakdev, Ahmedabad 380054",
    city: "Ahmedabad",
    pincode: "380054",
  },
  {
    id: "clmz4i40a000myuj07qsrm1lc",
    state: "Gujarat",
    address:
      "M/s. Pruthavi E-Recycle Pvt. Ltd., Plot No.- 31/32 Golden Industries Area Near Rolex Industries Vill- Kothariya Rajkot -360002",
    city: "Rajkot",
    pincode: null,
  },
  {
    id: "clmz4i40a000nyuj0i3baxiq5",
    state: "Gujarat",
    address:
      "M/s. E-Process House, Plot No. 136/F-1. 2nd Phase, GIDC, Dist Valsad VAPI 396195",
    city: "Vapi",
    pincode: "396195",
  },
  {
    id: "clmz4i40a000oyuj0r9b5to3t",
    state: "Gujarat",
    address:
      "M/s. Earth E-Waste Management Pvt. Ltd., Block No. 63, Sagun Ind. Estate, Type-A Paiky 11-A, Plot No. 1 to 5 & 10-D, Plot No. 1 to 5, Vill-Altodara, Tal. Opad, Dist. Surat   394130",
    city: "Surat",
    pincode: "394130",
  },
  {
    id: "clmz4i40a000pyuj0pgk0mqka",
    state: "Gujarat",
    address:
      "M/s. Recotech E-Waste Management, Plot No. 36-37, Aashirwad Industrial Estate, Udhana- Sachin Road, GIDC Naka, Sachine, Surat",
    city: "Surat",
    pincode: null,
  },
  {
    id: "clmz4i40a000qyuj0c3k3owib",
    state: "Gujarat",
    address:
      "M/s. E-Front Line Recyclling Pvt. Ltd., Shed No. C1B-905\\9, GIDC, Panoli, Tal: Ankleshwar, Distt: Bharuch, Gujarat- 394116",
    city: "Bharuch",
    pincode: "394116",
  },
  {
    id: "clmz4i40a000ryuj00qjkxpca",
    state: "Gujarat",
    address:
      "M/s. Dron E-Waste Solution, Plot No. 56, G.I.D.C., Gozariya, Tal & Distt; Mehsana, Gujarat- 382825",
    city: "Mehsana",
    pincode: "382825",
  },
  {
    id: "clmz4i40a000syuj095u5crzz",
    state: "Gujarat",
    address:
      "M/s. Eximo Recycling Pvt. Ltd., Plot No. 5/3, Raj Industrial Estate, Tal: Savli, Vadodara",
    city: "Vadodara",
    pincode: null,
  },
  {
    id: "clmz4i40a000tyuj0ljwbq6gp",
    state: "Gujarat",
    address:
      "M/s. Galaxy Recycling, Sr. No. 36/P1, P2, 37/P2, 38/P2, Plot No. 52 &53, Near Tirth Agro. Pvt. Ltd., At: Bharudi, Tal: Gondal, Rajkot",
    city: "Rajkot",
    pincode: null,
  },
  {
    id: "clmz4i40a000uyuj0chw9kqxl",
    state: "Gujarat",
    address:
      "M/s. Basant Clean Enviro Ltd., Plot No. 67, G.I.D.C., Kadi, Distt: Mehsana, Gujarat- 382715",
    city: "Mehsana",
    pincode: "382715",
  },
  {
    id: "clmz4i40a000vyuj0fgdf0yg2",
    state: "Gujarat",
    address:
      "M/s. Eco Green Recycling, Plot No. 4, Near- Dynamic Textile, Ozar Road, Mota Ponda, Kapaada, Distt: Valsad, Gujarat",
    city: "Valsad",
    pincode: null,
  },
  {
    id: "clmz4i40a000wyuj0w7dl4me9",
    state: "Gujarat",
    address:
      "M/s. Unicare E-Waste Recycler, Plot No. 9/1, Raj Industrial Park-III, Jarod-Savali Road, Karachiya, Tal: Savli, Distt: Vadodara- 391520",
    city: "Vadodara",
    pincode: "391520",
  },
  {
    id: "clmz4i40a000xyuj08tpgu2u4",
    state: "Gujarat",
    address:
      "M/s. Surbine Recycling (P) Ltd., Plot No. 765, GIDC Phase-II, Dared- 361004, Distt: Jamnagar",
    city: "Jamnagar",
    pincode: null,
  },
  {
    id: "clmz4i40a000yyuj0hrzob0bx",
    state: "Gujarat",
    address:
      "M/s. Greentech Recycling, Plot No. 5&6, Maharaja Estate, B/H: Ananad hotel, Sarkhej- sanand Road, Ahmedabad",
    city: "Ahmedabad",
    pincode: null,
  },
  {
    id: "clmz4i40a000zyuj0ptejksbx",
    state: "Gujarat",
    address:
      "M/s. Dinesh Appliances, Plot No: 10, R. K. Ind Estate, Rakhiyal, Ahmedabad",
    city: "Ahmedabad",
    pincode: null,
  },
  {
    id: "clmz4i40a0010yuj0m4waxxx9",
    state: "Gujarat",
    address:
      "M/s. Mahammad Salim & Brothers Near Umiya Weigh Bridge, GIDC- Sachin, Tal: Chorasi, Dist: Sachin-394230",
    city: "Surat",
    pincode: null,
  },
  {
    id: "clmz4i40b0011yuj0qwrswxgq",
    state: "Gujarat",
    address:
      "Electro Waste Solutions ,Plot no: 631, GIDC- Halol, Dist: Panchmahal,Godhra",
    city: "Godhra",
    pincode: null,
  },
  {
    id: "clmz4i40b0012yuj01vl1rbgi",
    state: "Gujarat",
    address:
      "Felix Industries Pvt Ltd, Plot No:123, Devraj Industrial Park, 200 ft Ring Road, Piplaj-Pirana Road, Piplaj- 382405, Dist: Ahmedabad",
    city: "Ahmedabad",
    pincode: null,
  },
  {
    id: "clmz4i40b0013yuj0hpboc17l",
    state: "Gujarat",
    address:
      "Ecotime Industries, Plot No: 98 & 99, Sparkle Industrial Estate, Tal: Jalalpor, Dist: Navsari 396436",
    city: "Navsari",
    pincode: "396436",
  },
  {
    id: "clmz4i40b0014yuj0hhja0x4b",
    state: "Gujarat",
    address:
      "Sharda Copper, Plot No: SME-06, Bardoli-2, (Miyawadi) Industrial Estate, Bardoli, Surat- 394601",
    city: "Surat",
    pincode: "394601",
  },
  {
    id: "clmz4i40b0015yuj0v8mmuzif",
    state: "Gujarat",
    address:
      "Bharuch Enviro Infrastructure Ltd (Beil), Plot no: 9701-16, 9801-28, 9901-28, 9601-04, 10001- 10008, G-7 & 8, 7924- 27, 9401-9412, 9501-9506, 7905 E to H, GIDC, Ankleshwar-393002, Ta: Ankleshwar, Dist: Bharuch",
    city: "Bharuch",
    pincode: null,
  },
  {
    id: "clmz4i40b0016yuj0114fx6nu",
    state: "Gujarat",
    address:
      "Star Recycling, Survey no: 44 P1P1 44P1P2 & 46, Plot no: 45, R K Industrial Zone-09, Kuwadva- Wankaner Road, Ranpur360023, Tal & Dist: Rajkot",
    city: "Rajkot",
    pincode: null,
  },
  {
    id: "clmz4i40b0017yuj01ldsbcy2",
    state: "Gujarat",
    address:
      "R Planet Integrated Solution Pvt. Ltd ,Plot no: 201, 202 (old block no. 264,265 paiki 1), Village : Zak-382330, Tal : Dahegam, Dist : Gandhinagar",
    city: "Gandhinagar",
    pincode: null,
  },
  {
    id: "clmz4i40b0018yuj0w91osp1h",
    state: "Gujarat",
    address:
      "Payas Recyclers, Survey No.2139, Plot No.28, Parshwa Industrial Park, B/H. Sandvik Asia, Ahmedabad-Mehsana Highway, Rajpur- 382740, Tal:Kadi, Dist: Mehsana",
    city: "Mehsana",
    pincode: null,
  },
  {
    id: "clmz4i40b0019yuj0qbsoqskf",
    state: "Gujarat",
    address:
      "ID Technocom, Plot No.C1-414/P, GIDC Estate Mansa, Visnagar Road, Vill-Mansa, Mansa382845, Dist : Gandhinagar",
    city: "Gandhinagar",
    pincode: null,
  },
  {
    id: "clmz4i40b001ayuj0lwzs5iku",
    state: "Gujarat",
    address:
      "M/s. Unity E-Recycling Co, Sr. No: 310/p, Plot No: 4, Danilimda, Ahmedabad-380028",
    city: "Ahmedabad",
    pincode: null,
  },
  {
    id: "clmz4i40b001byuj026vm6xfj",
    state: "Gujarat",
    address:
      "M/s. Mahaarana Industries Pvt. Ltd., Survey No. 466 & 475, Village: Timba, Ta: Daskroi, Dist; Ahmedabad",
    city: "Ahmedabad",
    pincode: null,
  },
  {
    id: "clmz4i40b001cyuj0olg0c6t2",
    state: "Gujarat",
    address:
      "M/s GL Recycling LLP, Survey No. 108, Village: Soliya, Ta.:Kotda Sangani, Dist.: Rajkot-360030",
    city: "Rajkot",
    pincode: null,
  },
  {
    id: "clmz4i40b001dyuj0jozyeytl",
    state: "Gujarat",
    address:
      "M/s. Electro Alloys Recycling And Transformation HUB, Plot No. 301/13 , GIDC Palej-392220, Bharuch",
    city: "Bharuch",
    pincode: null,
  },
  {
    id: "clmz4i40b001eyuj0mbvqp05f",
    state: "Gujarat",
    address:
      "M/s. Reart Recycling Private Limited., Plot No.365, Survey No.111p1, Golden Green Industrial Park (phase-D), Khambha-360311, Tal:Lodhika, Dist:Rajkot",
    city: "Rajkot",
    pincode: null,
  },
  {
    id: "clmz4i40b001fyuj0d1zop0wl",
    state: "Gujarat",
    address:
      "M/s. Tvarita Phones Pvt. Ltd., Plot No.171, Survey No. 846, N. H. 8, Vapi, Valsad-396191",
    city: "Vapi",
    pincode: null,
  },
  {
    id: "clmz4i40b001gyuj0dymcfcx8",
    state: "Gujarat",
    address:
      "M/s. Kalpana E-Recyclers, Plot No. 2486, Madhuban Industrial Park, Village: Kuha, Ta: Daskroi, Dist: Ahmedabad",
    city: "Ahmedabad",
    pincode: null,
  },
  {
    id: "clmz4i40b001hyuj0vhe6qi38",
    state: "Gujarat",
    address:
      "M/s. Enviro Green Recycling, Survey/Block No. 736/737, Village: Tarsadi., Ta: Mangrol, Dist: Surat -394125",
    city: "Surat",
    pincode: null,
  },
  {
    id: "clmz4i40b001iyuj0vlbxn4yo",
    state: "Gujarat",
    address:
      "M/s. Liberty Recycling, Survey No.1439, Old Survey No.256/1/5, Near Balda Industrial Park, Village: Balda, Tal: Pardi, Dist: Valsad",
    city: "Valsad",
    pincode: null,
  },
  {
    id: "clmz4i40b001jyuj0a5jcluff",
    state: "Gujarat",
    address:
      "M/s. Green Earth Management Company, Plot No. 13, Supreme   3 Industrial Park, Near Vibrant weighbridge, Zak- Kadadara Road, Vill.: Kadadara, Tal- Dahegam, Gandhinagar",
    city: "Gandhinagar",
    pincode: null,
  },
  {
    id: "clmz4i40b001kyuj0jw3129ri",
    state: "Gujarat",
    address:
      "M/s. Gujarat Green Recycling, Plot No. MSME- 500, Sanand-II, Engineering Industrial Estate, GIDC Sanand-II, Dist:Ahmedabad",
    city: "Ahmedabad",
    pincode: null,
  },
  {
    id: "clmz4i40b001lyuj0jfpmcux1",
    state: "Gujarat",
    address:
      "M/s. New India Sales Corporation, Plot No. C1B-1915, GIDC Panoli, Dist: Ankleshwar-394116",
    city: "Bharuch",
    pincode: null,
  },
  {
    id: "clmz4i40b001myuj0t4jw0mi8",
    state: "Gujarat",
    address:
      "M/s Technogreen Recycling Private Limited , Survey No.367-377, Village - Modasar. Tal- Sanand .Distt.Ahmedabad-382481",
    city: "Ahmedabad",
    pincode: null,
  },
  {
    id: "clmz4i40c001nyuj0hkf75mlu",
    state: "Gujarat",
    address:
      "M/s. Evergreen E Waste Management Pvt. Ltd., Plot No.: 30, 31, Kamla Amrut Industrial Park, At: Budasan kadi, Taluka & Dist.: Mehsana   382715",
    city: "Mehsana",
    pincode: "382715",
  },
  {
    id: "clmz4i40c001oyuj0coma90p0",
    state: "Gujarat",
    address:
      "M/s. Egnus Ewaste Solution Private Limited., Plot No.31, Village: Motwan, Tal: Ankleshwar, Dist.: Bharuch- 393020",
    city: "Bharuch",
    pincode: "393020",
  },
  {
    id: "clmz4i40c001pyuj0dp5fgrar",
    state: "Goa",
    address:
      "M/s Global E Waste Management Systems Plot No: Shop No 729/s-1 to 729/s-5 , Sonum Township Nessai Salcete   Goa",
    city: "Margao",
    pincode: null,
  },
  {
    id: "clmz4i40c001qyuj0oxroidq4",
    state: "Goa",
    address:
      "M/s. Group Ten Plus, H. No. 8/5, Abreovaddo , Saligao, Bardez, Goa",
    city: "Mapusa",
    pincode: null,
  },
  {
    id: "clmz4i40c001ryuj0w5dp640i",
    state: "Haryana",
    address:
      "M/s Honey Disposal Store, Plot No. 67-68 Jarrout Road, Village Mandour Industrial Area Ambala city.",
    city: "Ambala",
    pincode: null,
  },
  {
    id: "clmz4i40c001syuj0knvuokec",
    state: "Haryana",
    address:
      "M/s. Thapar Disposal Industries, 902A/5/6, Chara Mandi Road, Ambala city",
    city: "Ambala",
    pincode: null,
  },
  {
    id: "clmz4i40c001tyuj0xofou60o",
    state: "Haryana",
    address: "M/s. Mittal Battery, plot No. 349, Indl-Area, Ph- 1, Panchkula.",
    city: "Panchkula",
    pincode: null,
  },
  {
    id: "clmz4i40c001uyuj03poqj4ne",
    state: "Haryana",
    address: "M/s. Exigo Recycling Pvt. Ltd., G. T. Road, Samalkha Panipat",
    city: "Panipat",
    pincode: null,
  },
  {
    id: "clmz4i40c001vyuj06e12hein",
    state: "Haryana",
    address: "M/s. Exigo Recycling (P) Ltd., Barsat Road, Panipat",
    city: "Panipat",
    pincode: null,
  },
  {
    id: "clmz4i40c001wyuj0l2ukhens",
    state: "Haryana",
    address:
      "M/s. Adinath Recyclotronix (P) Ltd., Plot No.#361, Industrial Estate, HSIIDC, Panipat",
    city: "Panipat",
    pincode: null,
  },
  {
    id: "clmz4i40c001xyuj011tyiq8x",
    state: "Haryana",
    address:
      "M/s Earth Waste Management Pvt. Ltd. Vill- Ismaila, Distt. Rohtak",
    city: "Rohtak",
    pincode: null,
  },
  {
    id: "clmz4i40c001yyuj04gitsch6",
    state: "Haryana",
    address: "M/s. Giriraj Metal, P. No. 39 HSIIDC, IE, Kutana, Rohtak",
    city: "Rohtak",
    pincode: null,
  },
  {
    id: "clmz4i40c001zyuj02k8apn0f",
    state: "Haryana",
    address:
      "M/s. Green World International, Pvt. Ltd., GR 60-61 Ganpati Industrial Dham Industrial Area Bahadugarh Haryana",
    city: "Bahadugarh",
    pincode: null,
  },
  {
    id: "clmz4i40c0020yuj0jlo6n8gi",
    state: "Haryana",
    address: "M/s Renu Recycling Company , Plot No. 1257, MIE-B, Bahadurgarh",
    city: "Bahadugarh",
    pincode: null,
  },
  {
    id: "clmz4i40c0021yuj0sxbrk8k8",
    state: "Haryana",
    address:
      "M/s AMN E-Waste Management Pvt Ltd., Plot No. 171, Sector-59, Industrial Area, Faridabad",
    city: "Faridabad",
    pincode: null,
  },
  {
    id: "clmz4i40c0022yuj00r0wlaj0",
    state: "Haryana",
    address:
      "M/s Endeavor Re-processor and Recyclers India, Plot no. 323, Sec-24, industrial Area, Faridabad",
    city: "Faridabad",
    pincode: null,
  },
  {
    id: "clmz4i40c0023yuj08tn4kdcg",
    state: "Haryana",
    address:
      "M/s E-waste Solutions, Industrial Shed, 1A, Industrial Estate, Sec-6, Faridabad",
    city: "Faridabad",
    pincode: null,
  },
  {
    id: "clmz4i40c0024yuj02yxb1f0a",
    state: "Haryana",
    address:
      "M/s V S Enterprises, Plot no. 9, Pragati Vihar, Sector-59, Faridabad",
    city: "Faridabad",
    pincode: null,
  },
  {
    id: "clmz4i40c0025yuj09aft6yy1",
    state: "Haryana",
    address:
      "M/s Dotline Informatics Pvt. Ltd., Plot No. 302, Ph-V, HSIIDC, Indl. Estate, Rai, Distt. Sonipat",
    city: "Sonipat",
    pincode: null,
  },
  {
    id: "clmz4i40c0026yuj0ivuinvzo",
    state: "Haryana",
    address:
      "M/s RBH E-Waste Recycle Hub Pvt. Ltd. (old name M/s Satellite Vision India), Plot No. 130, HSIIDC, Rai, Distt. Sonipat",
    city: "Sonipat",
    pincode: null,
  },
  {
    id: "clmz4i40d0027yuj0goicku3i",
    state: "Haryana",
    address:
      "M/s Global Waste Solution, Village Ram Nagar, Tehsil Ganaur, Distt. Sonipat",
    city: "Sonipat",
    pincode: null,
  },
  {
    id: "clmz4i40d0028yuj0r1fhwmw3",
    state: "Haryana",
    address:
      "M/s Global Waste Solution Unit-II, Village Dhaturi Tehsil Ganaur, Distt. Sonipat",
    city: "Sonipat",
    pincode: null,
  },
  {
    id: "clmz4i40d0029yuj0tb42llbe",
    state: "Haryana",
    address:
      "M/s Tes Amm (India) Pvt. Ltd., Village Wazidpur Saboli, Distt. Sonepat",
    city: "Sonipat",
    pincode: null,
  },
  {
    id: "clmz4i40d002ayuj0tbygyw61",
    state: "Haryana",
    address: "M/s Bluenvir, 81, HSIIDC, Rai, Distt. Sonipat",
    city: "Sonipat",
    pincode: null,
  },
  {
    id: "clmz4i40d002byuj0gw4e65ei",
    state: "Haryana",
    address:
      "M/s. EARTH SENSE RECYCLE PVT LTD, Plot No. 100, Sector - 5, IMT Manesar, Gurugram",
    city: "Gurugram",
    pincode: null,
  },
  {
    id: "clmz4i40d002cyuj09mw66i60",
    state: "Haryana",
    address:
      "M/s. Nirvana Recycling Pvt. Ltd., Plot No. D-6, Udyog, Vihar, Phase-VI, Sector-37, Gurugram",
    city: "Gurugram",
    pincode: null,
  },
  {
    id: "clmz4i40d002dyuj0s9jaslw1",
    state: "Haryana",
    address:
      "M/s. Green Vortex Waste Management Pvt Ltd.Plot No 177, Sector 7, IMT Manesar",
    city: "Manesar",
    pincode: null,
  },
  {
    id: "clmz4i40d002eyuj0q4d3k76m",
    state: "Haryana",
    address:
      "M/s. SMS ENTERPRISES, Plot No. 544- D, First Floor, Sector -37, Pace city - II, Gurugram (Haryana)",
    city: "Gurugram",
    pincode: null,
  },
  {
    id: "clmz4i40d002fyuj0a48htjx2",
    state: "Haryana",
    address:
      "M/s. Apicem Recyclers Pvt. Ltd., Plot No. 359, Sector-8, IMT Manesar, Gurugram, Haryana",
    city: "Gurugram",
    pincode: null,
  },
  {
    id: "clmz4i40d002gyuj0k7cc5d40",
    state: "Haryana",
    address:
      "M/s. KM Global E-Waste Private Limited, Ground Floor Plot no. -359, Sector-8, IMT Manesar, Gurugram, Haryana",
    city: "Gurugram",
    pincode: null,
  },
  {
    id: "clmz4i40d002hyuj0dpxwyxa9",
    state: "Haryana",
    address: "M/s 3 R Recycler, Plot No. 392, Sector-8, IMT Manesar Gurugram",
    city: "Gurugram",
    pincode: null,
  },
  {
    id: "clmz4i40d002iyuj0z086fxhg",
    state: "Haryana",
    address:
      "M/s. Deshwal Waste Management Pvt Ltd, plot No-292, Sec-7, IMT Manesar, Gurugram, Haryana",
    city: "Gurugram",
    pincode: null,
  },
  {
    id: "clmz4i40d002jyuj0sq2h4a4j",
    state: "Haryana",
    address:
      "M/s. Deshwal Waste Management Pvt Ltd, Plot No. -116, Sec-8, IMT Manesar, Gurugram, Haryana",
    city: "Gurugram",
    pincode: null,
  },
  {
    id: "clmz4i40d002kyuj0ry5zxj43",
    state: "Haryana",
    address:
      "M/s. Namo E-Waste Management Ltd., 14/1, Mathura Road, Faridabad Haryana",
    city: "Faridabad",
    pincode: null,
  },
  {
    id: "clmz4i40d002lyuj0fin640sz",
    state: "Haryana",
    address:
      "M/s. E Waste Recyclers India, Shed no. 15 Roz Ka Meo Industrial Area Nuh.",
    city: "Nuh",
    pincode: null,
  },
  {
    id: "clmz4i40d002myuj07oeiqov5",
    state: "Haryana",
    address:
      "M/s Radhey Steel Traders, Vill. PatviBarara Road, Shahabad, Distt. Kurukshetra",
    city: "Kurukshetra",
    pincode: null,
  },
  {
    id: "clmz4i40d002nyuj0zih2pj72",
    state: "Haryana",
    address:
      "M/s Pegasus Waste Management Pvt. Ltd., Village -Bhora Kalan, Gurugram",
    city: "Gurugram",
    pincode: null,
  },
  {
    id: "clmz4i40d002oyuj06h04vtzz",
    state: "Haryana",
    address: "M/s. 3 R Zero Waste Pvt. Ltd.,Plot No.- 62,Sector-8, IMT Manesar",
    city: "Manesar",
    pincode: null,
  },
  {
    id: "clmz4i40d002pyuj03xr85657",
    state: "Haryana",
    address:
      "M/s. Ecoverva Waste Recycling Private Limited, Plot No. 350 Block C Village Pathreri Ansal Pioneer Industrial Park, Distt. Gurugram",
    city: "Gurugram",
    pincode: null,
  },
  {
    id: "clmz4i40d002qyuj0yrf2m1bf",
    state: "Haryana",
    address:
      "M/s. Naturevolt Recyclers India Pvt Ltd, Plot No. 323, Part-IV, Sector-24,Faridabad",
    city: "Faridabad",
    pincode: null,
  },
  {
    id: "clmz4i40d002ryuj0oxfepksb",
    state: "Haryana",
    address:
      "M/s. AV Green Soluti ons Pvt Ltd., Plot No. 274, Sector-24 , Industrial Area,Faridabad",
    city: "Faridabad",
    pincode: null,
  },
  {
    id: "clmz4i40d002syuj0va9avs5w",
    state: "Haryana",
    address:
      "M/s. Re Chakra Waste Management LLP., Plot No. -18, Sector-6, Faridabad",
    city: "Faridabad",
    pincode: null,
  },
  {
    id: "clmz4i40e002tyuj0eoeg5v1w",
    state: "Haryana",
    address:
      "M/s. CLG Projects LLP, Plot no 75-76 sector 59 pragati vihar Ballabgarh faridabad",
    city: "Faridabad",
    pincode: null,
  },
  {
    id: "clmz4i40e002uyuj0hyd0anx4",
    state: "Haryana",
    address:
      "M/s. SSL E Waste Management LLP, Plot No. 410, Sector- 68, IMT, Faridabad",
    city: "Faridabad",
    pincode: null,
  },
  {
    id: "clmz4i40e002vyuj03etrki6k",
    state: "Haryana",
    address: "M/s Shunty Disposal Store, Manmohan Nagar, G.T Road, Ambala city",
    city: "Ambala",
    pincode: null,
  },
  {
    id: "clmz4i40e002wyuj00t2p58zt",
    state: "Haryana",
    address:
      "M/s. Green Wealth Solutions Pvt. Ltd. Plot No. 109, IE, Kutana, HSIIDC, Hissar Road, Rohtak",
    city: "Rohtak",
    pincode: null,
  },
  {
    id: "clmz4i40e002xyuj0qj0js92i",
    state: "Haryana",
    address:
      "M/s. Endeavor Recyclers India Private Limited, 71//14/2/2, 71//15/1, Village- Hassangarh,Tehsil- Sampla, District- Rohtak, Haryana-124404",
    city: "Rohtak",
    pincode: null,
  },
  {
    id: "clmz4i40e002yyuj0xbaonfxy",
    state: "Himachal Pradesh",
    address:
      "M/s. Shivalik Solid Waste Management Ltd., (Unit  II), Village-Shabowal, Tehsil Nalagarh, District-Solan HP",
    city: "Solan",
    pincode: null,
  },
  {
    id: "clmz4i40e002zyuj0mu0ytj5k",
    state: "Himachal Pradesh",
    address:
      "M/s Ortech India Corporations, Plot No. 67-B, Industrial Estate, Lodhi Majra, Baddi,Solan",
    city: "Solan",
    pincode: null,
  },
  {
    id: "clmz4i40e0030yuj0vosccgdj",
    state: "Jammu & Kashmir",
    address: "M/s. VRG Groups, Gangyal",
    city: "Gangyal",
    pincode: null,
  },
  {
    id: "clmz4i40e0031yuj0io56785b",
    state: "Jammu & Kashmir",
    address: "M/s. Bashir Ahmad Babdemb, Srinagar",
    city: "Srinagar",
    pincode: null,
  },
  {
    id: "clmz4i40e0032yuj00ogbzhoe",
    state: "Jammu & Kashmir",
    address: "M/s. Bashir Enterprises Noorbagh, Srinagar",
    city: "Srinagar",
    pincode: null,
  },
  {
    id: "clmz4i40e0033yuj0lzu8mdqk",
    state: "Jharkhand",
    address:
      "M/s. Meliorate Lubes Pvt Ltd, Plot No. 606/A, Ward No. 4/34, Vikas Nagar, hesal Piska More, Ranchi Jharkhand - 834005",
    city: "Ranchi",
    pincode: "834005",
  },
  {
    id: "clmz4i40e0034yuj0w8gu5r3x",
    state: "Jharkhand",
    address:
      "M/s. Simran Infotech, Vill & P.O Kanak Chas, P.S. Chandan Kiari dist. Kokaro Jharkhand- 828134",
    city: "Kokaro",
    pincode: "828134",
  },
  {
    id: "clmz4i40e0035yuj0j8uo6pac",
    state: "Karnataka",
    address:
      "M/s. Sriram Eco Raksha Computer Services Pvt. Ltd. No. B-29, KSSIDC Indl. Estate, Bommasandra, Hosur Road, Anekal Taluk, Bangalore   560 099",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40e0036yuj0fzhbhi90",
    state: "Karnataka",
    address:
      "M/s. E-Friendly Waste Recyclers, First Floor, No. 17 1st, Cross, Azeez Sait Industrial Town, Nayandahalli, Bangalore-560039",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40e0037yuj0ou8mp951",
    state: "Karnataka",
    address:
      "M/s. Eco Globe E-Waste Recyclers, Plot No. 87, 2nd Phase, 2nd Sector, Bidadi Industrial Area, Bidadi Hobli, Ramanagra Taluk and District",
    city: "Ramanagra",
    pincode: null,
  },
  {
    id: "clmz4i40e0038yuj0m9ed5gen",
    state: "Karnataka",
    address:
      "M/s. E-Hasiru, No. 168/B, 1st Floor, 7th Main Road, 3rd Phase, Peenya Industrial Area, Bangalore   558",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40e0039yuj0ab0j58j0",
    state: "Karnataka",
    address:
      "M/s. Green Enabled IT Solutions Pvt. Ltd., No. 2/1, 27th Cross, Behind Krishna Grand Hotel, Banashankari 2nd Stage, Bengaluru",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40e003ayuj0l9ls78s6",
    state: "Karnataka",
    address:
      "M/s. Coral Waters, No. 8E, KIADB Industrial Area, Hoskote Taluk, Banglaore Rural District",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40e003byuj0lnq9116z",
    state: "Karnataka",
    address:
      "M/s. Royal Touch, No. 3/2, 2nd Cross, Ezakiel Industrial Estate, K. G Halli, Nagawara Main Road, Banglaore",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40e003cyuj079rmn36w",
    state: "Karnataka",
    address:
      "M/s. Pharmateck Consultancy, Sy. No. 40/1, Mangammanapalya, Bommanahalli",
    city: "Bommanahalli",
    pincode: null,
  },
  {
    id: "clmz4i40e003dyuj0nl3v80rd",
    state: "Karnataka",
    address:
      "M/s. Cerebra Integrated Technologies Ltd., Plot No. 41 to 46, Appasandra village, KIADB Indl. Area, Narasapura Hobli, kolar Taluk and District",
    city: "Kolar",
    pincode: null,
  },
  {
    id: "clmz4i40e003eyuj0228t4rxw",
    state: "Karnataka",
    address:
      "M/s. AGK Enterprises, Unit-I, No 33/A, Industrial  A  Layout, Bannimantap, Mysore - 570015",
    city: "Mysore",
    pincode: "570015",
  },
  {
    id: "clmz4i40f003fyuj0ejtabg79",
    state: "Karnataka",
    address:
      "M/s. Aptus Recycling Pvt. Ltd., Sy No. 241/4B, Magnur Village, Kirgavalu Hobli, Malavalli Taluk Mandya District- 571430",
    city: "Mandya",
    pincode: "571430",
  },
  {
    id: "clmz4i40f003gyuj05t3bksu8",
    state: "Karnataka",
    address: "M/s. E-Parisara Pvt. Ltd., No. 30-P3, Dabaspet Bangalore",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40f003hyuj0x2i7x7ha",
    state: "Karnataka",
    address:
      "M/s. Tech Logic, Unit-2, Shed No. 36, 2nd Main, Ranganathapura, Bangalore - 560 044",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40f003iyuj0g70lhdfs",
    state: "Karnataka",
    address:
      "M/s. E-Scrapy Recyclers, No.106, Andrahalli Main Road, Byreshwara Industrial Area, Peenya 2nd stage, Bangalore - 560 058",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40f003jyuj0ws5anr3h",
    state: "Karnataka",
    address:
      "M/s. KH E-Waste Recyclers, No. 104, 1st Main Road, 4th Cross, Azeez Sait Industrial Area, Nayandahalli, Bangalore   39",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40f003kyuj054rf42dw",
    state: "Karnataka",
    address:
      "M/s. RPN Industries, Plot No B2, KSSIDC Industrial Area, Kumbalgodu, Mysore Road, Bangalore-74",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40f003lyuj05k3b523v",
    state: "Karnataka",
    address:
      "M/s. I Seven, # 9/4, Kachohalli Industrial Estate Kachohalli, Near Saibaba Temple, Laxmipura Post, Bengaluru- 562123",
    city: "Bengaluru",
    pincode: "562123",
  },
  {
    id: "clmz4i40f003myuj0msseeltx",
    state: "Karnataka",
    address:
      "M/s. Greenscape Eco Management Pvt. Ltd., Plot No. R-12, Veerasandra Indl Area, Anekal Tq, Bangalore Urban District   100",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40f003nyuj0kkcli3d6",
    state: "Karnataka",
    address:
      "M/s. Trishyirya Recycling India Pvt. Ltd., No. 315, 4th Phase, Peenya Industrial Estate, Bangalore - 560 058",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40f003oyuj038mfvukg",
    state: "Karnataka",
    address:
      "M/s. E Pragathi Recycling Plot No. 66, Road No. 18, Anthaasanahalli Indl. Area, IInd Phase, Tumkur",
    city: "Tumkur",
    pincode: null,
  },
  {
    id: "clmz4i40f003pyuj0dj3wrygk",
    state: "Karnataka",
    address:
      "M/s. Ingram Micro India Pvt. Ltd., I Floor, Plot No. 1-4, Sy No. 5/2, 15th Km, Singasandra Post, Baretena Agrahara, NH-7, Hosur Main Road, Bangalore- 560100",
    city: "Bengaluru",
    pincode: "560100",
  },
  {
    id: "clmz4i40f003qyuj05cb6u65d",
    state: "Karnataka",
    address:
      "M/s. Vans Chemistry, Plot No. 94/5, Shed NO. 13R14, SRRLayout, Kannalli Village, Bangalore- 560094",
    city: "Bengaluru",
    pincode: "560094",
  },
  {
    id: "clmz4i40f003ryuj0ypdig48d",
    state: "Karnataka",
    address:
      "M/s. Moogambigai Metal Refineries, Unit (3), Plot No. 174, Industrial Area, Baikampady Mangalore- 575011",
    city: "Mangalore",
    pincode: "575011",
  },
  {
    id: "clmz4i40f003syuj0zica6l4k",
    state: "Karnataka",
    address:
      "M/s. Sogo Synergy Private Limited, Shed No. A- 57, KSSIDC Industrial Estate, Bommasandra, Hosur Road, Anekal Taluk, Bangalore Urban District   560099",
    city: "Bengaluru",
    pincode: "560099",
  },
  {
    id: "clmz4i40f003tyuj0f3ohw82q",
    state: "Karnataka",
    address:
      "M/s. MKK E-Waste Enterprises, Shed No. 292, Belur Industrial Area, Belur, Dharwad Dist- 580011",
    city: "Dharwad",
    pincode: "580011",
  },
  {
    id: "clmz4i40f003uyuj0uq81zcr0",
    state: "Karnataka",
    address:
      "M/s. BSMR Metals, No. R. O 7, KSSIDC Industrial Estate, Veerasandra II stage, Attibele Hobli, Bangalore Urban District",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40f003vyuj0gblf7jmf",
    state: "Karnataka",
    address:
      "M/s. Mak Technology Industrial, Shed No. SP-5, Veerasandra KSSIDC Industrial Estate, Phase 0- 11, 3rd Cross, Huskur Min Road, Electronic city Post, Bengaluru",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40f003wyuj0i0vye749",
    state: "Karnataka",
    address:
      "M/s. Earth Sense Recycle Pvt. Ltd., Printech Park Cluster 1st Phase, Plot No. A17, Kanakapura Taluk, KIADB Industrial Area Harohally Village Han, Harohalli, Ramanagara, Bangalore- 562112",
    city: "Bengaluru",
    pincode: "562112",
  },
  {
    id: "clmz4i40f003xyuj0lq6tt3io",
    state: "Karnataka",
    address:
      "M/s. 4R Recycling Pvt Ltd, Shed No A-5, Industrial Estate, Peenya 3rd Stage Industrial area, Nallakadirenahalli Village, Yeshwanthpur Hobli, Bangalore North Taluk, Bangalore.",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40f003yyuj03v3bvhmh",
    state: "Karnataka",
    address:
      "M/s. Prakruthi Recycling Pvt. Ltd., Sy No. 22, Flat No. 103, 5th Block, 5th Cross, SSI Area, Rajajinagar, Bangalore- 560010",
    city: "Bengaluru",
    pincode: "560010",
  },
  {
    id: "clmz4i40f003zyuj0ahy1pxvl",
    state: "Karnataka",
    address:
      "M/s. Elxion Pvt. Ltd., P. No. 24, 23rd A. Main Road, J.P Nagar 2nd Phase Indl Bangalore- 560078",
    city: "Bengaluru",
    pincode: "560078",
  },
  {
    id: "clmz4i40f0040yuj0f7qx21ll",
    state: "Karnataka",
    address:
      "M/s. K. G. Nandini Enterprises, No. 46/4, 46/5, Billakempanahalli Village, Bidadi Hobli, Ramanagaram District.",
    city: "Ramanagaram",
    pincode: null,
  },
  {
    id: "clmz4i40f0041yuj0ecdfvuu8",
    state: "Karnataka",
    address:
      "M/s. Eco Bird Recycling Company Pvt. Ltd., No. 185, Azeez Sait industrial Area, Nayandahalli, Mysore Road, Bangalore -39",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40f0042yuj0a6avkkon",
    state: "Karnataka",
    address:
      "M/s. Afeefa Spectro Alloys, Sy No. 289/1, Nagaragere village, Gauribidnur Tq.",
    city: "Gauribidnur",
    pincode: null,
  },
  {
    id: "clmz4i40f0043yuj05vgnzzwd",
    state: "Karnataka",
    address:
      "M/s. Rashi E-Waste Solutions Pvt. Ltd., SW-51, Shed No. 26, Phase II, Apparel Park, Doddaballapura, Bangalore Rural District",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g0044yuj0ekamaobi",
    state: "Karnataka",
    address:
      "M/s. Coral Communication and Networks Pvt. Ltd., No. 52, Hoskote Industrial area, Bangalore Rural District",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g0045yuj0b2buedz0",
    state: "Karnataka",
    address:
      "M/s. Ash Recyclers, No. 3, KSSIDC Ind Estate, Hoskote, Bangalore Rural District",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g0046yuj06kn44zkd",
    state: "Karnataka",
    address:
      "M/s. E Pragathi Recycling, Plot No. 66, Road No. 18, Antharasanahalli Indl Area, IInd Phase, Tumkur",
    city: "Tumkur",
    pincode: null,
  },
  {
    id: "clmz4i40g0047yuj0li5h2kqp",
    state: "Karnataka",
    address:
      "M/s Sheltron Digital systems Pvt.Ltd No.27, maney estate, Sy.no.121, Kumbalgodu, Bengaluru-560074",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g0048yuj01borydeo",
    state: "Karnataka",
    address:
      "M/s Tes-Amm, India pvt. Ltd. Sy. No. 118, Site. No. 8, Mookambika Temple Road, Machodalli Forest Gate, Magadi Road, Bangalore",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g0049yuj0fsxcn7wm",
    state: "Karnataka",
    address:
      "M/s Sonal Metacop, No.5, Sy No.5/1, Kachohalli Industrial Estate, Kachohalli, Laxmipura Post, Bangalore-562123",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g004ayuj0ksurfa14",
    state: "Karnataka",
    address:
      "M/s E-Ward & Co. No.11, Mutthachari Industrial area, Nayandahalli, Mysore road, Bangalore-560039",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g004byuj0fy1191u1",
    state: "Karnataka",
    address:
      "M/s. Swadesh Recyclers LIP,Sy. No. 216, KIADB Industrial Area, Koorandahalli Village, Malur Taluk Kolar District",
    city: "Kolar",
    pincode: null,
  },
  {
    id: "clmz4i40g004cyuj0qq3875r7",
    state: "Karnataka",
    address:
      "M/s. FR E-Waste Enterprises, Shed No. 120, Katha No 120/B, 52120/C, 5th Cross, Azeez Saig Industrial Area, Nayandahalli, Ward No 131, BBMP RR Nagar Zone, Bengaluru   560039",
    city: "Bengaluru",
    pincode: "560039",
  },
  {
    id: "clmz4i40g004dyuj0sz7gz1t0",
    state: "Karnataka",
    address:
      "M/s. Amara metals enterprises, No V20/1, 4th main, 2nd stage, Peenya Industrial Area, Bengaluru -560058",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g004eyuj0jqbt8iys",
    state: "Karnataka",
    address:
      "M/s. Sri sai company # R-15, Katha No.320/322/29, Chikkanagamangala, Sarjapura Hobli, Anekal Taluk, Bengaluru",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g004fyuj04mxnm9kh",
    state: "Karnataka",
    address:
      "M/s. Global E-waste Management Services, P- 21, Hebbal Industrial area, Hebbal I Phase, Mysuru",
    city: "Mysuru",
    pincode: null,
  },
  {
    id: "clmz4i40g004gyuj0ie3nd1kk",
    state: "Karnataka",
    address:
      "M/s. Echakra Innovations Pvt Ltd SB/47, 1st Cross, Peenya Ind Estate-Stage-1, Bengaluru",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g004hyuj0mzs48vxc",
    state: "Karnataka",
    address:
      "M/s. HMG Eco care Recycling ,C-22 3rd cross, Kumbalagodu, Bangalore560074",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g004iyuj0rptoeunr",
    state: "Karnataka",
    address:
      "M/s. Npewaste Private limited, Plot No. 96, Koorgalli Industrial Area, Belavadi Post, Mysuru -570018",
    city: "Mysuru",
    pincode: null,
  },
  {
    id: "clmz4i40g004jyuj0rfwlsrlf",
    state: "Karnataka",
    address:
      "M/s. Earth Care E-waste Private Limited., Plot No.15,KIADB Industrial Area, 155, Kumbalgodu, KIADB Industrial Area, Kumbalgodu Village, Kengeri Hobli, Bengaluru South Taluk, Bengaluru",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g004kyuj0h85ijmj4",
    state: "Karnataka",
    address:
      'M/s. E-Plant Recycling, Plot No. 242/A, 2" Phase, Narasapura Industrial Area, Kolar Tq & District',
    city: "Kolar",
    pincode: null,
  },
  {
    id: "clmz4i40g004lyuj0wa3aktf7",
    state: "Karnataka",
    address:
      "M/s. Greens Recology,Plot No. 415, KIADB, Vasanthanarapura Industrial Area, Tumakuru Taluk and District",
    city: "Tumakuru",
    pincode: null,
  },
  {
    id: "clmz4i40g004myuj0jkd79adt",
    state: "Karnataka",
    address:
      "M/s. India Best Way Recycling, Shed No. 08 (Mane Industrial Estate), Sy. No. 155, Kumbalgodu Village, Kengeri Hobli, Bengaluru South Taluk, Bengaluru Urban District  560074",
    city: "Bengaluru",
    pincode: "560074",
  },
  {
    id: "clmz4i40g004nyuj0trt9oaus",
    state: "Karnataka",
    address:
      "M/s. Eco Trend recyclers #81 A & 82A Kachohalli Industrial Estate,Dasanpura Hobli, Bengaluru",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g004oyuj0juv2pj9z",
    state: "Karnataka",
    address:
      "M/s. Extract,Plot No. 14/A, KIADB, Attibele Indl. Area, Anekal Taluk, Bengaluru",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40g004pyuj0noo7wk6g",
    state: "Karnataka",
    address:
      "M/s. Gopalan reprocessors India Pvt Ltd No.131, A Main Road, Industrial Suburb, Peenya Ii Stage, Bengaluru",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40h004qyuj0wpvoamx7",
    state: "Karnataka",
    address:
      'M/s. IKON Recyclers .,Plot No.5, Ground & 2" Floor, 2nd Cross, 2" Main Road, Magadi Road, Bengaluru -560079',
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40h004ryuj0r7idl78f",
    state: "Karnataka",
    address:
      "M/s. E-Scrappy Recyclers,No. 106, Adrahalli main road, Byreshwara industrialEstate, Peenya 2nd stage, Bengaluru -560091",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40h004syuj0zbu41odt",
    state: "Karnataka",
    address:
      "M/s. Global Tech RecyclersNo-8/5,2nd Building, 1st Cross,,Kachohalli Village &Kachohalli Industrial Estate,Lakshmipura Post, Dasanapura",
    city: "Dasanapura",
    pincode: null,
  },
  {
    id: "clmz4i40h004tyuj0gfhnc6ct",
    state: "Karnataka",
    address:
      "M/s. GRKMS Private Limited,1st Stage, Sompura,Bharathipura Dabaspet,Bengaluru- 562111",
    city: "Bengaluru",
    pincode: "562111",
  },
  {
    id: "clmz4i40h004uyuj05r3zcru2",
    state: "Karnataka",
    address:
      "M/s. Communication Test Design, India Private Limited Plot No 48, Near Balaji Temple, Peenya II Phase, Bengaluru -560058,",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40h004vyuj053er721u",
    state: "Karnataka",
    address:
      "M/s. JSA Web solutions, Plot No. 93 A-4, Phase II, Jigani Industrial Area, Jigani Hobli, Anekal Taluk Bengaluru",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40h004wyuj01fnb9ipt",
    state: "Karnataka",
    address:
      "M/s. Recycler India MGT LLP , Plot No.679 to 689, KIADB industrial area , Harohalli 3rd phase Kanakapura Taluk, Ramanagara District",
    city: "Ramanagara",
    pincode: null,
  },
  {
    id: "clmz4i40h004xyuj0s49gq5gk",
    state: "Karnataka",
    address:
      "M/s. Trishyiraya Recycling India pvt Ltd, SW51, Apparel park, indl area, Bashettihalli & part of Arehalli, Shed no.10, Doddballapura, Bengaluru- 561203",
    city: "Bengaluru",
    pincode: "561203",
  },
  {
    id: "clmz4i40l007dyuj0zktpokmz",
    state: "Maharashtra",
    address:
      "Manihar Enterprises, Survey No. 74, Village Goteghar, Tal. Thane , Dist. Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40h004yyuj0ktlf5qxk",
    state: "Karnataka",
    address:
      "M/s. Envirotech IT Solutions No.136, 1st Floor, Shiva Farm, Magadi Main Road,Vrushabhavathinagar, Bengaluru -560079",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40h004zyuj04jv9uyd4",
    state: "Karnataka",
    address:
      "M/s. Ace Recyclers, Plot No. C29, KSSIDC, Industrial Estate, Hoskote Taluk, Bengaluru - 562114",
    city: "Bengaluru",
    pincode: "562114",
  },
  {
    id: "clmz4i40h0050yuj0mnnd94n5",
    state: "Karnataka",
    address:
      "M/s. E-Pragathi Recycling Pvt. Ltd. Plot No. 564, Sy.No.55 & 52, Yelladadlu Village, Vasanthanarsapura, Industrial Area, 2nd Stage, Kara, Hobli, Tumkur -572128",
    city: "Tumkur",
    pincode: null,
  },
  {
    id: "clmz4i40h0051yuj07hnzs1a7",
    state: "Karnataka",
    address:
      "M/s. Best E-waste Recyclers Pvt Ltd., Plot No.459, Vasantha Narasapura Indl Area, 2nd Phase, Tumkur- 572138",
    city: "Tumkur",
    pincode: "572138",
  },
  {
    id: "clmz4i40h0052yuj0vvgikjuq",
    state: "Karnataka",
    address:
      "M/s. E2E Recycling Buisness Pvt Ltd No.550, Sy No.102(p)Beeragondanahalli, Village, SIA 2nd stage,Nelamangala, Bengaluru",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40h0053yuj09lxarha4",
    state: "Karnataka",
    address:
      "M/s. Return lab Recyclers pvt ltd. P.no.68, Sw- 51, Phase-2, Doddabalapura Apparel park, Bengaluru-561203",
    city: "Bengaluru",
    pincode: null,
  },
  {
    id: "clmz4i40h0054yuj0s53zi8qk",
    state: "Karnataka",
    address:
      "M/s. Think Recycling Pvt Ltd Plot No b-77 KSSIDC dustrialarea,Bommasand ra Bengaluru - 560099",
    city: "Bengaluru",
    pincode: "560099",
  },
  {
    id: "clmz4i40h0055yuj0qwbl7i2g",
    state: "Kerala",
    address:
      "M/s. Kerala Enviro Infrastructure Ltd, Infrastructure Ltd E Waste Dismantling Facility, Common TSDF project, Inside Fact-CD Campus, Ambalamedu, Kochi 682303",
    city: "Kochi",
    pincode: "682303",
  },
  {
    id: "clmz4i40h0056yuj0jaixj3ry",
    state: "Maharashtra",
    address:
      "Arihant E Recycling Pvt Ltd, Gut No.307/1, Shahada Road, Dondaicha, Tal -Sinkheda, Dist - Dhule",
    city: "Dhule",
    pincode: null,
  },
  {
    id: "clmz4i40h0057yuj0o3djqe85",
    state: "Maharashtra",
    address:
      "Eco-Recycling Ltd., Eco-House, Near Top Glass Enclave, Bhoipada, Near Range Office, Sativali Road, Vasai (E), Dist. Palghar",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40h0058yuj0zfurwc7h",
    state: "Maharashtra",
    address:
      "E-Incarnation Recycling Pvt. Ltd. Plot No. J-56, MIDC Area, Tarapur, Boiser, Dist: Palgar, Maharashtra - 401506.",
    city: "Palgar",
    pincode: null,
  },
  {
    id: "clmz4i40h0059yuj0zfh2bhma",
    state: "Maharashtra",
    address:
      "Evergreen Recyclekaro India Pvt. Ltd., Gut. No. 113/A, Village Pali, Tal. Wada, Dist. Palghar",
    city: "Palgar",
    pincode: null,
  },
  {
    id: "clmz4i40h005ayuj05bajp4ds",
    state: "Maharashtra",
    address:
      "Hi-Tech Recycling (I) Pvt. Ltd, Property No.193, Gat No. 89, Pune-Satara Road, Shindewadi, Tal: Bhor, Dist:- Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40h005byuj0e4x2d54s",
    state: "Maharashtra",
    address:
      "Justdispose Recycling Pvt Ltd. (Unit-II), S.No. 42/5,Kaddu Industrial Estate, Sativali Phata,Vasai (E), Tal-Vasai,Dist- Palghar.",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40h005cyuj0bhdam3td",
    state: "Maharashtra",
    address:
      "Pranam Enterprises, Sr. No. 286/116, Next to Badhe, Vill. Urali Deveshi, Tal. Haveli, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40i005dyuj0wiqw135a",
    state: "Maharashtra",
    address:
      "Techeco E-Waste Namo LLP, Gat No. 155 B/2, Village Dhakambe, Tal. Dindori, Dist. Nashik",
    city: "Nashik",
    pincode: null,
  },
  {
    id: "clmz4i40i005eyuj0uokb5vc5",
    state: "Maharashtra",
    address:
      "Threco Recycling LLP, Survey No. 153-3 & 149-1, Hedavli, Dist- Raigad.",
    city: "Raigad",
    pincode: null,
  },
  {
    id: "clmz4i40i005fyuj0a8mzf5ql",
    state: "Maharashtra",
    address:
      "WE-The Recycling Company, H. No. 2212, Sr. No. 9-1 N, Behind Essar Petrol Pump, Village Borpada, Tal. Bhiwandi, Dist. Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40i005gyuj0fmxbchxu",
    state: "Maharashtra",
    address:
      "ECO RESET PRIVATE LIMITED PLOT NO. 19/1, MOUZA BHOWARI, KAMPTEE, NAGPUR, MAHARASHTRA - 441001",
    city: "Nagpur",
    pincode: "441001",
  },
  {
    id: "clmz4i40i005hyuj02oe1qw1g",
    state: "Maharashtra",
    address:
      "ECO Friend Industries, Plot No. A-205, TTC Industrial Area, MIDC Pawane, Navi Mumbai, Tal. & Dist. Thane",
    city: "Mumbai",
    pincode: null,
  },
  {
    id: "clmz4i40i005iyuj0l8prykfm",
    state: "Maharashtra",
    address:
      "A. S. ENTERPRISES SHOP NO 4 SHANKAR TEMPLE JASMINE BLDG PESTAM SAGAR ROAD NO 4 CHEMBUR,Chembur,Mumbai Suburban - 400089",
    city: "Mumbai",
    pincode: "400089",
  },
  {
    id: "clmz4i40i005jyuj0k7vktetf",
    state: "Maharashtra",
    address: "AG Enterprises, Gat No. 815 (1), Kudalwadi, Chikhli, Pune 411062",
    city: "Pune",
    pincode: "411062",
  },
  {
    id: "clmz4i40i005kyuj02bzkrjyl",
    state: "Maharashtra",
    address:
      "Alfa Trading Co. KOLHAPUR Estate,YADAV NAGAR,,KHERANI ROAD,SAKINAKA,Andheri,Mumbai Suburban - 400072",
    city: "Mumbai",
    pincode: "400072",
  },
  {
    id: "clmz4i40i005lyuj05ntb8xx6",
    state: "Maharashtra",
    address:
      "Aman Trading Co. F/1, Annasagr Market, Behind Farooqi Hotel, Kurla Andheri Road, Jarimari, Kurla (W), Mumbai 400072",
    city: "Mumbai",
    pincode: "400072",
  },
  {
    id: "clmz4i40i005myuj0j5hbbikz",
    state: "Maharashtra",
    address:
      "Ambar Enterprises Awutade, Handewadi, Tal. Haveli, Dist. Pune 411028",
    city: "Pune",
    pincode: "411028",
  },
  {
    id: "clmz4i40i005nyuj0fyxaw7g1",
    state: "Maharashtra",
    address:
      "Amiable Electroning Pvt. Ltd. Plot No. D-141, Shirawane, TTC Industrial Area, MIDC Shiewane, Nerul, Navi Mumbai",
    city: "Mumbai",
    pincode: null,
  },
  {
    id: "clmz4i40i005oyuj0airlnbx0",
    state: "Maharashtra",
    address:
      "Anand Computer System 2160 B, Sadashiv Peth, Swamipuram Bldg, Shop No. 7,8,9, Pune - 411030",
    city: "Pune",
    pincode: "411030",
  },
  {
    id: "clmz4i40i005pyuj0y64dzs9g",
    state: "Maharashtra",
    address:
      "Ancus India Reprocessing Pvt. Ltd., shop No. 2, Bldg. No. 1, Tiwari Estate, Vill:-Dhaniv, Nalasopara , Vasai",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40i005qyuj0kbc5b9dr",
    state: "Maharashtra",
    address:
      "Aqsa Stamping, Plot no. 55, Rangara Industrial Estate, 33/35, Kiravali (Adivali), Tal. Panvel, Dist. Raigad.",
    city: "Raigad",
    pincode: null,
  },
  {
    id: "clmz4i40i005ryuj0bn4gz2nq",
    state: "Maharashtra",
    address:
      "ARSH RECYCLING PRIVATE LIMITED GAT No. 1750, RANJANGAON GANPATI, PUNE NAGAR ROAD, Ranjangaon Ganpati, Pune - 412209",
    city: "Pune",
    pincode: "412209",
  },
  {
    id: "clmz4i40i005syuj0tz27z0qw",
    state: "Maharashtra",
    address:
      "Asquare Industrial Solutions Gala No. 3, Plot No. 35, Mulgaon, MIDC Khopoli, Tal. Khopoli, Dist. Raigad",
    city: "Raigad",
    pincode: null,
  },
  {
    id: "clmz4i40i005tyuj0qeygj1t1",
    state: "Maharashtra",
    address: "Avis Technoways Plot No. A-58, MIDC Osmanabad, Dist. Osmanabad",
    city: "Osmanabad",
    pincode: null,
  },
  {
    id: "clmz4i40i005uyuj0y0suhh19",
    state: "Maharashtra",
    address:
      "Baban Plastic, Gut No. 1, At. Sajapur, Tal. & Dist. Aurangabad 401136",
    city: "Aurangabad",
    pincode: "401136",
  },
  {
    id: "clmz4i40i005vyuj0ak29qgom",
    state: "Maharashtra",
    address:
      "Bharat E Waste Recycling Co. Sr. No. 189, Vill. Waliv, Vasai-Virar city (M Corp), Palghar - 401208.",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40i005wyuj0p1yg3rte",
    state: "Maharashtra",
    address:
      "Bhavesh Enterprises, Sr. No. 225/11, Hissa No. 23, Gausiya Compound, Gate No. 1, Vill. Pimpri, Tal. & Dist. Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40i005xyuj0cut5xrbc",
    state: "Maharashtra",
    address:
      "BKE RECYCLING Adsul Mala, Shivram Nagar,Uruli Devachi,URULI DEVACHI,Pune - 412308",
    city: "Pune",
    pincode: "412308",
  },
  {
    id: "clmz4i40i005yyuj0dqemh9p3",
    state: "Maharashtra",
    address:
      "Bombay Metal Works, Sr. 54, Hissa No. 4, Dahisar Road, Pimpri, Tal & Dist: Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40i005zyuj04uiqm6mr",
    state: "Maharashtra",
    address:
      "Bombay Recyclers Pvt. Ltd. Gala No. P-17-18, S. No. 121/2, Balaji Industrial Park, Behind Hindalco Co. MIDC Taloja, Panvel, Dist. Raigad",
    city: "Raigad",
    pincode: null,
  },
  {
    id: "clmz4i40i0060yuj01w7nqlsf",
    state: "Maharashtra",
    address:
      "Bsqaure E-Waste Recyclers, Gala No. 800, Survey No. 69/3, Siddhivinayak Market, Mohammadia Estate, Pimpri, Thane, Dist: Thane,Maharashtra.",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40i0061yuj0beums8w2",
    state: "Maharashtra",
    address:
      "CBS EWaste Recycling Industries G.No. 18/63/2, At. Khanapur, Tal. Akole, Dist. Ahmednagar",
    city: "Ahmednagar",
    pincode: null,
  },
  {
    id: "clmz4i40j0062yuj0vdfitay0",
    state: "Maharashtra",
    address:
      "Chaudhary Metal 80/2, Village -Waliwali Dahisar, Mori, Mumbra Panvel Road, Group Grampachayat, Dist. Thane - 400612",
    city: "Thane",
    pincode: "400612",
  },
  {
    id: "clmz4i40j0063yuj0t789yqxs",
    state: "Maharashtra",
    address:
      "Clean Tech B/8, Gala no: 3, Parasnath indl Estate, Anjurphata Road, vill: Val, Tal: Bhiwandi Dist: Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40j0064yuj0k58jz9yo",
    state: "Maharashtra",
    address:
      "Connect Info Solutions India Private Limited c/o: A-one Logistics Shop No 4, Saibaba Apartment, Plot No 12, Sector 9, Near Corporation Bank, Khanda Colony, New Panvel - 410206",
    city: "Panvel",
    pincode: "410206",
  },
  {
    id: "clmz4i40j0065yuj0d4qe8i3b",
    state: "Maharashtra",
    address:
      "CPG Shell Mould & Casting, Plot No. W- 39, Additional MIDC, Satara",
    city: "Satara",
    pincode: null,
  },
  {
    id: "clmz4i40j0066yuj0peq71qmu",
    state: "Maharashtra",
    address:
      "E Clean E Green Recycling Umar Compound, Jabar Pada, Nalasopara, Vasai-Virar city (M Corp), Dist. Palghar 401208.",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40j0067yuj04il29ati",
    state: "Maharashtra",
    address:
      "Earth Sense Recycle Pvt. Ltd. A7, Gala No.1,2 & 3, Ground Floor, Prerana Complex, Val Village, Dapoda Road, Anjurphatta, Bhiwandi, District- Thane.",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40j0068yuj0qbu3dprg",
    state: "Maharashtra",
    address:
      "Eco Layer E-Waste Recycling S. No. 11, H. No. 1/1, PT-8, S. K. Indl. Estate, Choudhary Compound, Vasai E, Palghar",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40j0069yuj0za7r3fv9",
    state: "Maharashtra",
    address:
      "Eco Tantra LLP M-365, Raviwar Peth, Bohari Lane, Tal. & Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40j006ayuj0hjhdxfpf",
    state: "Maharashtra",
    address:
      "Eco Tech Recycling, C/6, (5), Sagar Industrial Estate, S. No. 46/4, Dhumal Nagar, Vasai (E), Tal: Vasai, Dist: Palghar.",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40j006byuj088zeo5fn",
    state: "Maharashtra",
    address:
      "Ecostar Recycling, Survey No.94 Hissa No.12 Mahadev Industrial, Near Ladi Company, Mumbra, Dist:- Thane- 400612.",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40j006cyuj049w204mn",
    state: "Maharashtra",
    address:
      "EMS Scrapo, S. No. 199, Hissa No. 3, Bharat Market, Khan Compound, Shil-Mahape Road, Shil, Tal. & Dist. Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40j006dyuj0m41ql9q6",
    state: "Maharashtra",
    address:
      "Envirocare Recycling Pvt. Ltd. Unit no: 8/ C-I Actual Industrial Complex , Uchat, Road, Village : Magathane, Tal : Wada Dist : Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40j006eyuj0ejc2vzj6",
    state: "Maharashtra",
    address:
      "Environment Experts, Gala No. 11, Lane, J. K. Compound, Opp. Roshan Comp. Kherani Road, Sakinaka, Mumbai",
    city: "Mumbai",
    pincode: null,
  },
  {
    id: "clmz4i40j006fyuj0lb3pfyon",
    state: "Maharashtra",
    address:
      "E-Recon Recycling Pvt. Ltd. Gut No. 94, Chitegaon, Tal. Paithan, Dist. Aurangabad",
    city: "Aurangabad",
    pincode: null,
  },
  {
    id: "clmz4i40j006gyuj0nukqmzuw",
    state: "Maharashtra",
    address:
      "E -Refine Corporation Gut No. 24, Plot No. 2, Dargah Road, Additional Daultabad, Tal. & Dist. Aurangabad",
    city: "Aurangabad",
    pincode: null,
  },
  {
    id: "clmz4i40j006hyuj07l3ju2hf",
    state: "Maharashtra",
    address:
      "E-Waste Global, Gate No. 2, Near Theur Phata, Lonikand, Pune Nagar Road, Tal. Haveli, Dist. Pune 412216",
    city: "Pune",
    pincode: "412216",
  },
  {
    id: "clmz4i40j006iyuj0fj2t72sb",
    state: "Maharashtra",
    address:
      "E-Waste Mart Survey No.94,Gala No.6,Umar Compound, Jahar Pada,Nalasopara, Vasai- Virar city (M Corp), District - Palghar - 401208.",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40j006jyuj0394r8h6a",
    state: "Maharashtra",
    address:
      "General Technologies India Pvt Ltd, Plot No. MBP-2, Building No.A-1, Office No. 1213, 12th Floor, Rupa Solitaire Building, TTC Industrial Area, Mahape, Dist. Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40j006kyuj0rlhdaw78",
    state: "Maharashtra",
    address:
      "GNG Electronics Pvt. Ltd. Sr. No. 54, Hissa No. Dahisar Rd, Pimpri, Tal. & Dist. - Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40j006lyuj0fb0nbdr6",
    state: "Maharashtra",
    address:
      "Go Green Recycling Unit No. 75/66, Hasti Industrial Estate, TTC Industrial Area, Mahape, Navi Mumbai",
    city: "Mumbai",
    pincode: null,
  },
  {
    id: "clmz4i40j006myuj0xo0br96c",
    state: "Maharashtra",
    address:
      "Grade Infratech Pvt. Ltd., Gut No. 849, Near Mahindra CIE, Ambethan Chakan, Village Chakan, Tal. Khed, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40j006nyuj035u1anmf",
    state: "Maharashtra",
    address: "Green Enviro Services, 118/1, Wasali, Tal. Khed, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40j006oyuj0np8mtv6t",
    state: "Maharashtra",
    address:
      "GREEN INDIA E-WASTE & RECYCLING OPC PVT. LTD. SURVEY NO. 74, HISSA NO. 1/A, House No. 500, POST- DAHISAR, District - Thane.",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40k006pyuj0jhu720r4",
    state: "Maharashtra",
    address:
      "Green IT Recycling Center Pvt Ltd Plot No. D-222, MIDC Ranjangaon, Dist.- Pune - 412209",
    city: "Pune",
    pincode: "412209",
  },
  {
    id: "clmz4i40k006qyuj0wb90ko0f",
    state: "Maharashtra",
    address:
      "Green IT Recycling Centre Pvt. Ltd. Gat No. 207, Plot No. 3 & 4, Near Scienunero Company, Near PMT Depot, Shindewadi, Tal. Bhor, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40k006ryuj0x1hmd5d3",
    state: "Maharashtra",
    address:
      "GREEN PLANET RECYCLING SOLUTIONS SURVAY NO 72/1/A, AT BHANDARLI, DHASAR MORI, OLD MUMBRA PANVEL ROAD, TAL THANE, DIST THANE, - 400612",
    city: "Thane",
    pincode: "400612",
  },
  {
    id: "clmz4i40k006syuj0u30y9xvy",
    state: "Maharashtra",
    address:
      "Green Tech Solution Industries Gat No. 83/1, A/p. Wakhari, tal. Pandharpur, Dist. Solapur 413304",
    city: "Solapur",
    pincode: "413304",
  },
  {
    id: "clmz4i40k006tyuj01fq6lf6z",
    state: "Maharashtra",
    address:
      "Green Valley E Waste Management Pvt Ltd Gut No. 525/10, Village-Ghosai, Saza-Met, Tal. Wada, Ghonsai, Palghar - 421312",
    city: "Palghar",
    pincode: "421312",
  },
  {
    id: "clmz4i40k006uyuj0kh3ndv4w",
    state: "Maharashtra",
    address:
      "Greenscape Eco Management Private LimitedMIDC Chakan Industrial Area (Ph-II), Pune - 410501",
    city: "Pune",
    pincode: "410501",
  },
  {
    id: "clmz4i40k006vyuj0f0bmiowk",
    state: "Maharashtra",
    address:
      "Hari Om Scrap Traders 957/43, K.P. 2nd Lane, S. P. Road, Opp. Om Namahshivaya Bldg. Mumbai Central, Mumbai",
    city: "Mumbai",
    pincode: null,
  },
  {
    id: "clmz4i40k006wyuj049nd8573",
    state: "Maharashtra",
    address:
      "Harshita Green Recyclers, Gat No. 452, Urse Talegaon Dhabade, Tal. Maval, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40k006xyuj0qlygn9dy",
    state: "Maharashtra",
    address:
      "Indian Scrap Traders Survey No. 11, Hissa No. 3/A, Ghusia Market, Gala no: 661, Vill: Pimpari, Post : Dahisar Dist: Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40k006yyuj0sf2vqu3x",
    state: "Maharashtra",
    address:
      "J Choudhary & Company Sr. No. 67/3, Pipewal Lane Mohammadiya Estate, Pimpri Old Mumbai Pune Road, pimpri, Thane 400612",
    city: "Pune",
    pincode: "400612",
  },
  {
    id: "clmz4i40k006zyuj049c5i2zt",
    state: "Maharashtra",
    address: "J.S.Enterprises Gat No-132, Khalumbre, Chakan - 410501",
    city: "Chakan",
    pincode: "410501",
  },
  {
    id: "clmz4i40k0070yuj0d44krim1",
    state: "Maharashtra",
    address:
      "JRS Recycling Solutions Pvt. Ltd. Gala No. 428, S. No. 74, Hissa No. 2A, Garib Nawaz Estate, Old Mumbai Pune Road, Dahisar, Dist. Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40k0071yuj018ns39be",
    state: "Maharashtra",
    address:
      "Just Dispose Recycling Pvt. Ltd. Unit No: 103,110,119, Arvind Industrial Estate, Navghar, Vasai (E), Dist: Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40k0072yuj0vwd5fwd9",
    state: "Maharashtra",
    address:
      "K. G. N. Traders Survey No. 11, Hissa No. 30, Gausiya Market, Village- Pimpri, Post-Dahisar, Dist. Thane - 400612",
    city: "Thane",
    pincode: "400612",
  },
  {
    id: "clmz4i40k0073yuj0oim4wgsi",
    state: "Maharashtra",
    address:
      "Kalawishwa Electrical, B-47 (Sub letting), MIDC Waluj, Dist. Aurangabad 431136",
    city: "Aurangabad",
    pincode: "431136",
  },
  {
    id: "clmz4i40k0074yuj04wtsizt9",
    state: "Maharashtra",
    address:
      "Kapila Enterprises, Gat No. 46/3, At. Post. Supa, Tal. Parner, Dist: Ahmednagar",
    city: "Ahmednagar",
    pincode: null,
  },
  {
    id: "clmz4i40k0075yuj0zg1j321s",
    state: "Maharashtra",
    address:
      "Kohinoor E-Waste Recycling Pvt. Ltd. Gut No. 205/1 and 205/2, Opp. Gurudatta Washing Centre, Dhekhu, Khalapur, Dist. Raigad",
    city: "Raigad",
    pincode: null,
  },
  {
    id: "clmz4i40k0076yuj0bv3nk03n",
    state: "Maharashtra",
    address:
      "KRISHNA METAL REFINERY Plot No.1-2/143 , Sapronde Village, Taluka - Wada, District- Thane - 400086",
    city: "Thane",
    pincode: "400086",
  },
  {
    id: "clmz4i40k0077yuj06k7k2zsm",
    state: "Maharashtra",
    address:
      "Kuldeep E-Waste Disposals, Sr. No. 50, Waghjainagar, Mabegaon Khurd, Katraj- Ambegaon Road, Katraj, Pune - 411046",
    city: "Pune",
    pincode: "411046",
  },
  {
    id: "clmz4i40k0078yuj0eshlksph",
    state: "Maharashtra",
    address:
      "Lilashana Sales, Ramdas Company, Nandra Road, khamgaon, Dist. Buldhana",
    city: "Buldhana",
    pincode: null,
  },
  {
    id: "clmz4i40k0079yuj0j9usk9og",
    state: "Maharashtra",
    address:
      "MAC FIX STATION OFFICE NO 201, MAKHIJA ARCADE, 35TH ROAD, KHAR BANDRA LINKING ROAD, Bandra, Mumbai Suburban - 400052",
    city: "Mumbai",
    pincode: "400052",
  },
  {
    id: "clmz4i40l007ayuj0omywzafw",
    state: "Maharashtra",
    address:
      "Mahalaxmi E- Recyclers Pvt. Ltd.Plot NO.77 & 78, Subplot No. 3A, Ramtekde Industrial Area, Hadapsar, Tal. Haveli, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40l007byuj0cneruxhl",
    state: "Maharashtra",
    address:
      "Maharashtra Enterprises, Plot No. 17, Rangara Industrial estate, Kiravali (Adivali), Old Thane Pune Road, Tal. Panvel, Dist. Raigad",
    city: "Raigad",
    pincode: null,
  },
  {
    id: "clmz4i40l007cyuj05uauh2ua",
    state: "Maharashtra",
    address:
      "Mahesh Traders Plot No. 316, Shree Shahu Market Yard, Tal. Karveer, Dist. Kolhapur",
    city: "Kolhapur",
    pincode: null,
  },
  {
    id: "clmz4i40l007eyuj05pvfyd61",
    state: "Maharashtra",
    address:
      "Manish Metal Gat No 925 , Near Ashtekar Bangla, A/P- Theur, Dist- Pune - 412110",
    city: "Pune",
    pincode: "412110",
  },
  {
    id: "clmz4i40l007fyuj0ytgdacth",
    state: "Maharashtra",
    address:
      "Map Trading Company Gat No. 670, Villoli, Tal. & Dist. Nashik 422010",
    city: "Nashik",
    pincode: "422010",
  },
  {
    id: "clmz4i40l007gyuj07mmolpjs",
    state: "Maharashtra",
    address:
      "Masstech Recycling LLP Gala no 56, 58, 59 & 82, M.J.K. Compound, Kherani Road, Sakinaka, Mumbai - 400072 - 400072",
    city: "Mumbai",
    pincode: "400072",
  },
  {
    id: "clmz4i40l007hyuj0qha4hddr",
    state: "Maharashtra",
    address:
      "Mauli Metals, Gut No. 222, At Kadachi Wadi, Post Chakan, Tal. Khed, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40l007iyuj0qrqpushv",
    state: "Maharashtra",
    address:
      "Mayra Corporation, Plot No. C-157, MIDC Malegaon, Tal. Sinnar, Dist. Nashik",
    city: "Nashik",
    pincode: null,
  },
  {
    id: "clmz4i40l007jyuj0p40xt1si",
    state: "Maharashtra",
    address:
      "Mukesh Metal Sr. No. 93, Hissa No. 1, Behind Deepesh Lodge Gotegar Uttarshiv, Mumbra Road, Dist. Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40l007kyuj0z1ci85vt",
    state: "Maharashtra",
    address:
      "Nagraj E-Waste Recycling S.No.41 Vill Asoli Mouza Mahalgaon Tah Kamptee Dist Nagpur - 441202",
    city: "Nagpur",
    pincode: "441202",
  },
  {
    id: "clmz4i40l007lyuj0va3k3gkk",
    state: "Maharashtra",
    address:
      "National Traders S. No. 103/1/2, Undri-Saswad Road, Autade, Handewadi, Tal. Haveli, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40l007myuj00vu03cxs",
    state: "Maharashtra",
    address:
      "National Trading Corporation, S. No. 56/1, Plot No. 18 & 19, Old Mumbai-Panvel Road, Village Pimpri, Tal. & Dist. Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40l007nyuj037gtwbb2",
    state: "Maharashtra",
    address:
      "Navkar RecyclingSr. No. 69, Hissa No. 15, Mahamadiya Estate, Mumbai Panvel Road, Post. Dahisar, Dist.Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40l007oyuj0n4e0cti4",
    state: "Maharashtra",
    address:
      "New Ecotech Recycling Survey no. 136, Hissa no. 364, At Post - Khaniwade, Taluka -Vasai, District- Palghar pincode -401305.",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40l007pyuj0pacbro0u",
    state: "Maharashtra",
    address:
      "New India Scrap Traders, Plot No. 31/E, Ashok Nagar, Dist. Aurangabad",
    city: "Aurangabad",
    pincode: null,
  },
  {
    id: "clmz4i40l007qyuj0z20sbi3l",
    state: "Maharashtra",
    address:
      "New Shivam Enteprises, Gala No. 326, At. Post. Khandale, Near Suruchi Dairy, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40l007ryuj0zunqudz3",
    state: "Maharashtra",
    address:
      "NICHOLAS RECYCLING PRIVATE LIMITED Nicholas Compound, Sativali Road, Valiv, Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40l007syuj0e7atdxw7",
    state: "Maharashtra",
    address:
      "Noble Trading Company, S. No. 11, Hissa No. 23, Gausiya Market, Village Pimpari, Old M. P. Road, Tal. & Dist. Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40l007tyuj00ycibrj9",
    state: "Maharashtra",
    address:
      "Om Recycling 19/2 Mangalwa Peth,19/2 mangalwar peth pune., Peth, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40l007uyuj0nzxh3qwd",
    state: "Maharashtra",
    address:
      "OM R V Interiors, S. N. 92, Hissa No. 3, At Pelhar, Tal. Vasai, Dist Palghar",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40l007vyuj0n65ujw96",
    state: "Maharashtra",
    address:
      "Pakeeza Traders, Plot No. 406, 407, 408, At. Soyapur, Tal. & Dist. Aurangabad",
    city: "Aurangabad",
    pincode: null,
  },
  {
    id: "clmz4i40l007wyuj0vmwjh669",
    state: "Maharashtra",
    address:
      "Perfect E-Waste Recyclers, Plot No. A-8/1, MIDC Chikhalthana, Tal. & Dist. Aurangabad",
    city: "Aurangabad",
    pincode: null,
  },
  {
    id: "clmz4i40l007xyuj0zcjzsgc6",
    state: "Maharashtra",
    address:
      "Poona E-Waste Solutions, 1/1009, Gat No. 2334/4, Wagholi, Pune 412207",
    city: "Pune",
    pincode: "412207",
  },
  {
    id: "clmz4i40l007yyuj07hcdb0tt",
    state: "Maharashtra",
    address:
      "Prabhunath Traders, Sr. No. 314, H. No. 2, uril Devachi, Tal. Haveli, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40m007zyuj00d9qv53s",
    state: "Maharashtra",
    address:
      "Process Recycling Gala No,2, S.No 302, Richard Compound Near Maharashtra Vajan Kata, umang pharma road vasai phata, Dist. Palghar",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40m0080yuj080y19erw",
    state: "Maharashtra",
    address:
      "Progressive Recycler LLP. MIDC Chakan Industrial area (PH-II), D-45, Tal:- khed, Dist:- Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40m0081yuj0q77uiyoa",
    state: "Maharashtra",
    address:
      "Pune Greens Electronic Waste Recycler Pvt. Ltd. Sr. No. 63/1, B-4/1, Handewadi Road, Hadapsar, Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40m0082yuj02ovzjf00",
    state: "Maharashtra",
    address:
      "R T Corporation, S.No.377, H.No.2, Ambisi Ganeshpuri Road, Village- Palsai, Tal: Wada, Dist-Palghar.",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40m0083yuj0ykdwolnl",
    state: "Maharashtra",
    address:
      "R.K.E-Recycling International LLP Gala no.-2, Tirupati Industrial Park, Sativali Road, Vasai East- 401208",
    city: "Thane",
    pincode: "401208",
  },
  {
    id: "clmz4i40m0084yuj0amrhgj2o",
    state: "Maharashtra",
    address:
      "Rcube Recycling Pvt Ltd. Shree Ganesh Indl Estate,Vasai Palghat,Khairpada,Palghar - 401330",
    city: "Palghar",
    pincode: "401330",
  },
  {
    id: "clmz4i40m0085yuj0oan5051u",
    state: "Maharashtra",
    address:
      "Recycling Future, S. No. 169, Bhangarpada, Post Kundevahll, Tal. Panvel. Dist. Raigad",
    city: "Raigad",
    pincode: null,
  },
  {
    id: "clmz4i40m0086yuj0t3iile2n",
    state: "Maharashtra",
    address:
      "Regreen Recycling FLT 205, POCKET 5, GANESHWADI CHS LTD., BLDG 5, BHIM NAGAR MIDC ANDHERI EAST, Mumbai Suburban - 400093",
    city: "Mumbai",
    pincode: "400093",
  },
  {
    id: "clmz4i40m0087yuj05impvltb",
    state: "Maharashtra",
    address:
      "Reteck Envirotech Pvt. Ltd. Plot No. 4 A, MIDC Taloja, Tal. Panvel, Dist. Raigad",
    city: "Raigad",
    pincode: null,
  },
  {
    id: "clmz4i40m0088yuj0jv7tor6p",
    state: "Maharashtra",
    address:
      "Right E-waste Recycle, S. No. 40/2/C, 40/3, Nashik Highway, Kalyan Sape Road, Tal. Bhiwandi. Dist. Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40m0089yuj0luvu3hz8",
    state: "Maharashtra",
    address:
      "Rolex Entrprises, Survey No. 218, Hissa No. 4/1, Dahisar, Navi Mumbai",
    city: "Mumbai",
    pincode: null,
  },
  {
    id: "clmz4i40m008ayuj0gz150a7p",
    state: "Maharashtra",
    address:
      "Royal Scrap Traders, Gut No. 23, Plot No. 8, Mayurnagar, Naregaon, Dist. Aurangabad",
    city: "Aurangabad",
    pincode: null,
  },
  {
    id: "clmz4i40m008byuj09287n9t4",
    state: "Maharashtra",
    address:
      "S. S. E-Waste Recyclers, Gut No. 442, Village Usar, Kondla Road, Tal. Wada, Dist. Palghar 421312",
    city: "Palghar",
    pincode: "421312",
  },
  {
    id: "clmz4i40m008cyuj07b4hcvj2",
    state: "Maharashtra",
    address:
      "S.K. Enterprises Plot No: 134 Paiki Sub Plot No.- 1, Ahmednagar Industrial Estate Co-Op. Society Ltd, Nagpur-Pune Road, Ta & Dist - Ahmedanagar-414005.",
    city: "Ahmedanagar",
    pincode: null,
  },
  {
    id: "clmz4i40m008dyuj02le16htt",
    state: "Maharashtra",
    address:
      "S K Enterprises, S. No. 77, Hissa No. 1, Hindustan Market, Dieghar, Tal. Shil, Dist. Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40m008eyuj0hnwwypm3",
    state: "Maharashtra",
    address:
      "S. N. Brothers, S. No. 305, Dongaripada, Near Classic Company, Vasai- Virar (M. Corp.), Dist Palghar",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40m008fyuj07fiucokv",
    state: "Maharashtra",
    address:
      "Saani Enterprises, Gut No. 64, Plot No. 65, Mahal Pimpri, Dist. Aurangabad",
    city: "Aurangabad",
    pincode: null,
  },
  {
    id: "clmz4i40m008gyuj0mxzt5iyc",
    state: "Maharashtra",
    address:
      "Sadab Traders Plot No. 1154, Gat No. 140/2A/1, Village Vilholi, Behind Jain Temple, Tal & Dist. Nashik - 422010",
    city: "Nashik",
    pincode: "422010",
  },
  {
    id: "clmz4i40m008hyuj0lgckhxro",
    state: "Maharashtra",
    address:
      "SAHARA ENTERPRISES GAT N0 65 DEHU ALANDI ROAD , CHIKHALI, TAL.HAVELI DIST.PUNE - 411062",
    city: "Pune",
    pincode: "411062",
  },
  {
    id: "clmz4i40m008iyuj027vhk3sv",
    state: "Maharashtra",
    address:
      "Sahara Traders, Gala No. 1, Ground Floor, Kalyan Road, Temghar, Tal. Bhiwandi, Dist. Thane",
    city: "Thane",
    pincode: null,
  },
  {
    id: "clmz4i40m008jyuj0gkguqtci",
    state: "Maharashtra",
    address:
      "Sayma E-Waste Solutions, S. No. 323, Hissa no. 3, A Plot No. B-27, Urali Devashi, Tal. Haveli, Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40m008kyuj0r1b34g5u",
    state: "Maharashtra",
    address:
      "Scape E Recycler Private Limited Near Bus Stand, Behind Hotel Chandralok,Shikshak Colony, Purna Dist. Parbhani,Purna ,Parbhani - 431511",
    city: "Parbhani",
    pincode: "431511",
  },
  {
    id: "clmz4i40m008lyuj0whh0fxn8",
    state: "Maharashtra",
    address:
      "Shabbir Traders Plot No. P/15 & 16, Sr. No. 119/120/121, Balaji Industrial Park, Behind Hindalco, Vill. Tondre, Tal. Panvel, Dist. Raigad",
    city: "Raigad",
    pincode: null,
  },
  {
    id: "clmz4i40m008myuj0gs6uflk7",
    state: "Maharashtra",
    address:
      "Shifa Traders, Gut No. 63, Dehu Moshi Road, Kudalwadi, Chikhali, Tal. Mulshi, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40n008nyuj015bbnr56",
    state: "Maharashtra",
    address:
      "Sigma Enterprises, Plot No. 5 & Gut No. 54/0, Adiwali, Tal. Panvel, Raigad",
    city: "Raigad",
    pincode: null,
  },
  {
    id: "clmz4i40n008oyuj0dxh057t2",
    state: "Maharashtra",
    address:
      "SK E-Waste Disposal, Gat No. 116, Fine Weight Bridge, Jadhavwadi, Chikhali, Tal: Haveli, Dist: Pune.",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40n008pyuj0mcw3aebi",
    state: "Maharashtra",
    address:
      "SOLAPUR ECON RECYFINE PLOT NO. K-47 MIDC CHINCHOLI, Taluka - MOHOL, Chincholikati, Solapur - 413255",
    city: "Solapur",
    pincode: "413255",
  },
  {
    id: "clmz4i40n008qyuj0blp4bp6l",
    state: "Maharashtra",
    address:
      "Spas Computers Pvt. Ltd. 7 & 12, Hema Industrial Estate, Premises, Cos Ltd. Sarvodaya Nagar, Rajmata Jijai Road, Jogeshwari E",
    city: "Jogeshwari",
    pincode: null,
  },
  {
    id: "clmz4i40n008ryuj0573nc2lz",
    state: "Maharashtra",
    address:
      "Star Envo Recycling (I) Private Limited, Gala No 3, Survey No. 11, Hissa No. 1/1, Choudhary Compound, Wakanpada, Pelhar, Waliv, Vasai (E), Tal. Vasai, Dist. Palghar",
    city: "Palghar",
    pincode: null,
  },
  {
    id: "clmz4i40n008syuj0wcmhk8v2",
    state: "Maharashtra",
    address:
      "Sultan Disposal Stores, S. No. 28/2A/B, Undri, Opp. R Point, Pune Saswad Road, Tal. Haveli, Dist. Pune 411028",
    city: "Pune",
    pincode: "411028",
  },
  {
    id: "clmz4i40n008tyuj0aahoiqos",
    state: "Maharashtra",
    address:
      "Suritex Pvt.Ltd. Plot No. B-111, MIDC Industrial Area, Butibori, District - Nagpur.",
    city: "Nagpur",
    pincode: null,
  },
  {
    id: "clmz4i40n008uyuj0vm20lyfu",
    state: "Maharashtra",
    address:
      "THE2BROS 70 AS KURLA ANDHERI ROAD,OPP JARIMARI TEMPLE,Chandivali,Mumbai Suburban - 400072",
    city: "Mumbai",
    pincode: "400072",
  },
  {
    id: "clmz4i40n008vyuj0ydgfl89m",
    state: "Maharashtra",
    address:
      "Trekomac Refurbs Pvt. Ltd. Plot No, G-3, Five Star MIDC Kagal Hatkanangale, Tal. Kagal, Dist. Kolhapur",
    city: "Kolhapur",
    pincode: null,
  },
  {
    id: "clmz4i40n008wyuj0mkx690l5",
    state: "Maharashtra",
    address:
      "Unity Enterprises, Gut No. 1745. Ranjangaon Ganpati, Tal. Shirur, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40n008xyuj0dqhflcyn",
    state: "Maharashtra",
    address:
      "Universal Waste Management Gala No. B-10, D. P. K. Compound, Khairani Road, Sakinaka, Mumbai   400072 - 400072",
    city: "Mumbai",
    pincode: "400072",
  },
  {
    id: "clmz4i40n008yyuj063p0vysw",
    state: "Maharashtra",
    address:
      "Vatsala Enterprises, Gut. No. 183-6, Village Rajapur, Tal. Sangamner, Dist. Ahmednagar",
    city: "Ahmednagar",
    pincode: null,
  },
  {
    id: "clmz4i40n008zyuj0pz2yczly",
    state: "Maharashtra",
    address:
      "Vora Computers Pvt. Ltd. 1B, Lara Apartments, Sadhu Vaswani Chowk, Hotel Woodland Lane, 1/D/3, Tal. & Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40n0090yuj0r2oysmf3",
    state: "Maharashtra",
    address:
      "Wonder Print Technologies Plot No. M-36, MIDC Ambad, Dist. Nashik",
    city: "Nashik",
    pincode: null,
  },
  {
    id: "clmz4i40n0091yuj05buqxuwv",
    state: "Maharashtra",
    address:
      "Yasin Scrap, Gut No. 546, Shed No. 1, Jadhav Vasti, Village Wagholi, Tal. Haveli, Dist. Pune",
    city: "Pune",
    pincode: null,
  },
  {
    id: "clmz4i40n0092yuj0lvkj76lw",
    state: "Madhya Pradesh",
    address:
      "M/s. Unique Eco Recycle, Plot No. 26, Industrial Area, Palda, Indore (Madhya Pradesh)",
    city: "Indore",
    pincode: null,
  },
  {
    id: "clmz4i40n0093yuj0vnit951b",
    state: "Madhya Pradesh",
    address:
      "M/s. Moonstar Enterprises Pvt. Ltd., Plot No. 24/A, 24/D, 24/A-1, 21/D, 21/E, 21/E-1, Sector-B, Sanwer Road, Industrial Area Indore (MP)",
    city: "Indore",
    pincode: null,
  },
  {
    id: "clmz4i40n0094yuj0pxffjgdb",
    state: "Madhya Pradesh",
    address:
      "M/s. Prometheus Recycling Private Limited, 786/4, 799/1, 800,, Dilawar Ka pura, Susera, Tal: Gird Dist: Gwalior, SIDC",
    city: "Gwalior",
    pincode: null,
  },
  {
    id: "clmz4i40n0095yuj0e2lu29e7",
    state: "Orissa",
    address:
      "M/s. Sani Clean (P) Ltd., Plot No. 802/947, at- Tangiapada, Niala, Dist-Khurda",
    city: "Khurda",
    pincode: null,
  },
  {
    id: "clmz4i40n0096yuj0acbpffcs",
    state: "Orissa",
    address:
      "M/s. Varun infra Steel Pvt. Ltd. Plot No. 1991/3942, At/P.O. Brahmani Tarang, Vedvyas, Rourkela-769004, Dist-Sundargarh",
    city: "Sundargarh",
    pincode: null,
  },
  {
    id: "clmz4i40n0097yuj099cuy6ny",
    state: "Orissa",
    address:
      "M/s. Jagannath E-Waste Recyclers, At-Pinchuli, P.O. Purushottampur, Dist-Ganjam",
    city: "Ganjam",
    pincode: null,
  },
  {
    id: "clmz4i40n0098yuj0mdq1v0hg",
    state: "Orissa",
    address:
      "M/s. P K Enterprises, Plot No.293/525, Khata No.127/4 At /P.O. Kalunga,Dist-Sundargarh",
    city: "Sundargarh",
    pincode: null,
  },
  {
    id: "clmz4i40n0099yuj0givd1zi3",
    state: "Orissa",
    address:
      "M/s Mirtunjai Udyog(Dismantler), At-AA/2, Civil Township, Rourkela Distt- Sundargarh",
    city: "Sundargarh",
    pincode: null,
  },
  {
    id: "clmz4i40o009ayuj0kc1kyit2",
    state: "Orissa",
    address: "M/s. Cosmic Net, B-25, Saheed Nagar, Bhubaneswar,",
    city: "Bhubaneswar",
    pincode: null,
  },
  {
    id: "clmz4i40o009byuj0m27z4vqo",
    state: "Orissa",
    address:
      "M/s Ecokart Technology Pvt. Ltd., At/PO/Mouza-Kuradhamala, Daleiput, Dist- Khordha, M- 7008551392",
    city: "Khordha",
    pincode: null,
  },
  {
    id: "clmz4i40o009cyuj01arm71lh",
    state: "Punjab",
    address:
      "M/s Ramky Enviro Engineer Ltd., Vill. Nimbuan, Tehsil Dera Bassi, District SAS Nagar.",
    city: "Mohali",
    pincode: null,
  },
  {
    id: "clmz4i40o009dyuj0hzkzmz42",
    state: "Punjab",
    address:
      "M/s Spreco Recycling, D-45, Industrial Area, Focal Point, Raikot, District Ludhiana.",
    city: "Ludhiana",
    pincode: null,
  },
  {
    id: "clmz4i40o009eyuj05oyf4w9b",
    state: "Punjab",
    address:
      "M/s K.J. Recycler, C-38, Sanjay Gandhi Nagar, Industrial Area, Jalandhar",
    city: "Jalandhar",
    pincode: null,
  },
  {
    id: "clmz4i40o009fyuj042sjp0xd",
    state: "Punjab",
    address:
      "M/s Black Diamond Cements Pvt. Ltd., (E- Waste Dismantling & Recycling Facility), Village Humayunpur, Nariangarh Road, Tehsil Dera Bassi, District SAS Nagar",
    city: "Mohali",
    pincode: null,
  },
  {
    id: "clmz4i40o009gyuj07nar0g20",
    state: "Punjab",
    address:
      "M/s.Cosmos Recycling Grewal Nagar, Street No. 2, VPO Hambran Jagroan, Ludhiana",
    city: "Ludhiana",
    pincode: null,
  },
  {
    id: "clmz4i40o009hyuj08g90ma06",
    state: "Punjab",
    address:
      "M/s. Stellar Recycling LLP Village Lakhowal ( H.B.No.190 ), Tehsil & District Ludhiana",
    city: "Ludhiana",
    pincode: null,
  },
  {
    id: "clmz4i40o009iyuj0tdaj1b4x",
    state: "Punjab",
    address:
      "M/s Kumar Enterprises, Malerkotla Road, village dulladi, teh nabha, Distt. Patiala",
    city: "Patiala",
    pincode: null,
  },
  {
    id: "clmz4i40o009jyuj0mqmxlssl",
    state: "Punjab",
    address:
      "M/s. Green Bird Recycling, 223, Hadbast, Vill. Magarh, Kohara Macchiwara Road, Ludhiana",
    city: "Ludhiana",
    pincode: null,
  },
  {
    id: "clmz4i40o009kyuj0zjw1tqup",
    state: "Rajasthan",
    address:
      "M/s. H.M.E-waste Management G1-226, RIICO Ind.Area, Kehrani Bhiwadi (Extn.) Tijara Distt-Alwar",
    city: "Alwar",
    pincode: null,
  },
  {
    id: "clmz4i40o009lyuj0os4li50s",
    state: "Rajasthan",
    address:
      "M/s. Dhruv Techengineers Pvt. Ltd., G-1209, Rampur mandana, Industrial Area, Bhiwadi,Alwar",
    city: "Alwar",
    pincode: null,
  },
  {
    id: "clmz4i40o009myuj0f4yrzgoa",
    state: "Rajasthan",
    address:
      "M/s Greenscape Eco Management Pvt.(Unt-II), F-588 & 591 MIA Alwar",
    city: "Alwar",
    pincode: null,
  },
  {
    id: "clmz4i40o009nyuj0hevliw0n",
    state: "Rajasthan",
    address: "M/s Greenscape Eco Management Pvt Ltd F- 584-585, MIA, Alwar",
    city: "Alwar",
    pincode: null,
  },
  {
    id: "clmz4i40o009oyuj0kmsg79hp",
    state: "Rajasthan",
    address:
      "M/s ETCO E-waste Recycler pvt. ltd, SB-23, Shilp Bari Road, 1415 VKI Area, Jaipur",
    city: "Jaipur",
    pincode: null,
  },
  {
    id: "clmz4i40o009pyuj0lj51gobc",
    state: "Rajasthan",
    address:
      "M/s. Universal E-Waste Recycling, G1-117 (B), RIICO Industrial Area, Alwar",
    city: "Alwar",
    pincode: null,
  },
  {
    id: "clmz4i40o009qyuj07e3nenmz",
    state: "Rajasthan",
    address:
      "M/s Green Leaf Recycling Industries, G-166- 167, West part, RIICO Ind Area Bagru Jaipur",
    city: "Jaipur",
    pincode: null,
  },
  {
    id: "clmz4i40o009ryuj0f6ux45au",
    state: "Rajasthan",
    address:
      "M/s Shukla E-Waste Processors, H-309 (B) RIICO Industrial Area, Bhiwadi, Tijara, Alwar.",
    city: "Alwar",
    pincode: null,
  },
  {
    id: "clmz4i40o009syuj04g43n6zw",
    state: "Rajasthan",
    address: "M/s Vasoo Metals, (Division-III) G-287, MIA, Alwar",
    city: "Alwar",
    pincode: null,
  },
  {
    id: "clmz4i40o009tyuj0hiwdv8ch",
    state: "Rajasthan",
    address:
      "M/s. GS International, G1-101, Shri Khatu Shyam Ji Ind. Complex, Ringus, Sikar",
    city: "Sikar",
    pincode: null,
  },
  {
    id: "clmz4i40o009uyuj06yl4fhhd",
    state: "Rajasthan",
    address:
      "M/s. Green Recycling Waste Management, J- 983, RIICO Ind. Area, Chopanki, Tijara, Alwar",
    city: "Alwar",
    pincode: null,
  },
  {
    id: "clmz4i40p009vyuj0fknqqdfg",
    state: "Rajasthan",
    address:
      "M/s. PWL Ventures, B137, Queen Road, Vidyut Nagar B, Jaipur (Plot no.- F142, Road no.-6, RIICO Ind. Area, Bindayka, Jaipur)",
    city: "Jaipur",
    pincode: null,
  },
  {
    id: "clmz4i40p009wyuj0pudyk373",
    state: "Rajasthan",
    address:
      "M/s. Green India Waste Management, G-1/565, RIICO Ind. Area, Khuskhera, Tapukaa, Bhiwadi,Alwar",
    city: "Alwar",
    pincode: null,
  },
  {
    id: "clmz4i40p009xyuj0ne3gbb61",
    state: "Rajasthan",
    address:
      "M/s EPRAGATHI Recycling Pvt. Ltd., P.No. 29, SKS Industrial Area Ringus, Tehsil- Srimadhopur, Distt- Sikar- 332404",
    city: "Sikar",
    pincode: "332404",
  },
  {
    id: "clmz4i40p009yyuj0o4y437wv",
    state: "Rajasthan",
    address:
      "M/s Hydro Engineers, H1-929, RIICO Industrial Area, Chopanki, Bhiwadi, District- Alwar",
    city: "Alwar",
    pincode: null,
  },
  {
    id: "clmz4i40p009zyuj0afxn75cl",
    state: "Rajasthan",
    address:
      "M/s. Urban Metals, E-2118, Ramchandrapura RIICO Industrial area, Sitapura, Tehsil: Sanganer, District-Jaipur",
    city: "Jaipur",
    pincode: null,
  },
  {
    id: "clmz4i40p00a0yuj0k8le6lkd",
    state: "Rajasthan",
    address:
      "M/s. Fateh Enviro Lab, Khasra No. 1036/14, Industrial Area, Jasol, Balotra, Barmer 344022",
    city: "Barmer",
    pincode: "344022",
  },
  {
    id: "clmz4i40p00a1yuj08q1cieva",
    state: "Rajasthan",
    address:
      "M/s Abaad Developers Private, Limited at G1- 747, RIICO INDUSTRIAL AREA, CHOPANKI, BHIWADI, Alwar Rajasthan, 301019.",
    city: "Alwar",
    pincode: null,
  },
  {
    id: "clmz4i40p00a2yuj06et3kubv",
    state: "Rajasthan",
    address:
      "M/s Green Web Recycling, H1-865, Industrial Area, Manda-II, Chomu, Jaipur 303702",
    city: "Jaipur",
    pincode: "303702",
  },
  {
    id: "clmz4i40p00a3yuj0g1famcqo",
    state: "Rajasthan",
    address:
      "M/s Eraw Waste Management LLP, Plot no E-44, RIICO Industrial Area, Sarekhurd, Tijara, Alwar",
    city: "Alwar",
    pincode: null,
  },
  {
    id: "clmz4i40p00a4yuj029y827zg",
    state: "Rajasthan",
    address:
      "M/s Golden Green Recyclers, G1-11, S.K.S. Industrial Area, Ringus, Sri Madhopur Ringus, Sikar 332404",
    city: "Sikar",
    pincode: "332404",
  },
  {
    id: "clmz4i40p00a5yuj082on6hpt",
    state: "Rajasthan",
    address: "M/s. Vinay Traders, F-241-242, RIICO Ind. Area, Palra, Ajmer",
    city: "Ajmer",
    pincode: null,
  },
  {
    id: "clmz4i40p00a6yuj0etgs7cmi",
    state: "Rajasthan",
    address:
      "M/s GPS International, G1-119 Industrial Area Manda Phase-I, Chomu, Jaipur- 303712",
    city: "Jaipur",
    pincode: "303712",
  },
  {
    id: "clmz4i40p00a7yuj0o731qqm9",
    state: "Rajasthan",
    address:
      "M/s Greenlet Recyclers Private Limited, Plot No G-15-G, Sotanala Industrial Area, Behror, Tehsil- Behror, District- Alwar",
    city: "Alwar",
    pincode: null,
  },
  {
    id: "clmz4i40p00a8yuj0gngyx0qx",
    state: "Rajasthan",
    address:
      "M/s Marss Recycler Private Limited G-5 Industrial Area Manda, Tehsil- Chomu (26 E-168 Near Meena Krishi Farm Murlipura Scheme Jaipur- 302039)",
    city: "Jaipur",
    pincode: null,
  },
  {
    id: "clmz4i40p00a9yuj0pfleurqx",
    state: "Rajasthan",
    address:
      "M/s S.B.J. & Company F-137, Growth Centre, RIICO Industrial Area, Dholpur",
    city: "Dholpur",
    pincode: null,
  },
  {
    id: "clmz4i40p00aayuj0bty58jnf",
    state: "Tamil Nadu",
    address: "M/s. Tritech Systems, No.165/3, Porur, Chennai- 116",
    city: "Chennai",
    pincode: null,
  },
  {
    id: "clmz4i40p00abyuj0dka4jbs2",
    state: "Tamil Nadu",
    address:
      "M/s. Genbruze Solutions Pvt. ltd., S. F. No. 9.28, 29pt, Athipattu Village, Ambattur Taluk, Chennai District",
    city: "Chennai",
    pincode: null,
  },
  {
    id: "clmz4i40p00acyuj0bst7wk9a",
    state: "Tamil Nadu",
    address:
      "M/s. Ecosible Recyclers Pvt Ltd, No.154A/B,8th Mahatma Gandhi Road, Tass Industrial Estate, Ambattur, Chennai   600098.",
    city: "Chennai",
    pincode: null,
  },
  {
    id: "clmz4i40p00adyuj0qrfjyyif",
    state: "Tamil Nadu",
    address:
      "M/s. Green Era Recyclers 37, Sivanandha Industries Estate, Dr. M.S. Udhayamurthy Nagar, Thadagam Road, Edayarpalayam, Coimbatore District - 641025",
    city: "Coimbatore",
    pincode: "641025",
  },
  {
    id: "clmz4i40p00aeyuj00udddfky",
    state: "Tamil Nadu",
    address:
      "M/s. Green India Recyclers, SF. No. 26/1B, Kovilpalayam Road, Soolakal Village, Coimbatore District.",
    city: "Coimbatore",
    pincode: null,
  },
  {
    id: "clmz4i40p00afyuj0b7pkd4nt",
    state: "Tamil Nadu",
    address:
      "M/s. A. K. Enterprises, No:12, Chakarapani St, Velacherry, Chennai-32.",
    city: "Chennai",
    pincode: null,
  },
  {
    id: "clmz4i40p00agyuj0uxf516uy",
    state: "Tamil Nadu",
    address:
      "M/s. Shri Raaam Recycling, No. DP-29, SIDCO Industrial Estate, SIPCOT Industrial Complex, Gummidipoondi- 601201",
    city: "Gummidipoondi",
    pincode: "601201",
  },
  {
    id: "clmz4i40p00ahyuj0eqy3vj0c",
    state: "Tamil Nadu",
    address:
      "M/s. JADG India E-Waste Recyclers Pvt. Ltd., SF No. 256/1A1, Kollur Village, Kilikodi Post, Ponneri Taluk, Tiruvallur- 601206",
    city: "Tiruvallur",
    pincode: "601206",
  },
  {
    id: "clmz4i40p00aiyuj0l5e2dfjh",
    state: "Tamil Nadu",
    address:
      "AER Worldwide india Pvt Ltd, No.774,Elandandheri ,sadayankuppam village, near andar kuppam Check Post, Manali New Town, Chennai   600103.",
    city: "Chennai",
    pincode: null,
  },
  {
    id: "clmz4i40q00ajyuj0a00ywccl",
    state: "Tamil Nadu",
    address:
      "M/s. Abishek Enterprises, SF No. 2G, 2nd Ambattur, Chennai-600098",
    city: "Chennai",
    pincode: null,
  },
  {
    id: "clmz4i40q00akyuj0s8nv9hnf",
    state: "Tamil Nadu",
    address:
      "M/s. Virogreen India Pvt. Ltd., No. 297/1B2, No. 49, Pappankuppam Village, SR Kandigai Road, Gummidipoondi Taluk, Tiruvallur-601201",
    city: "Tiruvallur",
    pincode: null,
  },
  {
    id: "clmz4i40q00alyuj0t41iksl0",
    state: "Tamil Nadu",
    address:
      "M/s. Earth Sense Recycle Private Limited, Survey No. 247, Kanttankulathur Panchayat, Thenmelpakkam Village, Singaperumal Kovil, Kanchipuram, Tamil Nadu- 603204",
    city: "Kanchipuram",
    pincode: "603204",
  },
  {
    id: "clmz4i40q00amyuj0nfyvyc48",
    state: "Tamil Nadu",
    address:
      "M/s. Envirogreen E waste recycling Solutions, S.F.No. 2134, Plot No. 65, Palur Village, Chengalpattu Taluk & District",
    city: "Chengalpattu",
    pincode: null,
  },
  {
    id: "clmz4i40q00anyuj0pi7gzsw7",
    state: "Tamil Nadu",
    address:
      "M/s. Leela Traders., Plot No. C-15/1, CMDA Industrial Complex Maraimalai Nagar, Kancheepuram District",
    city: "Kancheepuram",
    pincode: null,
  },
  {
    id: "clmz4i40q00aoyuj0b0yi54c2",
    state: "Tamil Nadu",
    address:
      "M/s. SEZ Recycling, TP-7, IVth Avenue, mahindra World city Developers Limited, Industrial Estate, SEZ Area, Thenmelpakkam Village, Chengalpattu Taluk, Kancheepuram District",
    city: "Kancheepuram",
    pincode: null,
  },
  {
    id: "clmz4i40q00apyuj0222alrs6",
    state: "Tamil Nadu",
    address:
      "M/s Trishyiraya Recycling India Pvt. Ltd., Plot No.A-7, Phase-I, MEPZ-SEZ, Tambaram, Chennai-600 045",
    city: "Chennai",
    pincode: null,
  },
  {
    id: "clmz4i40q00aqyuj0kdj8h789",
    state: "Tamil Nadu",
    address:
      "M/s. S. P. P. Enterprises, S. No. 184-4C, Mambakkam Village and Post Sriperumbudur Taluk Kanchipuram District",
    city: "Kanchipuram",
    pincode: null,
  },
  {
    id: "clmz4i40q00aryuj08r01re2o",
    state: "Tamil Nadu",
    address:
      "M/s. RBIA Minerals and Metals Pvt. Ltd., S. F. No. 205-1B2A, Knadur Village, Sriperumbudur Taluk, Kanchipuram District",
    city: "Kanchipuram",
    pincode: null,
  },
  {
    id: "clmz4i40q00asyuj0qqvuws2r",
    state: "Tamil Nadu",
    address:
      "M/s. Punithan Enterprises Unit  II, No. 113/19 part, Rajiv Nagar, Peinjambakkam, Gundu Perumbedu Post SPR Talu, Kanchipuram Dt- 601301",
    city: "Kanchipuram",
    pincode: "601301",
  },
  {
    id: "clmz4i40q00atyuj0xne96rja",
    state: "Tamil Nadu",
    address:
      "M/s. K. P. P Enterprises, No. 535-3C, Santhavellore Village, Sunguvarchatram Post, Sriperumbudur Taluk, Kanchipuram District",
    city: "Kanchipuram",
    pincode: null,
  },
  {
    id: "clmz4i40q00auyuj0mhy45v2x",
    state: "Tamil Nadu",
    address:
      "M/s. G S ENTERPRISES S.F NO:254/2A2A, evalurkuppam Village, Sriperumbudur Taluk,Kanchipuram Dist 602105.",
    city: "Kanchipuram",
    pincode: null,
  },
  {
    id: "clmz4i40q00avyuj0fxexvcw6",
    state: "Tamil Nadu",
    address:
      "M/s. Enviro Metals Recyclers Private Limited Pvt Limited Aluminium Division S.No. 104 and 106, Ezichur Village,Sriperumbudur Tk,Kancheepuram District.",
    city: "Kanchipuram",
    pincode: null,
  },
  {
    id: "clmz4i40q00awyuj0ksw5vjpx",
    state: "Tamil Nadu",
    address:
      "M/s. World Scrap Recycling Solutions Pvt. Ltd., S. No. 351/7, Beemanthangal Village, Sriperumbudur Taluk, Kancheepuram District",
    city: "Kanchipuram",
    pincode: null,
  },
  {
    id: "clmz4i40q00axyuj0ezsgkgs4",
    state: "Tamil Nadu",
    address:
      "M/s. Green E Waste Private Limited, S. F. No. 294/pt, Ayanambakkam Village, Poonamallee Taluk, Tiruvallur District.",
    city: "Tiruvallur",
    pincode: null,
  },
  {
    id: "clmz4i40q00ayyuj07u0n9vxx",
    state: "Tamil Nadu",
    address:
      "M/s. Southern Alloys, DP No. S-105 and 106, SIDCO Industrial Estate, Kakallur Village Taluk and District",
    city: "Raichur",
    pincode: null,
  },
  {
    id: "clmz4i40q00azyuj0epf1vdd7",
    state: "Tamil Nadu",
    address:
      "M/s. Micro E-Waste Recyclers, SF No. 301/3, Varaganeri Village, Trichy East Taluk, Trichy District.",
    city: "Trichy",
    pincode: null,
  },
  {
    id: "clmz4i40q00b0yuj0g6bspt2o",
    state: "Tamil Nadu",
    address:
      "M/s. M. G. Traders, No. 86, Nehru Street, Teachers Colony, Ambattur, Chennai - 600053",
    city: "Chennai",
    pincode: "600053",
  },
  {
    id: "clmz4i40q00b1yuj0bgqikszl",
    state: "Tamil Nadu",
    address:
      "M/s. Udhaya Traders, No. 242, Tiny Sector Ambattur Industrial Estate, Chennai   600058",
    city: "Chennai",
    pincode: "600058",
  },
  {
    id: "clmz4i40q00b2yuj0z82ex7bl",
    state: "Tamil Nadu",
    address:
      "M/s Victory Recovery & Recycle Technologies India Pvt.Ltd., 672/2, Doubal Dragon Industrial Park, Kannur Village & Post Kottaiyur, Thiruvallur, District - Tamil Nadu - 602 108",
    city: "Thiruvallur",
    pincode: null,
  },
  {
    id: "clmz4i40q00b3yuj058li6z4m",
    state: "Tamil Nadu",
    address:
      "M/s. TES AMM Private Limited, Plot No.A-18, SIPCOT Industrial Growth, Centre Oragadam, Panruti  A  Village, Sriperumpudur, Kanchipuram District Tamil Nadu   630 304",
    city: "Kanchipuram",
    pincode: null,
  },
  {
    id: "clmz4i40q00b4yuj050xeia8g",
    state: "Tamil Nadu",
    address:
      "M/s Arockia Enterprises, S.F.No.4/1E, Seevaram village, Sholinganallur taluk, Chennai   600 097",
    city: "Chennai",
    pincode: null,
  },
  {
    id: "clmz4i40q00b5yuj09t9lzee2",
    state: "Tamil Nadu",
    address:
      "M/s Ascent Urban Recyclers Pvt Limited, SF No.62/1B, 2A2, Padur Road, Mevalurkuppam village, Sriperumbudur taluk, Kancheepuram district, Pin - 602 105",
    city: "Kanchipuram",
    pincode: null,
  },
  {
    id: "clmz4i40q00b6yuj06dgb0jp3",
    state: "Tamil Nadu",
    address:
      "M/s Blooming Recyclers, Plot. No. D9/2, SIDCO Industrial Estate, Maraimalai Nagar, Kizhikaranai village, Chengalpattu district.",
    city: "Chengalpattu",
    pincode: null,
  },
  {
    id: "clmz4i40r00b7yuj0wnxdah0y",
    state: "Tamil Nadu",
    address:
      "M/s E PROCESS House c/o Bharat Electronics Limited, SF No 3 & 10/1 Nanthambakkam village, Alandur taluk, Chengalpattu district",
    city: "Chengalpattu",
    pincode: null,
  },
  {
    id: "clmz4i40r00b8yuj06kxvhljo",
    state: "Tamil Nadu",
    address:
      "M/s INAA Enterprises, DP No. AC-31/24, Thirumudivakkam village, Kundrathur taluk, Kancheepuram district",
    city: "Kanchipuram",
    pincode: null,
  },
  {
    id: "clmz4i40r00b9yuj0dambtxm7",
    state: "Tamil Nadu",
    address:
      "M/s John Firm SF No.144/1C2, Kerekodihalli village, Karimangalam taluk, Dharmapuri district.",
    city: "Dharmapuri",
    pincode: null,
  },
  {
    id: "clmz4i40r00bayuj0g56lfv72",
    state: "Tamil Nadu",
    address:
      "M/s KGN Electronics, No.48 A, Dr Ambedkar College Road, Erukkenchery village, Perambur taluk, Chennai district",
    city: "Tiruvallur",
    pincode: null,
  },
  {
    id: "clmz4i40r00bbyuj0ysxyik6v",
    state: "Tamil Nadu",
    address:
      "M/s Ponniamman Enterprises, SF No. 216/3, Tiruvallur village, Tiruvallur taluk, Tiruvallur district",
    city: "Tiruvallur",
    pincode: null,
  },
  {
    id: "clmz4i40r00bcyuj02g12wfzd",
    state: "Tamil Nadu",
    address:
      "M/s R.M Computers, Plot No.229, 9th Street, Ambattur Chennai   600098",
    city: "Chennai",
    pincode: "600098",
  },
  {
    id: "clmz4i40r00bdyuj0h0dxhuwq",
    state: "Tamil Nadu",
    address:
      "M/s Sai Sri Waste Management Pvt Ltd, SF No 443/1B2, 443/2A, Padaveedu village, Kumarapalayam taluk, Kumarapalayam district",
    city: "Kumarapalayam",
    pincode: null,
  },
  {
    id: "clmz4i40r00beyuj0gp0g3n23",
    state: "Tamil Nadu",
    address:
      "M/s SKV E-Waste Recycling Pvt Ltd, Plot No.154 A&B, Tass Industrial Area, Ambattur SIDCO Industrial Estate, Chennai   600 098",
    city: "Chennai",
    pincode: null,
  },
  {
    id: "clmz4i40r00bfyuj02fhfmll7",
    state: "Tamil Nadu",
    address:
      "M/s Tharani Electronics Waste, SF No.381/3pt, 381/2pt, 384/2pt, 384/3 pt, Sarkar Samakulam village, Annur taluk, Coimbatore district",
    city: "Coimbatore",
    pincode: null,
  },
  {
    id: "clmz4i40r00bgyuj065hruchx",
    state: "Telangana",
    address:
      "M/s Earth Sense Recycle Pvt.Ltd., Plot No.37, APIIC Industrial park, Mankal (V), Maheswaram (M), Rangareddy District. Telangana- 501359",
    city: "Rangareddy",
    pincode: "501359",
  },
  {
    id: "clmz4i40r00bhyuj0ioniqc8f",
    state: "Telangana",
    address:
      "M/s Z Enviro Industries Pvt. ltd., Pulimanmidi (V), Kandukur (M) Rangareddy District.",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40r00biyuj07402r2ao",
    state: "Telangana",
    address:
      "M/s Silicon Planet Recycling Pvt. Ltd.,Sy. No.811/A, Ankireddypally (V) &Grampanchayat Keesara (M) , Medchal Malkajgiri District",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40r00bjyuj0onecfjhe",
    state: "Telangana",
    address:
      "M/s. EnviroKare Recycling Solutions Pvt. Ltd., Sy. No. 402, Raikal (V), Farooqnagar (M), Rangareddy District.",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40r00bkyuj0x4h5l3s0",
    state: "Telangana",
    address:
      "M/s Shreem Mythri Enterprises, Plot No.50, phase-III, IDA Cherlapally, kapra (M), Medchal- Malkajgiri District.",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40r00blyuj0mveba7z8",
    state: "Telangana",
    address:
      "M/s. Elifecycle Management Private Limited, Sy. No. 468, 470, 471 & 472, Theegapur, Kothur Rangareddy District",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40r00bmyuj0s3qq6jur",
    state: "Telangana",
    address:
      "M/s. Malpani Antenna Electronics Pvt. Ltd., Plot No. D4, Phase-I, IDA, Pashamailaram, Patancheru (M), Sangareddy District",
    city: "Sangareddy",
    pincode: null,
  },
  {
    id: "clmz4i40r00bnyuj0nzjoyjot",
    state: "Telangana",
    address:
      "M/s. Green Wave E-waste Recycling, Sy. No. 1880E, 1880EE, Nandigama (V&M), Rangareddy District",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40r00boyuj0ndwfowpf",
    state: "Telangana",
    address:
      "M/s. Pure Earth Recyclers Private Limited, Sy. No.924, 994, Rudraram (V), Patancheruvu (M), Sangareddy District",
    city: "Sangareddy",
    pincode: null,
  },
  {
    id: "clmz4i40r00bpyuj0sy9xzysr",
    state: "Telangana",
    address:
      "M/s Enviro Collection Centre (Dismantling Unit), Plot No.1-185/2/A, Sy. NO.298 part, Phase-I, IDA Jeedimetla, Medchal-Malkajgiri District.",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40r00bqyuj0vm0860uw",
    state: "Telangana",
    address:
      "M/s Ramky E-Waste Recycling Facility, Hardware Park, kancha, Imarat of Raviryal (v), Maheswaram (M), Rangareddy District.",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40r00bryuj07temxpbh",
    state: "Telangana",
    address:
      "M/s Earthbox Ventures (p) Ltd., (E-waste Dismantling Unit), Sy. Nos.29, 30, & 85, Uddemarri (V), Shamirpet (M), Medchal- Malkajgiri, District.",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40r00bsyuj01o79cktw",
    state: "Telangana",
    address:
      "M/s Bellus E Waste, Sy.No.4-120, Ramachandra Puram (GP), Kondurg (M), Rangareddy District.",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40s00btyuj0jtthajw2",
    state: "Telangana",
    address:
      "M/s Shreem Mythri Enterprises, Plot No.50, phase-III, IDA Cherlapally, kapra (M), Medchal- Malkajgiri District.",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40s00buyuj03ff6rb3v",
    state: "Telangana",
    address:
      "M/s. Earthbox Recycling Private Limited Sy No 114/1, plot no s-2/12, Raviryala Grampanchayat, Maheshwaram (V & M), Rangareddy District",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40s00bvyuj05jel4eom",
    state: "Telangana",
    address:
      "M/s TES-AMM India Pvt. Ltd Plot no 79, Sy no 847, IDA Medchal, Medchal (M), Medchal- Malkajgiri District",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40s00bwyuj0kl354ddq",
    state: "Telangana",
    address:
      "M/s Kamal Electronics Refurbishing of E-waste Solutions ,Sy No: 227/LU, 227/E1m 227/E2, 227/E/2/1 Atmakur (V) Sadasivpet (M), Sangareddy District.",
    city: "Sangareddy",
    pincode: null,
  },
  {
    id: "clmz4i40s00bxyuj0yia22kz7",
    state: "Telangana",
    address:
      "M/s. Chilkuri Enterprises, Sy No.14, Keesara (M), Medchal-Malkajgiri District",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40s00byyuj0ivpfkpjr",
    state: "Telangana",
    address:
      "M/s. Reboot Resources Private Limited, Sy. No.113 Part, Patelguda (V), Ibrahimpatnam (M), Rangareddy District",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40s00bzyuj09be7jg8n",
    state: "Telangana",
    address:
      "M/s. Green Enviro E Waste Recycling, Sy. No. 729, Pochampally (V), B. Pochampally (M), Yadadri Bhuvanagiri District",
    city: "Bhuvanagiri",
    pincode: null,
  },
  {
    id: "clmz4i40s00c0yuj0y8ajqvq1",
    state: "Telangana",
    address:
      "M/s. Recytronics Waste Solutions LLP, Sy.No.96/Part/C, Patelguda, Mangalpalle (V), Ibrahimpatnam (M), Rangareddy District",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40s00c1yuj0w8h5vdsz",
    state: "Telangana",
    address:
      "M/s. Exclusive PC World, Plot No.30/9, Sy.No.460/2, TSIIC, IDA Mankhal, Maheshwaram (M), Rangareddy Distric",
    city: "Nagaram",
    pincode: null,
  },
  {
    id: "clmz4i40s00c2yuj0oyy7ggmg",
    state: "Telangana",
    address:
      "M/s. Ali Traders, Sy.No.491/2, Alampally (V),Vikarabad(M), Vikarabad District",
    city: "Vikarabad",
    pincode: null,
  },
  {
    id: "clmz4i40s00c3yuj0gppgrod8",
    state: "Uttar Pradesh",
    address:
      "M/s. Auctus   E Recycling Solutions Pvt. Ltd., F-637, M. G. Road, Industrial Area, Ghaziabad",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40s00c4yuj01ofm3ssb",
    state: "Uttar Pradesh",
    address:
      "M/s. Mahaluxmi metal Alloys (India) Pvt. Ltd., Modinagar, Ghaziabad",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40s00c5yuj0o0zuo02k",
    state: "Uttar Pradesh",
    address: "M/s. N.K. Products, 58-59, M. G. Road, Ghaziabad",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40s00c6yuj0e29s46ai",
    state: "Uttar Pradesh",
    address:
      "M/s Bharat Oil Co.E-18, Site   IV, Sahibabad, Industrial Area, Ghaziabad",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40s00c7yuj0d04lu104",
    state: "Uttar Pradesh",
    address:
      "M/s Plant Green Recycling Pvt. Limited, G-129, Phase   I , M.G. Road, Ghaziabad",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40s00c8yuj0d5za4cbb",
    state: "Uttar Pradesh",
    address: "M/s. Rocket Sales, Plot No. 1-12, I/A, M. G. Road, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40s00c9yuj04kqj2o24",
    state: "Uttar Pradesh",
    address:
      "M/s. Ariglonton Information System Pvt. Ltd., Plot No C-13, Site-4 Sahibabad Industrial Area Ghaziabad",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40s00cayuj0p5kbnt41",
    state: "Uttar Pradesh",
    address:
      "M/S Fiz Trading Company, C55, Sector-B-3, Trans Delhi Signature city Tronica city, Loni, Ghaziabad",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40s00cbyuj04246p4ir",
    state: "Uttar Pradesh",
    address:
      "M/S. Tele Supar Electronics India Pvt Ltd, B-15, Roop Nagar Industrial Area, Loni Ghaziabad,201102",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40s00ccyuj0yc7k3nip",
    state: "Uttar Pradesh",
    address:
      "M/s R.R. Recycler Pvt. Ltd., Khasra No.-115, M, Vill- Achraunda, Tehsil & District- Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40s00cdyuj0a90apvp8",
    state: "Uttar Pradesh",
    address: "M/s. 6R Recycling, Plot No-272, MG Road industrial area, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40s00ceyuj08nxp20nq",
    state: "Uttar Pradesh",
    address:
      "M/s 3R Recycler Pvt Ltd. Unit 2, Plot No. A-61/2, UPSIDC Industrial Area, Sikandrabad, Bulandshahar, Buland Shahar- 203202 Uttar Pradesh",
    city: "Bulandshahar",
    pincode: "203202",
  },
  {
    id: "clmz4i40t00cfyuj0a8ql9sqg",
    state: "Uttar Pradesh",
    address:
      "M/s Circularity Solutions PrivateLimited ( M/s. Karo Sambhav Pvt.Ltd., ) Khasra 95-96, Village - Sikhera,Hazazari Industrial Area, Modinagar, Ghaziabad",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40t00cgyuj0vt4ewgs3",
    state: "Uttar Pradesh",
    address:
      "M/S Ozone Waste LLP Plot No.- C-25, Upsidc, M.G. Road, Industrial Area, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40t00chyuj0zmwsr1zi",
    state: "Uttar Pradesh",
    address:
      "M/s. Arsh Recycling Pvt. Ltd., Plot No. 203, UPSDIC, I/A, M/G. Road, Ghaziabad",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40t00ciyuj0sr3tk0k9",
    state: "Uttar Pradesh",
    address:
      "M/s. Auctus Recycling Solutions Pvt. Ltd, Habibpur, Greater Noida",
    city: "Greater Noida",
    pincode: null,
  },
  {
    id: "clmz4i40t00cjyuj069dgn5o0",
    state: "Uttar Pradesh",
    address: "M/s. Khan Traders, B-5, Site No. 4, Panki Ind. Area, Kanpur",
    city: "Kanpur",
    pincode: null,
  },
  {
    id: "clmz4i40t00ckyuj0tzlq5p3c",
    state: "Uttar Pradesh",
    address:
      "M/s. Green Tech Recycling, Khasra No. 645, Acchraunds, Bahdurpur Road, Partapur, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40t00clyuj0ti6upocm",
    state: "Uttar Pradesh",
    address: "M/s. Narora Atomic Power Station, Narora, Bulandshahar",
    city: "Bulandshahar",
    pincode: null,
  },
  {
    id: "clmz4i40t00cmyuj0mnhvc2i5",
    state: "Uttar Pradesh",
    address: "M/s Metal Alloys, E-46, Industrial Area, Ramnagar, Varanasi",
    city: "Varanasi",
    pincode: null,
  },
  {
    id: "clmz4i40t00cnyuj0srjm3yrd",
    state: "Uttar Pradesh",
    address:
      "M/s Comwen Information Technologies Pvt.Ltd., 127/35B, ChakRagunath, Naini, Allahabad.",
    city: "Allahabad",
    pincode: null,
  },
  {
    id: "clmz4i40t00coyuj0fparbimb",
    state: "Uttar Pradesh",
    address:
      "M/s. Oasia Eco E-Waste Recyclers E-160, Industrial Area, Khalilabad, Sant Kabairnagar.",
    city: "Kabairnagar",
    pincode: null,
  },
  {
    id: "clmz4i40t00cpyuj0qwag4yc0",
    state: "Uttar Pradesh",
    address:
      "M/s. Sims Recycling Solutions Plot No. 1, Udyog Kendrall Ecotech-III, Greater Noida",
    city: "Greater Noida",
    pincode: null,
  },
  {
    id: "clmz4i40t00cqyuj0x9k3jqw6",
    state: "Uttar Pradesh",
    address: "M/s J.A.O. E-Waste Recycling Co, Vill- Jaitpur,Distt-Moradabad.",
    city: "Moradabad",
    pincode: null,
  },
  {
    id: "clmz4i40t00cryuj0scso92s1",
    state: "Uttar Pradesh",
    address:
      "M/s. HIN Green E-Waste Recycling Co. Vill- Jaitpur, Distt-Moradabad",
    city: "Moradabad",
    pincode: null,
  },
  {
    id: "clmz4i40t00csyuj0sib6lzrr",
    state: "Uttar Pradesh",
    address: "M/s S.R. Metcast India (P) Ltd 11.8 Km.Agra Mathura Road, Agra.",
    city: "Agra",
    pincode: null,
  },
  {
    id: "clmz4i40t00ctyuj0a65g6ygh",
    state: "Uttar Pradesh",
    address: "M/s K.M. Metals Suppliers 9/270,271,Mathura Agra.",
    city: "Agra",
    pincode: null,
  },
  {
    id: "clmz4i40t00cuyuj0lvyf4kyx",
    state: "Uttar Pradesh",
    address: "M/s Prakash Metal House 39/223, Karwan Lohamandi, Agra.",
    city: "Agra",
    pincode: null,
  },
  {
    id: "clmz4i40t00cvyuj0vhe1fqk2",
    state: "Uttar Pradesh",
    address: "M/s Shree MahaveerJi Trading Company, 30/127, Chippitala, Agra",
    city: "Agra",
    pincode: null,
  },
  {
    id: "clmz4i40t00cwyuj0qsraqbbz",
    state: "Uttar Pradesh",
    address:
      "M/s. E-Waste Recyclers India, E-50, UPSIDC Industrial Area, 98Km Stone, NH-2, Kosi Kotwan, Mathura",
    city: "Mathura",
    pincode: null,
  },
  {
    id: "clmz4i40t00cxyuj0f45tt7zn",
    state: "Uttar Pradesh",
    address:
      "M/s E-Waste Recyclers Industries K40, UPSIDC Industrial area, NH-2 Kosikalan, Mahura",
    city: "Mathura",
    pincode: null,
  },
  {
    id: "clmz4i40t00cyyuj09amfzvp2",
    state: "Uttar Pradesh",
    address:
      "M/s Supar Trading Company, Plot No.-3 Govt. Industrial Estate, Talkatora Road, Lucknow",
    city: "Lucknow",
    pincode: null,
  },
  {
    id: "clmz4i40t00czyuj0twceqhtg",
    state: "Uttar Pradesh",
    address:
      "M/s. V. R. Techno Enviro Services Pvt. Ltd., Khasra No. 440, Indira Priyedarshni Ward Jarhra Indira Nagar Lucknow",
    city: "Lucknow",
    pincode: null,
  },
  {
    id: "clmz4i40t00d0yuj0w05u1afg",
    state: "Uttar Pradesh",
    address:
      "M/s Greenzon Recycling Pvt. Ltd., R 30, UPSIDC, Industrial Area, Sikandrabad, Bulandshahar.",
    city: "Bulandshahar",
    pincode: null,
  },
  {
    id: "clmz4i40u00d1yuj00rz57up2",
    state: "Uttar Pradesh",
    address:
      "M/s Sachin Enterprises, 123/751, block-T 74 Pratapganj Gadariyan Purwa, Fazalgang, Kanpur",
    city: "Kanpur",
    pincode: null,
  },
  {
    id: "clmz4i40u00d2yuj0yaqbj7zt",
    state: "Uttar Pradesh",
    address:
      "M/s Greeniva Recycler Pvt. ltd., Plot No. G-284, M.G. Road, Industrial Area, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40u00d3yuj0okbp9y8w",
    state: "Uttar Pradesh",
    address:
      "M/s S. Malik Traders, plot No.93, 94 vill-Budhera jahidpur, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40u00d4yuj0mx1e2eda",
    state: "Uttar Pradesh",
    address: "M/s Royal Faiz Recycling (P) Ltd, I-22, I.A.M.G. Road, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40u00d5yuj069rp8yfo",
    state: "Uttar Pradesh",
    address: "M/s 3 C Recycler, F-326, I/A, M. G. Road, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40u00d6yuj0b42bt3ho",
    state: "Uttar Pradesh",
    address:
      "M/s Life E-Recycling (p) Ltd., F-435, UPSIDC I/A, M. G. Road, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40u00d7yuj076ui5lqj",
    state: "Uttar Pradesh",
    address: "M/s Hind Recycler (p) Ltd., Plot No.F-203, M.G. Road, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40u00d8yuj0zyyc1qhk",
    state: "Uttar Pradesh",
    address: "M/s Hayat Recycler, F-53,54 I/A, M.G. Road, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40u00d9yuj0jvyy7lu4",
    state: "Uttar Pradesh",
    address:
      "M/s B.R.P. Infotech Private Limited, F-394, Phase-1, M. G. Road, Industrial Area, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40u00dayuj07mtnwwax",
    state: "Uttar Pradesh",
    address:
      "M/s Sky Green Waste Recycling, Management, Khasra No.174, Alipur Jijmana, Meerut, U.P",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40u00dbyuj03ik163wi",
    state: "Uttar Pradesh",
    address:
      "M/s Swachh Bharat Recycling Company, Gali No.4, 2083, Saipuram Industrial Area, Delhi Road, Meerut, U.P.",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40u00dcyuj062gtonhh",
    state: "Uttar Pradesh",
    address:
      "M/s Rudra Interprises, Plot No.A-96, Sector A-4, Tronica city, Loni, Ghaziabad",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40u00ddyuj07oe1nyna",
    state: "Uttar Pradesh",
    address:
      "M/s Avgree Recycling Pvt.Ltd. KH No.549, Vill- Tiyala, Meerut-Bulandshahar Road, Hapur Bypass, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40u00deyuj0fkhub7qp",
    state: "Uttar Pradesh",
    address: "M/s Faiz Recycling, G-235, MG Road, Industrial Area, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40u00dfyuj0k6xxkwzy",
    state: "Uttar Pradesh",
    address:
      "M/s Malik Recycling, 25-A, Anand Ind. Estate, Mohan Nagar, Ghaziabad.",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40u00dgyuj0migddltr",
    state: "Uttar Pradesh",
    address:
      "M/s U.W.M. Recycling Pvt Ltd. Plot No.-F-331, UPSIDC, M.G. road, Ind Area, Hapur.",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40u00dhyuj0677rnk1e",
    state: "Uttar Pradesh",
    address:
      "M/s Safdar E-Recycling Pvt Ltd. Plot No.H-69, M.G. road, Ind Area, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40u00diyuj0g9dsz9h6",
    state: "Uttar Pradesh",
    address:
      "M/s Horizon Recycling Pvt.Ltd., Khasra No.35, Kumarhera, 7th km Dehradun road, Saharanpur, U.P.",
    city: "Saharanpur",
    pincode: null,
  },
  {
    id: "clmz4i40u00djyuj0apuitkh8",
    state: "Uttar Pradesh",
    address:
      "M/s Golden E Waste Recyclers Pvt. ltd., Plot No.-12A, Gagol Road, Behind Sophia School, Udyog Puram, Partapur, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40u00dkyuj05y0wedi0",
    state: "Uttar Pradesh",
    address:
      "M/s R.D Recylers khasara no-46 village- shakharpur Hapur road Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40u00dlyuj0p1ofo0cw",
    state: "Uttar Pradesh",
    address:
      "M/s Earth Zone Recycling Plot no-11 pargana- Hazipur Hapur road meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40u00dmyuj0s8u9ho0s",
    state: "Uttar Pradesh",
    address:
      "M/s Making India E-waste recycling management plot no-50 sector-3 Shatabdi nagar industrial Area meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40v00dnyuj0be75pi19",
    state: "Uttar Pradesh",
    address:
      "M/s Indian Recycler Khasra No338 Vill- Wazidpur Kavali Jansath Muzaffarnagar",
    city: "Muzaffarnagar",
    pincode: null,
  },
  {
    id: "clmz4i40v00doyuj0tvpnhiww",
    state: "Uttar Pradesh",
    address:
      "M/s Greentek Reman Pvt Ltd. Plot No-B- 2/12,Site-B Inds Area Surajpur, Greater Noida",
    city: "Greater Noida",
    pincode: null,
  },
  {
    id: "clmz4i40v00dpyuj0kcjjw82h",
    state: "Uttar Pradesh",
    address:
      "M/s Clean Waste Management. Plot No-131, Udhyog kendra Second, Ecotech-3, Greater Noida",
    city: "Greater Noida",
    pincode: null,
  },
  {
    id: "clmz4i40v00dqyuj0f2pnqn7v",
    state: "Uttar Pradesh",
    address: "M/s El green Recycling Pvt ltd.G-33, Sec-63, Noida",
    city: "Noida",
    pincode: null,
  },
  {
    id: "clmz4i40v00dryuj0dmpzz9sg",
    state: "Uttar Pradesh",
    address: "M/s. AIMS Technologies Pvt Ltd.G-256, MG Road Inds area, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40v00dsyuj06lifb1de",
    state: "Uttar Pradesh",
    address: "M/s Future Web, 48-A, Harthala Inds Area, Kanth Road, Moradabad",
    city: "Moradabad",
    pincode: null,
  },
  {
    id: "clmz4i40v00dtyuj0ym4q2xi9",
    state: "Uttar Pradesh",
    address:
      "M/s Buddha Industries, Behind vision Exports Faridpur Sambhal Road, Moradabad",
    city: "Moradabad",
    pincode: null,
  },
  {
    id: "clmz4i40v00duyuj0j8yblad2",
    state: "Uttar Pradesh",
    address:
      "M/s Latoori Shah Traders,Gata No1396, Bhojpur, Dharampur, Moradabad",
    city: "Moradabad",
    pincode: null,
  },
  {
    id: "clmz4i40v00dvyuj0sks53148",
    state: "Uttar Pradesh",
    address:
      "M/s Shoeb Waste solution, Gata No250, Vill- Fazalpur, Near Hindoli, Chadausi, Sambhal",
    city: "Sambhal",
    pincode: null,
  },
  {
    id: "clmz4i40v00dwyuj06aw9rddh",
    state: "Uttar Pradesh",
    address:
      "M/s NR E-Waste Company, Gata No235,237,245, 250K Vill-Sirsa, Inayatpur, Moradabad",
    city: "Moradabad",
    pincode: null,
  },
  {
    id: "clmz4i40v00dxyuj0jslwff4i",
    state: "Uttar Pradesh",
    address: "M/s Eco Trader, Plot no.454, Rooma, Kanpur",
    city: "Kanpur",
    pincode: null,
  },
  {
    id: "clmz4i40v00dyyuj0aoyyurzq",
    state: "Uttar Pradesh",
    address:
      "M/s Aseries Envirotek India Pvt, Ltd, Plot no. B- 10 Industrial area, Salon, Raebareli.",
    city: "Raebareli",
    pincode: null,
  },
  {
    id: "clmz4i40v00dzyuj0vl73oevt",
    state: "Uttar Pradesh",
    address:
      "M/s ATR Traders Private Limited, G380, M.G.Road, Industrial Area, Hapur Ghaziabad 2400 MT/A",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40v00e0yuj0ownhgv44",
    state: "Uttar Pradesh",
    address:
      "M/s Electronic Waste India VillKhujnawar Chutmalpur, Kalasia Road Teh.-Behat , Saharanpur",
    city: "Saharanpur",
    pincode: null,
  },
  {
    id: "clmz4i40v00e1yuj0au71yvi1",
    state: "Uttar Pradesh",
    address:
      "M/s Eco Green India, Khasra no.-447, Vill- Ghosipur, Hapur Road, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40v00e2yuj0sclmbudw",
    state: "Uttar Pradesh",
    address:
      "M/s S.D. Recycling Process Industries, Khasra no.-51, 52, , Vill- Shakarpur,, Hapur Road, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40v00e3yuj05m29mwfl",
    state: "Uttar Pradesh",
    address:
      "M/s HIN Green E-waste Recycling (P) Ltd, Khasra no.-733,737, Vill.- Baral, Partapur, Meerut.",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40v00e4yuj0pfvauiko",
    state: "Uttar Pradesh",
    address: "M/s J I ScrapTraders, Plot no. 418/12, Shastrinagar, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40v00e5yuj0ncy5p22p",
    state: "Uttar Pradesh",
    address:
      "M/s E Tech Interprises, Plot no.- E- 26,Phase-I/ G322 Phase-II, M.G.Road, Industrial Area, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40v00e6yuj0yhrsp5xn",
    state: "Uttar Pradesh",
    address:
      "M/s Habib Trading Company, Khasra no- 28, Village- Alipur, Jijmana,Pargana & Tehsil- Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40v00e7yuj0df00au0n",
    state: "Uttar Pradesh",
    address:
      "M/s B.R.P. Infotech Private Limited,F- 381, Phase-I, M.G.Road, Industrial Area, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40v00e8yuj02n53s8zl",
    state: "Uttar Pradesh",
    address:
      "M/s Recology Recycling India Pvt. Ltd., Khasra no.-69, 70,71 , Vill-Piple Kheda,, Sargana Sarawa Meerut, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40w00e9yuj0c91snbnd",
    state: "Uttar Pradesh",
    address:
      "M/s Bright E-Waste Recycling India, Village- Ganeshpur, Mawana, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40w00eayuj0i3m1hr1k",
    state: "Uttar Pradesh",
    address:
      "M/s Sheetala Waste Management Project Plot no.-D-26, Sikandrabad Indl. Area, Tehsil- Sikandrabad, Bulandshahar",
    city: "Bulandshahar",
    pincode: null,
  },
  {
    id: "clmz4i40w00ebyuj0imllm96y",
    state: "Uttar Pradesh",
    address:
      "M/s Spreco Resource Recyclers, Khasara no.- 235,Vill-Abdulpur, Block- Khekra, Baghpat, Meerut- 250101",
    city: "Meerut",
    pincode: "250101",
  },
  {
    id: "clmz4i40w00ecyuj03xx1aydn",
    state: "Uttar Pradesh",
    address:
      "M/s Hind Recycling Pvt. Ltd., G- 460, UPSIDC, Industrial Area M.G.Road, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40w00edyuj0j1wsa9hw",
    state: "Uttar Pradesh",
    address:
      "M/s Eco Fly E-Waste Recycling Pvt. Ltd., Khasara no-26, Piplikhera, Bhamanpur Road, Indl. Area, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40w00eeyuj03oexa3u3",
    state: "Uttar Pradesh",
    address:
      "M/s Green Earth E- Recycling , F-95, UPSIDC, Industrial Area, Gopalpur Sikandrabad, Bulandshahar",
    city: "Bulandshahar",
    pincode: null,
  },
  {
    id: "clmz4i40w00efyuj0xhw1ntwx",
    state: "Uttar Pradesh",
    address:
      "M/s Waste Tech Recycling Company, Plot no HD-7, UPSIDC, Industrial Area, Sikandrabad, Bulandshahar",
    city: "Bulandshahar",
    pincode: null,
  },
  {
    id: "clmz4i40w00egyuj0y9b7q7j0",
    state: "Uttar Pradesh",
    address:
      "M/s LIMR Recycling Pvt. Ltd., G- 256, Industrial Area, M.G.Road, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40w00ehyuj0h0n5taaw",
    state: "Uttar Pradesh",
    address:
      "M/s Sky Green Waste Recycling Managememt , Khasra No.- 51, 53,54,66,20,21, Vill.- Piplikhera, Hapur Road, Indl. Area, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40w00eiyuj0qu16u14i",
    state: "Uttar Pradesh",
    address: "M/s D M Recyclers Vill.- Phaphunda, Hapur Road, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40w00ejyuj0eftbpy6z",
    state: "Uttar Pradesh",
    address:
      "M/s Global Green E-Waste Recycling, Khasra No.- 57, Indl. Area, Udhyogpuram, Partapur, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40w00ekyuj0f34drve3",
    state: "Uttar Pradesh",
    address:
      "M/s. Anshul Machinery Job Works Unit-II, Khasra No. -260, Masuri, Dasna, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40w00elyuj04wo50d19",
    state: "Uttar Pradesh",
    address:
      "M/s. Shiv Shakti metals Old Name Surya Metal, Khasra No. -545, Vill-Phaphrana, S. P. Industrial Area, Modi Nagar, Ghaziabad",
    city: "Ghaziabad",
    pincode: null,
  },
  {
    id: "clmz4i40w00emyuj0j3fyr2fg",
    state: "Uttar Pradesh",
    address:
      "M/s. Waste PRO Recycling, Khasra No 35 And 36, Udayrampur, Nangla, Dasna, Tehsil- Dhaulana, Hapur,",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40w00enyuj046ydkjt7",
    state: "Uttar Pradesh",
    address:
      "M/s. S F Recycling Pvt Ltd, Plot No. F-4, M.G. Road, Industrial Area, Hapur.",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40w00eoyuj0ltxnq0zs",
    state: "Uttar Pradesh",
    address:
      "M/s. More Bright E Waste Erecycler P. Ltd., C- 78, Phase-III, M. G. Road, Indtl Area, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40w00epyuj0osrb5u2j",
    state: "Uttar Pradesh",
    address:
      "M/s. Green Zone Recycling (P) Ltd., Plot No. -H. D. -6, UPSIDC Indl. Area, Sikandrabad, Bulandshahar",
    city: "Bulandshahar",
    pincode: null,
  },
  {
    id: "clmz4i40w00eqyuj09nud79td",
    state: "Uttar Pradesh",
    address:
      "M/s. Green Earth Recycler, Plot No. F-557, Industrial Areal, M G Road, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40w00eryuj0we6q8cl4",
    state: "Uttar Pradesh",
    address: "M/s. A One E Waste Recycling, Vill. -Khardoni, Shekhupur, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40w00esyuj0b0iellpx",
    state: "Uttar Pradesh",
    address:
      "M/s. Sun E-Wsate Recycling Company F-163, Industrial Area, Kosi Kotwan, Ext.-1, Kosi Kalan, Mathura.",
    city: "Mathura",
    pincode: null,
  },
  {
    id: "clmz4i40w00etyuj0wr08mc19",
    state: "Uttar Pradesh",
    address:
      "M/s. Ezwaste Recycling, Khasra No. -38, Vill. - Sardhan, Budhana Road, Khatauli, Muzaffarnagar",
    city: "Muzaffarnagar",
    pincode: null,
  },
  {
    id: "clmz4i40w00euyuj0p8h9tdsq",
    state: "Uttar Pradesh",
    address:
      "M/s. Sri Balaji, Arazi No. -316/7, Vill.-Kataria, Pargana-Ralhupur, Distt.-Chandauli",
    city: "Chandauli",
    pincode: null,
  },
  {
    id: "clmz4i40w00evyuj0wjdlu5j5",
    state: "Uttar Pradesh",
    address:
      "M/s. A Q Recycling, Plot No-F-639, UPSIDC, Industrial Area, M. G. Road, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40x00ewyuj0qqkq4ry8",
    state: "Uttar Pradesh",
    address:
      "M/s. Rajdhani Recycling P. Ltd., Plot No. F-416, M. G. Road, Indutrial Area, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40x00exyuj0a1mrp7x2",
    state: "Uttar Pradesh",
    address:
      "M/s. JSD Enterprises, J-78, Site-C, Surajpur, Industrial Area, Greater Noida",
    city: "Greater Noida",
    pincode: null,
  },
  {
    id: "clmz4i40x00eyyuj0v5gdqfx8",
    state: "Uttar Pradesh",
    address:
      "M/s. E-Waste Recyclers India, Unit-3, Khasra No. -266, 110 KM Mile Stone, Tehsil-Chhata, Mathura",
    city: "Mathura",
    pincode: null,
  },
  {
    id: "clmz4i40x00ezyuj02ieef2lx",
    state: "Uttar Pradesh",
    address:
      "M/s. E-Waste Recyclers India, E-49, UPSIDC Industrial Area, Kosi Kotwan, Mathura",
    city: "Mathura",
    pincode: null,
  },
  {
    id: "clmz4i40x00f0yuj0kra5pfu2",
    state: "Uttar Pradesh",
    address:
      "M/s 2NDS Computer, Plot no J-71, J-72, UPSIDC Industrial area, Kosi Kotwan, Mathura.",
    city: "Mathura",
    pincode: null,
  },
  {
    id: "clmz4i40x00f1yuj01db92rwz",
    state: "Uttar Pradesh",
    address:
      "M/s Sanif Insulation,Vill- Kakrala, Pargana- Bhokerheri, opp. Sugar Mill Morna, Muzarffarnagar-251316",
    city: "Muzarffarnagar",
    pincode: null,
  },
  {
    id: "clmz4i40x00f2yuj06ifgfjl1",
    state: "Uttar Pradesh",
    address:
      "M/s Green India E-Waste Recycling Khasra no-3, Hapur Road, Vill.- Ruknuddin Urf, Phaphunda, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40x00f3yuj0685a1l2o",
    state: "Uttar Pradesh",
    address:
      "M/s Ever Green E-Waste Recycling Management,Vill.-Rampur, Tehsil.- Mahmudabad, Distt.- Sitapur",
    city: "Sitapur",
    pincode: null,
  },
  {
    id: "clmz4i40x00f4yuj08890sk97",
    state: "Uttar Pradesh",
    address:
      "M/s Era Green E-Waste Recycling Pvt. Ltd., Khasra no-189/2, Plot No.- B-35/1, Vill.-Kunda, Distt.- Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40x00f5yuj0dh1r804x",
    state: "Uttar Pradesh",
    address:
      "M/s A R Computer Scrap, Plot No.-7, Pillokhari Road near Falak Palace, Meerut",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40x00f6yuj0fscvuejh",
    state: "Uttar Pradesh",
    address:
      "M/s Aksha Recycling & Waste Management Pvt. Ltd.,, Khasra no.- 876,1193-1195, 7.5 K.M. Jansath Road,Vill.- Sher Nagar, Muzaffarnagar",
    city: "Muzaffarnagar",
    pincode: null,
  },
  {
    id: "clmz4i40x00f7yuj0njr3rk6f",
    state: "Uttar Pradesh",
    address:
      "M/s Khekra Fabrication & Recycle Industries Pvt. Ltd., Khasra no.-31, Vill- Udairampur Nagla, UPSIDC Asrea, Mussoorie Gulawati Road, Pargan-Dasna, Tehsil-Dhaulana, Hapur-245301",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40x00f8yuj0opq0w5ps",
    state: "Uttar Pradesh",
    address:
      "M/s Greenwish E-Waste Recyclers, F- 162, Industrial Area, Kosi Kotwan, Extn.-1, Kosi Kalan, Mathura",
    city: "Mathura",
    pincode: null,
  },
  {
    id: "clmz4i40x00f9yuj0hmfdrm6n",
    state: "Uttar Pradesh",
    address:
      "M/s GreenLink Recyclers Pvt. Ltd., Khasra no.- 1641, Dasna, Kushilya Road, Tehsil- Ghaziabad, distt.- Ghaziabad- 201009",
    city: "Ghaziabad",
    pincode: "201009",
  },
  {
    id: "clmz4i40x00fayuj0kmznxs01",
    state: "Uttar Pradesh",
    address:
      "M/s Cynosure Recycling Private Ltd. Khasara No.-64, Vill.-Peeplikhera, Pargana-Sarawa, Meerut-250002 U.P.",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40x00fbyuj0o3ogjvbv",
    state: "Uttar Pradesh",
    address:
      "M/s Reclaim Enviro Pvt. Ltd., E.-506, Industrial Area, M.G. Road, Hapur",
    city: "Hapur",
    pincode: null,
  },
  {
    id: "clmz4i40x00fcyuj0gco2lji7",
    state: "Uttar Pradesh",
    address:
      "M/s Ecotech Recyclers, Khasara No.- 1049,1050.1051, Vill.-Peeplikhera, Pargana-Sarawa, Meerut-",
    city: "Meerut",
    pincode: null,
  },
  {
    id: "clmz4i40x00fdyuj0gjcafer5",
    state: "Uttar Pradesh",
    address:
      "M/S Recyclico Waste Management, Khasra No169 Green Land Industrial Complex, Gram- Dhakpura Tappa Haweli,Badaun, Up - 243638",
    city: "Badaun",
    pincode: "243638",
  },
  {
    id: "clmz4i40x00feyuj00zq1f2qz",
    state: "Uttar Pradesh",
    address:
      "M/s WEEE PRO RESource Recovery Solutions Private Limited F-39 UPSIDC Industrial area , Gopalpur , Sikandaradbad,Buland shahar- 203001",
    city: "Bulandshahar",
    pincode: "203001",
  },
  {
    id: "clmz4i40x00ffyuj0s4tt55x4",
    state: "Uttar Pradesh",
    address:
      "M/s. 3R Recycler Plot No. A-61/1, UPSIDC Industrial Area, Sikandrabad, Bulandshahar, Buland Shahar- 203202 Uttar Pradesh",
    city: "Bulandshahar",
    pincode: "203202",
  },
  {
    id: "clmz4i40x00fgyuj0t0fkt6s1",
    state: "Uttarakhand",
    address:
      "M/s Attero Recycling Pvt. ltd. Kh. No.117, Raipur Industrial Area, Bhagwanpur",
    city: "Bhagwanpur",
    pincode: null,
  },
  {
    id: "clmz4i40x00fhyuj0jew0uint",
    state: "Uttarakhand",
    address:
      "M/s Bharat Oil & Waste Management ltd. Mauja Mukimpur, Laksar, Haridwar",
    city: "Haridwar",
    pincode: null,
  },
  {
    id: "clmz4i40x00fiyuj05pnfjg4g",
    state: "Uttarakhand",
    address:
      "M/s Resource E-Waste Solution Pvt.Ltd. F-97, Industrial area, Bhadrabad, Haridwar",
    city: "Haridwar",
    pincode: null,
  },
  {
    id: "clmz4i40x00fjyuj0mlkgam4u",
    state: "Uttarakhand",
    address:
      "M/s Anmol Paryavaran Sanrakshan Samiti, Daulatpur Hazaratpur urf, Budhwasahid, Daulatpur",
    city: "Daulatpur",
    pincode: null,
  },
  {
    id: "clmz4i40x00fkyuj0re48r1rc",
    state: "Uttarakhand",
    address:
      "M/s. Starto Metal Recycle plant , Kh. No-314 Kh, village  Mehvar Khurd, Roorkee",
    city: "Roorkee",
    pincode: null,
  },
  {
    id: "clmz4i40x00flyuj0flbnllk9",
    state: "Uttarakhand",
    address:
      "M/s. Nayak Enterprises, Village Dhakia, No. 1, Post Kundeshwari, Tehsil Kashipur, District Udham Singh Nagar, Kashipur, Uttrakhand, 244713, India",
    city: "Kashipur",
    pincode: null,
  },
  {
    id: "clmz4i40x00fmyuj0yn94hfun",
    state: "Uttarakhand",
    address:
      "M/s. Root Recycling, Khasra NO. 911, Village Padli Gurjar, Roorkee, Haridwar",
    city: "Haridwar",
    pincode: null,
  },
  {
    id: "clmz4i40x00fnyuj0oyfwrzx2",
    state: "Uttarakhand",
    address:
      "M/s. Asha Enterprises, Khasra No. 438/1, Rawli Mehdood , Hpase-2, Gangotri Enclave, Haridwar",
    city: "Haridwar",
    pincode: null,
  },
  {
    id: "clmz4i40x00foyuj0ky0r8ucj",
    state: "West Bengal",
    address:
      "M/s J.S. Pigments Pvt. ltd, Vill.+ P.O.-Jarua, P.S.- Polba, Hoogly-712138",
    city: "Hoogly",
    pincode: null,
  },
  {
    id: "clmz4i40y00fpyuj01gpsx3jl",
    state: "West Bengal",
    address:
      "M/s Lubrina Recycling Pvt. ltd., P.O. Bakrahat, P.S. Bishnupur, Distt., Pin-743377.",
    city: "Bishnupur",
    pincode: null,
  },
  {
    id: "clmz4i40y00fqyuj04aucdl5d",
    state: "West Bengal",
    address:
      "M/s. P. U. Steel and Electro Process pvt. Ltd., Ruiya Industrial complex P.O. Patuliar PS- Khadar Distt. 24, PGS (N), West Bengal - 750119",
    city: "Khadar",
    pincode: "750119",
  },
  {
    id: "clmz4i40y00fryuj0y8nag0p3",
    state: "West Bengal",
    address:
      "M/s Old N Furniture 323, K.P. Mondal Road, PO & PS Budge Budge, Dist-24 PGS(S), Pin-700137",
    city: "Kolkata",
    pincode: null,
  },
  {
    id: "clmz4i40y00fsyuj0fw87bmvn",
    state: "West Bengal",
    address:
      "M/s. Bhanu Metal Industries, Vill. Khamar, P.O. -Rajarhat, P.S.-Rajarhat, Dist. 24, PGS (N)- 700135",
    city: "Rajarhat",
    pincode: "700135",
  },
];

const myData = [
  {
    name: "Ram Badan Pandey",
    email: "rambpandey238@google.com",
    password: bcryptjs.hashSync("user", bcryptjs.genSaltSync(10)),
  },
  {
    name: "admin",
    role: "ADMIN",
    email: "admin@revamp.in",
    password: bcryptjs.hashSync("admin", bcryptjs.genSaltSync(10)),
  },
];

const ram = async () => {
  const data = await prisma.repairFacility.createMany({
    data: RepairFacility,
  });
  console.log(data);
};

ram();
