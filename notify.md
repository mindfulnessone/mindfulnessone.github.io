---
layout: page
permalink: /notify/
main_nav: false
---

Notify me when the next event is scheduled

<form action="https://ftu1crqzy9.execute-api.us-east-1.amazonaws.com/submit-email" method="post">
  <label for="email">Email:</label>
  <input type="text" id="email" name="email">
  <input type="submit" value="Submit">
</form>
