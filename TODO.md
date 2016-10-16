A lot of problems seem to come from the fact that you can add stories without authors, etc.


DONE: Main Page
<!--  
 - DONE: Basic main page renders
 - DONE: renders correct buttons if logged in or not 
 - DONE: not signed in by default
 - DONE: Signup works
 - DONE: Signup persists on reload
 - DONE: Logout works
 - DONE: Logout persists on reload
 - DONE: Signup works -->
 - Would like to redirect on succesful signup to main page
 - Signup with Google is missing, though Login with google exists?
   Need to look into the OAuth stuff in general


 USER LIST
<!--   
  - DONE: Navigation to /Users
  - DONE: Fetching initial users
  - DONE: Removing a user 
  - DONE: Filter works
  - DONE: Admin can delete anyone
  - DONE: Signin can add anyone -->
  - on old-auther you could add or remove regardless of being signed in. What is the correct functionality for the finished version?
  What about for the starting point? Need to get this down.

USER DETAIL
<!--   
  - DONE: Navigation to /Users/:id
-->
  - Associate stories with user detail view
  - remove only for admins

STORIES
<!--   
  - DONE: List Stories
  - DONE: Select Author for Stories 
  - DONE: Add Stories (anyone)-->
  - Search Stories
  - Delete Stories (self or admin)
    - DONE: Add Stories (self or admin)
  - cascading delete on author delete ? Server side also

STORY DETAIL
  - Vulnerable to XSS
  - 

 SIGN UP
  DONE: Google

 LOG IN
  DONE: Vanilla
  DONE: Google

VISIBILITY CONTROLS
 - Stories are globally editable 
 - Logged in user may delete their own story/edit own profile info
 - Admins may delete any story/user


HIGH PRIORITY
 DONE: Oauth Signup/Login
 - Add Stories w/XSS



AUTH RULES
  Not Signed In
  -------------
  