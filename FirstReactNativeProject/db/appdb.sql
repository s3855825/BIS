BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Accounts" (
	"id"	INTEGER,
	"username"	TEXT UNIQUE,
	"email"	TEXT UNIQUE,
	"password_hash"	TEXT,
	"user_score"	REAL DEFAULT 100.0,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Posts" (
	"id"	INTEGER,
	"user_id"	INTEGER,
	"title"	TEXT,
	"message"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("user_id") REFERENCES "Accounts"("id")
);
CREATE TABLE IF NOT EXISTS "Groups" (
	"id"	INTEGER,
	"group_name"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Roles" (
	"id"	INTEGER,
	"role_name"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "GroupMembers" (
	"id"	INTEGER,
	"group_id"	INTEGER,
	"member_id"	INTEGER,
	"member_role"	INTEGER,
	FOREIGN KEY("group_id") REFERENCES "Groups"("id"),
	FOREIGN KEY("member_id") REFERENCES "Accounts"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Activities" (
	"id"	INTEGER,
	"message"	TEXT,
	"author"	INTEGER,
	"group_id"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("author") REFERENCES "Accounts"("id"),
	FOREIGN KEY("group_id") REFERENCES "Groups"("id")
);
COMMIT;
