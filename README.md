# LeaFeigiNode
מה עוד צריך לעשות:

3. להגביל גישה לטבלה של הסיסמאות

10. לטפל ב user

7. שלא יצטרכו להוסיף פריט כשהתכונות בסדר מסוים
11. גנריות
13. שאילתות לפי כל פרמטר ששולחים ולא רק לפי האי די של האבא
14. אולי getByParam צריך להיות גם לפי כמה פרמטרים

15. לסדר שגיאות וערך חוזר
16. להוסיף מידע בבסיס נתונים
17. אם צריך להשלים את כל הנתיבים והפונקציות לכולם
18. פעולות מתקדמות
19. כשמשנים בדפדפן את היואראל להתריע על שגיאה


-- _limit=2
SELECT * FROM users LIMIT 2;

-- _sort=name
SELECT * FROM users order by name;

-- field=       username="Bret"
SELECT * FROM users where username="Bret";