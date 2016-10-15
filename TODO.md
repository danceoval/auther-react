DONE: Main Page
<!--  
 - DONE: Basic main page renders
 - DONE: renders correct buttons if logged in or not 
 - DONE: not signed in by default
 - DONE: Signup works
 - DONE: Signup persists on reload -->
 - Need to redirect on succesful signup to a different page
 - Signup with Google is missing, though Login with google exists?


 USER LIST
<!--   
  - DONE: Navigation to /Users
  - DONE: Fetching initial users
  - DONE: Removing a user 
-->
  - User filter
  - Add User
  - ** remove only for admins **

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
