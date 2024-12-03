import * as React from 'react';
import { Badge, Card, Text } from '@radix-ui/themes';


export default function MediaCard() {
  return (
    <Card className="rounded-[4px] border-gray-6 p-0 m-0 overflow-hidden">
      <div className="h-43 m-0 p-0 relative">
        <img className="w-full max-h-43 object-cover" src="/mediaImg/mediaImg.png" alt="" />
        <Badge className="absolute left-2 top-2 bg-accent-alpha-3 text-accent-alpha-11 uppercase">
          png
        </Badge>
      </div>
      <div className="flex flex-col m-0 p-0">
        <Text
          size="3"
          weight="medium"
          className="text-gray-12 mx-3 mt-3"
          children="kakoe-to-nazvanie_watsup123131231231213..."
        />
        <Text
          size="2"
          weight="regular"
          className="text-gray-11 mx-3 mb-3"
          children="1920x1080px [16x9]"
        />
      </div>
    </Card>
  )
}