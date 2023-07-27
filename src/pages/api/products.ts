// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data_product = [
    {id:1, slug: "vespa-conversion", name:"Vespa Conversion Kit", category: "eMotorcycle", description:"Lorem ipsum dolor amet", image_path:'/images/products/eATV/eATV_outdoor.JPG'},
    {id:6, slug: "raptor-e3", name:"RAPTOR E3", category: "eMotorcycle", description:"Lorem ipsum dolor amet", image_path:'/images/products/eATV/eATV_outdoor.JPG'},
    {id:10, slug: "takara", name:"TAKARA", category: "eMotorcycle", description:"Lorem ipsum dolor amet", image_path:'/images/products/eATV/eATV_outdoor.JPG'},
    {id:2, slug: "trion-m35", name:"TRION M35", category: "eScooter", description:"Electric Scooter", image_path:'/images/products/eATV/eATV_outdoor.JPG'},
    {id:3, slug: "phantom-v1", name:"PHANTOM V1", category: "eBike", description:"", image_path:'/images/products/eATV/eATV_outdoor.JPG'},
    {id:4, slug: "alpha-r1", name:"ALPHA R1", category: "eMotorcycle", description:"Lorem ipsum dolor amet", image_path:'/images/products/eATV/eATV_outdoor.JPG'},
    {id:5, slug: "iconic-z5", name:"ICONIC Z5", category: "eATV", description:"Lorem ipsum dolor amet", image_path:'/images/products/eATV/eATV_outdoor.JPG'},
    {id:7, slug: "trion-d5", name:"TRION D5", category: "eScooter", description:"First ever vector product", image_path:'/images/products/eATV/eATV_outdoor.JPG'},
    {id:8, slug: "phantom-h5", name:"PHANTOM H5", category: "eBike", description:"Lorem ipsum dolor amet", image_path:'/images/products/eATV/eATV_outdoor.JPG'},
    {id:9, slug: "nemesis-a5", name:"NEMESIS A5", category: "Electric Smart Balance", description:"Lorem ipsum dolor amet", image_path:'/images/products/eATV/eATV_outdoor.JPG'},
  ]
  if (req.method === 'GET') {
    res.status(200).json(data_product);
  }

}