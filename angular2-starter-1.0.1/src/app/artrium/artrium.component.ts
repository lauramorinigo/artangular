import {Component} from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'as-artrium',
  templateUrl: 'app/artrium/artrium.html'
})
export class ArtriumComponent {
  public file_srcs: string[] = [];

  constructor( private changeDetectorRef: ChangeDetectorRef ) {
  }

  // This is called when the user selects new files from the upload button
  fileChange(input) {
    this.readFiles(input.files);
  }

  readFile(file, reader, callback) {
    // Set a callback funtion to fire after the file is fully loaded
    reader.onload = () => {
      // callback with the results
      callback(reader.result);
    };

    // Read the file
    reader.readAsDataURL(file);
  }

  readFiles(files, index = 0) {
    // Create the file reader
    let reader = new FileReader();

    // If there is a file
    if (index in files) {
      // Start reading this file
      this.readFile(files[index], reader, (result) => {
        // After the callback fires do:
        this.file_srcs.push(result);
        this.readFiles(files, index + 1) ;  // Read the next file;

      });
    } else {
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }
}
