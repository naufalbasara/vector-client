import { objectType } from "@material-tailwind/react/types/components/checkbox";

export async function getProductDetails(slug:any) {

  const data:objectType = {
    "vespa-conversion": {
      id:1,
      name:"Vespa Conversion Kit",
      category: "eMotorcycle",
      description:"Unleash your adventurous spirit and embrace the untamed freedom that this electric motorcycle brings to the table. Packed with a state-of-the-art electric drivetrain, it delivers electrifying acceleration that will leave traditional gas-powered bikes in the dust. Feel the sensation of being connected to the road as the agile and responsive handling takes your riding skills to new heights. Say goodbye to frequent gas stops and costly maintenance, as this eco-friendly marvel offers cost-effective and hassle-free ownership. Be a trendsetter, an advocate for sustainability, and a true pioneer in the world of motorcycling. Embrace the future now, and ride with passion, power, and purpose aboard this game-changing electric motorcycle!",
      image_path:['/images/products/CONVERSION/VESPA/Vespa_1.png', '/images/products/CONVERSION/VESPA/Vespa_2.png', '/images/products/CONVERSION/VESPA/Vespa_3.png', '/images/products/CONVERSION/VESPA/Vespa_4.png']
    },
    
    "raptor-e3": {
      id:6, 
      name:"RAPTOR E3", 
      category: "eMotorcycle", 
      description:"Unleash your adventurous spirit and embrace the untamed freedom that this electric motorcycle brings to the table. Packed with a state-of-the-art electric drivetrain, it delivers electrifying acceleration that will leave traditional gas-powered bikes in the dust. Feel the sensation of being connected to the road as the agile and responsive handling takes your riding skills to new heights. Say goodbye to frequent gas stops and costly maintenance, as this eco-friendly marvel offers cost-effective and hassle-free ownership. Be a trendsetter, an advocate for sustainability, and a true pioneer in the world of motorcycling. Embrace the future now, and ride with passion, power, and purpose aboard this game-changing electric motorcycle!", 
      image_path:['/images/products/CONVERSION/RAPTOR_E3/RAPTOR E3_1.png', '/images/products/CONVERSION/RAPTOR_E3/RAPTOR E3_2.png', '/images/products/CONVERSION/RAPTOR_E3/RAPTOR E3_3.png', '/images/products/CONVERSION/RAPTOR_E3/RAPTOR E3_4.png']
    },
    
    "takara": {
      id:10, 
      name:"TAKARA", 
      category: "eMotorcycle", 
      description:"Unleash your adventurous spirit and embrace the untamed freedom that this electric motorcycle brings to the table. Packed with a state-of-the-art electric drivetrain, it delivers electrifying acceleration that will leave traditional gas-powered bikes in the dust. Feel the sensation of being connected to the road as the agile and responsive handling takes your riding skills to new heights. Say goodbye to frequent gas stops and costly maintenance, as this eco-friendly marvel offers cost-effective and hassle-free ownership. Be a trendsetter, an advocate for sustainability, and a true pioneer in the world of motorcycling. Embrace the future now, and ride with passion, power, and purpose aboard this game-changing electric motorcycle!",
      image_path:['/images/products/CONVERSION/TAKARA/Takara_1.png', '/images/products/CONVERSION/TAKARA/Takara_2.png', '/images/products/CONVERSION/TAKARA/Takara_3.png', '/images/products/CONVERSION/TAKARA/Takara_4.png', '/images/products/CONVERSION/TAKARA/Takara_5.png']
    },
    "alpha-r1": {
      id:4, 
      name:"ALPHA R1", 
      category: "eMotorcycle", 
      description:"Introducing the revolutionary electric motorcycle, an awe-inspiring blend of power and sustainability, designed to redefine your riding experience. Embrace the future of two-wheeled excitement with this cutting-edge machine that combines high-performance engineering with eco-consciousness. Feel the rush of instant torque as you effortlessly zoom through city streets, all while leaving behind a smaller carbon footprint. With its sleek design, advanced battery technology, and whisper-quiet operation, this electric motorcycle stands as a symbol of progress and responsible riding. Join the electric movement today and seize the opportunity to embark on thrilling adventures while championing a greener tomorrow.",
      image_path:['/images/products/ALPHA_R1/ALPHA R1_1.png', '/images/products/ALPHA_R1/ALPHA R1_2.png', '/images/products/ALPHA_R1/ALPHA R1_3.png', '/images/products/ALPHA_R1/ALPHA R1_4.png']
    },
    "iconic-z5": {
      id:5, 
      name:"ICONIC Z5", 
      category: "eATV", 
      description:"Introducing the revolutionary electric motorcycle, an awe-inspiring blend of power and sustainability, designed to redefine your riding experience. Embrace the future of two-wheeled excitement with this cutting-edge machine that combines high-performance engineering with eco-consciousness. Feel the rush of instant torque as you effortlessly zoom through city streets, all while leaving behind a smaller carbon footprint. With its sleek design, advanced battery technology, and whisper-quiet operation, this electric motorcycle stands as a symbol of progress and responsible riding. Join the electric movement today and seize the opportunity to embark on thrilling adventures while championing a greener tomorrow.",
     image_path:['/images/products/ICONIC_Z5/eATV_outdoor.JPG', '/images/products/ICONIC_Z5/ICONIC Z5_1.png',]
    },
    "trion-m35": {
      id:2, 
      name:"TRION M35", 
      category: "eScooter", 
      description:"Introducing the revolutionary electric scooter of the future - the Trion M35! This cutting-edge scooter combines sleek design, high-performance capabilities, and eco-friendly features, making it the ultimate urban commuting companion. Zip through traffic effortlessly with its powerful electric motor, delivering a thrilling acceleration and a top speed of 25 mph. The Trion M35's lightweight yet sturdy frame ensures nimble maneuverability, while its long-lasting lithium-ion battery guarantees an impressive range of 50 miles on a single charge. Say goodbye to fuel expenses and harmful emissions, as this eco-conscious scooter offers a greener way to travel, contributing to a cleaner and more sustainable planet. Upgrade your daily commute with the Trion M35, and embrace the future of electrifying transportation!",
     image_path:['/images/products/TRION_M35/TRION_M35_1.JPG', '/images/products/TRION_M35/TRION_M35_2.JPG', '/images/products/TRION_M35/TRION_M35_3.JPG']
    },
    "phantom-v1": {
      id:3, 
      name:"PHANTOM V1", 
      category: "eBike", 
      description:"Introducing the revolutionary electric bicycle - the epitome of convenience, style, and eco-friendly transportation! Designed to cater to your modern lifestyle, our electric bicycle effortlessly combines the power of cutting-edge technology with the sheer joy of cycling. Embrace the thrill of effortless riding as the electric motor effortlessly propels you forward, conquering steep inclines and long distances with ease. Say goodbye to traffic jams and parking woes as you gracefully weave through the city streets, all while reducing your carbon footprint. Elevate your daily commute or weekend adventures with this sleek, agile, and environmentally conscious electric bicycle, the perfect embodiment of freedom and sustainability!",
     image_path:['/images/products/PHANTOM_V1/PHANTOMV1_1.JPG', '/images/products/PHANTOM_V1/PHANTOMV1_2.JPG', '/images/products/PHANTOM_V1/PHANTOMV1_3.JPG']
    },
    "trion-d5": {
      id:7, 
      name:"TRION D5", 
      category: "eScooter", 
      description:"Meet the Trion D5 - the epitome of efficiency and style in the world of electric scooters! Engineered with precision and built for the modern adventurer, the Trion D5 seamlessly blends performance with elegance. Experience the thrill of speed as it effortlessly reaches 30 mph, and with its smart battery management system, you can confidently cruise up to 60 miles on one charge. Conquer any terrain with ease, thanks to its rugged tires and advanced suspension system that ensure a smooth and stable ride. The Trion D5 also boasts a state-of-the-art digital display, offering real-time information on speed, battery life, and distance traveled. Make a bold statement while saving time, money, and the environment with the Trion D5 - the only electric scooter you'll ever need!",
     image_path:['/images/products/TRION_D5/TRION_D5_1.jpg', '/images/products/TRION_D5/TRION_D5_2.JPG', '/images/products/TRION_D5/TRION_D5_3.jpg', '/images/products/TRION_D5/TRION_D5_4.jpg']
    },
    "phantom-h5": {
      id:8, 
      name:"PHANTOM H5", 
      category: "eBike", 
      description:"Unleash the true potential of urban exploration with our game-changing electric bicycle. Seamlessly blending form and function, this two-wheeled marvel is the embodiment of style and substance. Cruise through cityscapes with unwavering confidence, knowing that our electric bicycle is not just a means of transportation but a statement of your forward-thinking lifestyle. The thoughtfully integrated electric motor guarantees a smooth and swift ride, amplifying your cycling prowess without compromising on elegance. Embrace the wind in your hair as you effortlessly navigate through the urban landscape, embracing a new era of greener, smarter, and more exhilarating travel. Unite style, efficiency, and sustainability with our electric bicycle, the ultimate choice for a dynamic, eco-conscious urban adventurer!",
     image_path:['/images/products/PHANTOM_H5/phantom_h5_outdoor.JPG', '/images/products/PHANTOM_H5/PHANTOM H5_1.png', '/images/products/PHANTOM_H5/PHANTOM H5_2.png', '/images/products/PHANTOM_H5/PHANTOM H5_3.png']
    },
    "nemesis-a5": {
      id:9, 
      name:"NEMESIS A5", 
      category: "Electric Smart Balance",
      description:"Are you ready to experience cycling like never before? Say hello to Vector NEMESIS A5, the ultimate fusion of technology and the age-old joy of riding. Conquer challenging terrains effortlessly with its high-performance motor and enjoy a safe journey with smart features. Embrace the joy of commuting and exploring while leaving a minimal carbon footprint. Elevate your cycling with our state of the art Vector Phantom H1, stylish, convenient, and sustainable. Effortlessly ride through traffic with the powerful motor, stay safe with advanced features, and explore more with an extended battery range. Join the electric biking revolution and create cherished memories with loved ones while contributing to a greener planet.",
     image_path:['/images/products/NEMESIS_A5/Nemesis A5_model.jpg', '/images/products/NEMESIS_A5/Nemesis A5_1.png', '/images/products/NEMESIS_A5/Nemesis A5_2.png']
    },
  }

  return data[slug];
}


export async function getAllProducts() {
  const datas:Object[] = [
    {id:1, slug: "vespa-conversion"},
    {id:6, slug: "raptor-e3"},
    {id:10, slug: "takara",},
    {id:2, slug: "trion-m35"},
    {id:3, slug: "phantom-v1"},
    {id:4, slug: "alpha-r1"},
    {id:5, slug: "iconic-z5"},
    {id:7, slug: "trion-d5"},
    {id:8, slug: "phantom-h5"},
    {id:9, slug: "nemesis-a5"},
  ]

  return datas;
}