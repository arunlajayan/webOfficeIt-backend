import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { DatabaseModule } from 'common/database/database.module';

@Module({
  imports: [DatabaseModule,CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
