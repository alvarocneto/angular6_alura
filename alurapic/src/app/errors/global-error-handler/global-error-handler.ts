import { ErrorHandler } from '@angular/core';
import * as StackTrace from 'stacktrace-js';

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log('passei no global handler');
    StackTrace.fromError(error).then(stackFrames => {
      console.log(stackFrames);
    });
  }
}
