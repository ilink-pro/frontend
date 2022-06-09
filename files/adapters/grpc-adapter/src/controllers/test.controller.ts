import { Controller }     from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'

@Controller()
export class TestController {
  @MessagePattern('testit')
  testit(request) {
    console.log('invoked')
    console.log(request)

    return request.text.toUpperCase()
  }
}
