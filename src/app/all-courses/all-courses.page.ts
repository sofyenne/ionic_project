import { Component, OnInit } from '@angular/core';
import { ListCourseService } from '../list-course.service';
import { Course } from '../model/course'
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.page.html',
  styleUrls: ['./all-courses.page.scss'],
})
export class AllCoursesPage implements OnInit {

  myCourses : Course[] = [];

  constructor(private courseServ : ListCourseService) { }

  ngOnInit() {
    this.myCourses = this.courseServ.getAllCourses();

  }

}
