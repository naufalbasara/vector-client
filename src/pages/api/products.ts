// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data_product = [
    {id:1, slug: "vespa-conversion", name:"Vespa Conversion Kit", category: "eMotorcycle", image_path:'/images/products/CONVERSION/VESPA/Vespa_1.png'},
    {id:6, slug: "raptor-e3", name:"RAPTOR E3", category: "eMotorcycle", image_path:'/images/products/CONVERSION/RAPTOR_E3/RAPTOR E3_1.png'},
    {id:10, slug: "takara", name:"TAKARA", category: "eMotorcycle", image_path:'/images/products/CONVERSION/TAKARA/Takara_1.png'},
    {id:4, slug: "alpha-r1", name:"ALPHA R1", category: "eMotorcycle", image_path:'/images/products/ALPHA_R1/Alpha R1_1.png'},
    {id:5, slug: "iconic-z5", name:"ICONIC Z5", category: "eATV", image_path:'/images/products/ICONIC_Z5/Iconic Z5_1.png'},
    {id:9, slug: "nemesis-a5", name:"NEMESIS A5", category: "Electric Smart Balance", image_path:'/images/products/NEMESIS_A5/Nemesis A5_1.png'},
    {id:3, slug: "phantom-v1", name:"PHANTOM V1", category: "eBike", image_path:'/images/products/PHANTOM_V1/PHANTOMV1_2.JPG'},
    {id:8, slug: "phantom-h5", name:"PHANTOM H5", category: "eBike", image_path:'/images/products/PHANTOM_H5/PHANTOM H5_1.png'},
    {id:2, slug: "trion-m35", name:"TRION M35", category: "eScooter", image_path:'/images/products/TRION_M35/TRION_M35_3.JPG'},
    {id:7, slug: "trion-d5", name:"TRION D5", category: "eScooter", image_path:'/images/products/TRION_D5/TRION_D5_2.JPG'},
  ]
  if (req.method === 'GET') {
    res.status(200).json(data_product);
  }

}