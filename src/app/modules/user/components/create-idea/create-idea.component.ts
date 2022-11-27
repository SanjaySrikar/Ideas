import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import topics from '../../../../mock-data/topics';
import idea from 'src/app/models/idea';
import { ActivatedRoute } from '@angular/router';
import Ideas from 'src/app/mock-data/ideas';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.css'],
})
export class CreateIdeaComponent implements OnInit {
  topics!: any;
  value!: string;
  idea!: idea;
  a!:HTMLCollection
  test1 = ''


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    fonts: [{ class: 'sans-serif', name: 'Poppins' }],
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'yes',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Poppins',
    outline: false,
    toolbarHiddenButtons: [['bold']],
  };

  constructor(private route : ActivatedRoute) {
    this.topics = topics;
    this.value = 'HELP';

  }

  ngOnInit(): void {
    const props = this.route.snapshot.paramMap;
    const ideaID = Number(props.get('id'))
    const target = Ideas.find(ele => ele.id == ideaID)
    this.idea = target
  }

  test() {

  }
}
