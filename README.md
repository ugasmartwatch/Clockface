Jan 11-18th: Created a clockface but could not load during the meeting. Lost the code.

Jan 18-19th: The watch was not working properly and always in booting status. Dr. Johnsen helped to fix the problem.

Jan 20-25th: Created another clockface and showed Dr. Johnsen how it worked.

Jan 26-31th: Brainstormed and made initialization on a web page for parent to make reminders on the watch.

Feb 1-4th: Researched about collecting and saving information from the web interface.

           Another idea about the web page: could has a collection of each child's schedule
           
           And/or: patterns of the reminders (i.e. different or the same for every day, difference of weekdays and weekend)
           
Feb 5-13th: Hard code reminder message and alarm through website. Can't collect and parse data into sched libraries.

Feb 14th: Tried to call E.showMessage and E.showPrompt to parse the messgae data. Still cannot figure out how to parse the time to sched.js

Feb 15-28th: Tried to parse value with Stringify and JSON parse but can't not push the alarm into to watch. 

             May use compareTo to make alarm and notification if parse still does not work out.

March 1-10th: Midterm and Spring break

March 11-15th: Got interaction between website and the watch. Successfully collected values to create alarm from the web and push the alarm to the watch. The alarm also worked on the watch.

           To do: check what happens if two alarms are set at the same time
                  check if the alarm is still there if the watch is reset
                  
March 16-21st: Changed layout of the time (created time box instead two int input boxes), added date input box, and repeat pattern. Created a button to make multiple alarms.
           When two alarms are set at the same time. The last one that added to the watch will be first. After stop the alarm, the other one will be on immediately.
           If the watch is reset, the alarm is still there

           Problem: the date is set one day before the actual date from the web (e.g. if user chooses 03/31/2023 from the web, the alarm would appear as 03/30/2023)
                    the alarm is set once on default, no repeat. 
                    repeat pattern only takes boolen (everyday repeat or not) or object (frequency of day, week, month, or year)
                    
March 22-April
                    
             
