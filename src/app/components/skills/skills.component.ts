import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,   // علشان تقدر تستخدمه في الـ imports جوه الـ test
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // هنا تقدر تحط أي بيانات أو دوال للكومبوننت
  skills: string[] = ['Angular', 'TypeScript', 'Java', 'SQL'];

  addSkill(skill: string) {
    if (skill && !this.skills.includes(skill)) {
      this.skills.push(skill);
    }
  }

  removeSkill(skill: string) {
    this.skills = this.skills.filter(s => s !== skill);
  }
}
