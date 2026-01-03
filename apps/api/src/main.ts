import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module.js'
import { inspect } from './utils.js'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT ?? 3000)
}

bootstrap().catch((e) => {
  console.error(inspect(e))
  process.exit(1)
})
