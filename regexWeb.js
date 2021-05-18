// let re = /a/;

// let str1 = re.test("abcdefg");
// let str2 = re.test("abcde");
// let str3 = re.test("abc");
// console.log(str1, str2, str3);

//-----------------------------------------------------------

// let re = /\d/;

// let str1 = re.test("abc123xyz");
// let str2 = re.test(`define "123"`);
// let str3 = re.test("var g = 123;");
// console.log(str1, str2, str3);

//-------------------------------------------------------

// let re = /\./;

// let str1 = re.test("cat.");
// let str2 = re.test(`896.`);
// let str3 = re.test("?=+.");
// let str4 = re.test("abc1");
// console.log(str1, str2, str3, str4);

//---------------------------------------------------------

// let re = /[cmf]/;

// let str1 = re.test("can");
// let str2 = re.test(`man`);
// let str3 = re.test("fan");
// let str4 = re.test("dan");
// let str5 = re.test("ran");
// let str6 = re.test("pan");
// console.log(str1, str2, str3, str4, str5, str6);

//--------------------------------------------------------

// let re = /[^bog]/;

// let str1 = re.test("hog");
// let str2 = re.test(`dog`);
// let str3 = re.test("bog");
// console.log(str1, str2, str3);

//-------------------------------------------------------

// let re = /[A-Z]/;

// let str1 = re.test("Ana");
// let str2 = re.test(`Bob`);
// let str3 = re.test("Cpc");
// let str4 = re.test("aax");
// let str5 = re.test("bby");
// let str6 = re.test("ccz");
// console.log(str1, str2, str3, str4, str5, str6);

//--------------------------------------------------------------------

// let re = /aa+/;

// let str1 = re.test("aaaabcc");
// let str2 = re.test(`aabbbbc`);
// let str3 = re.test("aacc");
// let str4 = re.test("a");
// console.log(str1, str2, str3, str4);

//-------------------------------------------------------

// let re = /\d\d?/;

// let str1 = re.test("1 file found?");
// let str2 = re.test(`2 files found?`);
// let str3 = re.test("24 files found?");
// let str4 = re.test("No files found.");
// console.log(str1, str2, str3, str4);

//-------------------------------------------------------

// let re = /\s/;

// let str1 = re.test("1.   abc");
// let str2 = re.test(`2.  abc`);
// let str3 = re.test("3.           abc");
// let str4 = re.test("4.abc");
// console.log(str1, str2, str3, str4);

//--------------------------------------------------------

// let re = /^M.+l$/;

// let str1 = re.test("Mission: successful");
// let str2 = re.test(`Last Mission: unsuccessful`);
// let str3 = re.test("Next Mission: successful upon capture of target");
// console.log(str1, str2, str3);

//--------------------------------------------------------

// let re = /(^file.*)\.pdf$/;

// let str1 = re.test("file_record_transcript.pdf");
// let str2 = re.test(`file_07241999.pdf`);
// let str3 = re.test("testfile_fake.pdf.tmp");
// console.log(str1, str2, str3);

//--------------------------------------------------------

// let re = /(.*(\d{4}))/;

// let str1 = re.test("Jan 1987");
// let str2 = re.test(`May 1969`);
// let str3 = re.test("Aug 2011");
// console.log(str1, str2, str3);

//--------------------------------------------------------

// let re = /(\d{3}\d?)x(\d{3}\d?)/;

// let str1 = re.test("1280x720");
// let str2 = re.test(`1920x1600`);
// let str3 = re.test("1024x768");
// console.log(str1, str2, str3);

//-------------------------------------------------------

// let re = /cats|dogs/;

// let str1 = re.test("I love cats");
// let str2 = re.test(`I love dogs`);
// let str3 = re.test("I love logs");
// let str4 = re.test("I love cogs");
// console.log(str1, str2, str3, str4);
