import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GamecardSkeleton = () => {
  return (
     <Card width={'200px'} borderRadius={10} overflow={"hidden"}>
        <Skeleton height={'200px'}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
     </Card>
  )
}

export default GamecardSkeleton