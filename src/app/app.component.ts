import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar, schema, toHTML } from 'ngx-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'spyro-app';
  editor!: Editor;

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form: any;
  val = '<h1><strong>err mannne </strong><u>uruenndnnd</u></h1>';

  ngOnInit(): void {
    this.form = new FormGroup({
      editorContent: new FormControl(null, Validators.required),
    });

    // Patching the value into the form
    this.form.patchValue({
      editorContent: this.val,
    });

    this.editor = new Editor({
      content: '',
      plugins: [],
      schema,
      nodeViews: {},
      history: true,
      keyboardShortcuts: true,
      inputRules: true,
    });
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value.editorContent);
    } else {
      console.log('Form is not valid');
    }
  }
}
