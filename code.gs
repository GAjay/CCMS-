 
function onFromSubmit(e){
                      var userScholarno=e.values[1];
                      var userName=e.values[3];
                      var userfName=e.values[4];
                      var userEmail = e.values[8];
                      var userbatch= e.values[13];
                      var userbranch= e.values[11];
                      var useraccount= e.values[15];
                      var usertaccount= e.values[16];
                      var userbnaccount= e.values[17];
                      var userbankcifsc= e.values[20];
                      var userbankmicrc= e.values[21];
                     
                      if(userbatch == "2011-12"){
                       var template = HtmlService.createTemplateFromFile('app');
                                                                         //variabes of mail.html file
                                                                         
                                                                        template.userScholar= userScholarno;
                                                                        template.userfname= userfName;
                                                                        template.batch= userbatch;
                                                                        template.username= userName;
                                                                        template.userAccount= useraccount;
                                                                        template.typeaccount= usertaccount;
                                                                        template.bankaccount= userbnaccount;
                                                                        template.ifsccode= userbankcifsc;
                                                                        template.micrcode= userbankmicrc;
                                                                       
                                                                        
                                                                         
                       var html = template.evaluate().getContent();  
                       MailApp.sendEmail(userEmail,"caution money",'Requires HTML', {htmlBody:html});  }
                       
                       else{ 
                         MailApp.sendEmail(userEmail,"caution money",'batch not vaild');
                         }
                        
                      }
