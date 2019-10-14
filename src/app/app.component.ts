import { Component, OnInit } from '@angular/core';
import { DemoService } from './services/demo.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Edit file';

  constructor(private _demoService: DemoService) { }

  fileForm = new FormGroup({
    downloadFileContent: new FormControl(`Change something \n here`)
  });
  templateFileContents = 'here \n here';

  /**
   * Make call to /download endpoint and then, get file contents
   */
  getFileContents() {
    this._demoService.getFileContents().subscribe(fileContents => {
      console.log(fileContents);
      let modifiedtext2 = fileContents.replace(/\\n/g, '\n').replace(/\\r/g, '\r');
      console.log(modifiedtext2);
      this.templateFileContents = modifiedtext2;
      console.log('TEmplateFileContents');
      console.log(this.templateFileContents);
      this.fileForm.setValue({
        downloadFileContent: modifiedtext2
      });
    });
    // below - with download + actual fetch
    // this._demoService.getDownloadUrl().subscribe((url: String) => {
    //   console.log(url);
    //   let truncatedFront = url.split(':"')[1];
    //   let truncatedUrl = truncatedFront.split('"}')[0];
    //   console.log('Truncated URL: ' + truncatedUrl);
    //   this.fileForm.patchValue({
    //     downloadFileContent: 'testing 123'
    //   }); // TODO:: remove after the get content call works.
    //   this._demoService.getContent(truncatedUrl).subscribe(
    //     fileContents => {
    //       console.log('within the nested subscribe');
    //       console.log(fileContents);
    //       this.fileForm.patchValue({
    //         downloadFileContent: fileContents
    //       });
    //       this.fileForm.patchValue({
    //         downloadFileContent: 'hi there i am test content'
    //       }); // TODO:: remove this later
    //     }
    //   );
    // });
  }

  ngOnInit() {
    // TODO:: extract path of file from url
    console.log('In init');
    // Get contents of file and display on screen
    this.getFileContents();
  }

  /**
   * On Press of Submit button, call /update endpoint to update the respective file.
   */
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.fileForm.value);
    this.updateFileContents();
  }

  updateFileContents() {
    this.deleteFile();
    this.addFile();
  }

  deleteFile() {
    this._demoService.deleteFile().subscribe();
  }

  addFile() {
    this._demoService.createFile().subscribe();
  }

}
