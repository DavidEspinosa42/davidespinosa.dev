import { Utils } from './utils';
import { HttpErrorResponse } from '@angular/common/http';

describe('Utils', () => {

	beforeEach(() => {
		spyOn(console, 'error');
	});

	it('should log a console.error and throw an error with string', () => {
		const errorReceived = new HttpErrorResponse({
			error: 'some error message',
			status: 404
		});

		Utils.handleError(errorReceived).subscribe(
			() => fail('should fail'),
			(error) => {
				expect(error).toEqual('Something bad happened; please try again later.');
			}
		);

		expect(console.error).toHaveBeenCalledWith('Backend returned code 404, body was: "some error message"');
	});

	it('should log other type of console.error and throw an error with string', () => {
		const errorReceived = new HttpErrorResponse({
			error: new ErrorEvent('', { message: 'some error message' })
		});

		Utils.handleError(errorReceived).subscribe(
			() => fail('should fail'),
			(error) => {
				expect(error).toEqual('Something bad happened; please try again later.');
			}
		);

		expect(console.error).toHaveBeenCalledWith('An error occurred:', 'some error message');
	});

});
