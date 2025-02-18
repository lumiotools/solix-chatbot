export const MANUAL_CONTENT = `# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Solix Enterprise Data Management Suite (Standard Edition) 2.2

# Product User Manual

SOLIX

Empowering Data Management

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 0
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Copyrights

Copyright © 2003-2014 Solix Technologies, Inc. All rights reserved. This product or document is protected by copyright and distributed under licenses restricting its use, copying, distribution and recompilation. No part of this product or document may be reproduced in any form by any means without prior written authorization of Solix Technologies, Inc. and its licensors, if any.

# Trademarks

Solix Enterprise Data Management Suite is trademark or registered trademark of Solix Technologies Inc. and may be protected as trademarks in other countries. All other product, service, or company names mentioned herein are claimed as trademarks and trade names by their respective companies including Oracle used in this guide are the registered trademarks of the respective companies with which they are associated.

Java and all Java-based marks are trademarks or registered trademarks of Sun Microsystems, Inc. in the U.S. and other countries.

This document contains proprietary information of Solix Technologies, Inc. No part of this document may be reproduced, stored, copied, or transmitted in any form without the consent of Solix Technologies, Inc.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | i
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Table of Content

1. Introduction to Solix EDMS Standard Edition (SE)......................................................... 1
1. Solix EDMS Data Assessment (ILM Assessment) Standard Edition (SE) ...................................... 1
2. Solix EDMS Database Archiving Standard Edition (SE) ....................................................................... 4
3. Solix EDMS Data Masking Standard Edition (SE).................................................................................... 4
4. Solix EDMS Data Validation Standard Edition (SE)................................................................................ 5
2. Getting Started .................................................................................................................. 6
1. Forgot Password................................................................................................................................................... 7
2. Change Password ................................................................................................................................................. 7
3. Data Assessment Process using Wizard .......................................................................10
1. Database Size Snapshot ...................................................................................................................................12
2. Archive Eligibility...............................................................................................................................................19
3. Data Growth Forecast.......................................................................................................................................37
4. Assessment Summary ......................................................................................................................................49
4. Data Masking Process using Wizard ..............................................................................53
1. Setup Database Connection ...........................................................................................................................54
2. Select Tables.........................................................................................................................................................58
3. Setup Security Rule Assignments ................................................................................................................60
4. Provide Security Rule Parameter Values & Run....................................................................................61
5. Rerun the Data Masking ..................................................................................................67
6. Data Validation Process using Wizard ...........................................................................69
1. Setup Database Connection ...........................................................................................................................71
2. Setup Data Validation Source & Target Details......................................................................................75
3. Setup Source & Target Column Matching ................................................................................................79
4. Setup Source & Target Column Comparison...........................................................................................81
5. Setup Data Validation Method & Run ........................................................................................................84
7. Rerun the Data Validation ...............................................................................................91
8. User Management ............................................................................................................93
1. User Creation .......................................................................................................................................................94

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | ii
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 8

# User Role Creation

.............................................................................................................................................98

# KB Source Target Definition

....................................................................................................................................................... 100

# KB Definitions

................................................................................................................................................... 103

# KB Assignments

............................................................................................................................................... 107

# 9

# Manage Source/Target Dictionary

................................................................................109

# Database Queries

............................................................................................................................................. 109

# Lookup Values

.................................................................................................................................................. 111

# Data Type Mapping

......................................................................................................................................... 113

# Parameters

......................................................................................................................................................... 115

# 10

# Data Assessment

...........................................................................................................117

# Creation of Data assessment

....................................................................................................................... 118

# Execution of Data assessment

.................................................................................................................... 138

# Status Monitor

.................................................................................................................................................. 139

# Data Assessment Policies

............................................................................................................................. 148

# Assign Data Assessment Policies

...................................................................................................................... 151

# Data Assessment Dashboard

...................................................................................................................... 154

# 11

# Database Archiving

.......................................................................................................157

# Custom Configuration (Design)

................................................................................................................. 158

# Custom Configuration (Execution)

.......................................................................................................................... 183

# 12

# Data Masking

..................................................................................................................189

# Security Rules

................................................................................................................................................... 189

# Security Rule Assignments (Design)

....................................................................................................... 194

# Security Rule Assignments (Execution)

................................................................................................. 197

# Security Groups (Design)

............................................................................................................................. 199

# Security Groups (Execution)

...................................................................................................................... 203

# 13

# Data Validation

...............................................................................................................205

# Custom SQL Statement

.................................................................................................................................. 206

# Custom Configuration

.................................................................................................................................... 210

# Data Validation Process

................................................................................................................................ 233

# Data Validation Execution

........................................................................................................................... 248

# Status Monitor

.................................................................................................................................................. 249

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | iii
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.6 Scheduler

............................................................................................................................................................ 256

# 13.7 Data Validation Process Flow Diagram

............................................................................................................................................................ 260

# 14 Metadata Import/Export

.................................................................................................265

# 14.1 Export Process

.................................................................................................................................................. 266

# 14.2 Import Process

................................................................................................................................................. 269

# 15 Log

..................................................................................................................................271

# 15.1 Audit

..................................................................................................................................................................... 271

# 15.2 Application Log

................................................................................................................................................ 273

# 16 Appendix

........................................................................................................................274

# 16.1 Appendix-A: Java based Algorithms

................................................................................................................................. 274

# 16.2 Appendix-B: Database Algorithms

................................................................................................................................. 277

# 17 About Solix Technologies

.............................................................................................280

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | iv
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 1. Introduction to Solix EDMS Standard Edition (SE)

Solix Enterprise Data Management Suite Standard Edition (SE) provides a set of diversified data management functionalities that helps to assess the archive eligible data and analysis the data for forecasting database growth for upcoming years, archive the data across homogeneous databases, secure the confidential data resides in the databases by masking the data based on regulatory compliance, and enable to validate data across homogeneous databases.

Solix Enterprise Data Management Suite Standard Edition (SE) contains four main features:

1. Solix EDMS Data Assessment (ILM Assessment) Standard Edition (SE)
2. Solix EDMS Database Archiving Standard Edition (SE)
3. Solix EDMS Data Masking Standard Edition (SE)
4. Solix EDMS Data Validation Standard Edition (SE)

# 1.1 Solix EDMS Data Assessment (ILM Assessment) Standard Edition (SE)

Solix EDMS Database Assessment Standard Edition (SE) plays a significant role to assess the amount of archive eligible data in a given database based on business criteria and provide the snapshot of data distributed in schemas, database size and helps in identifying the Top N tables based on the table size. Solix EDMS Database Assessment Standard Edition (SE) provides the flexibility to perform object-wise and table-wise data assessment to identify the archive eligible data available in the database based on the business compliances and retention policies. There is also a provision to depict the number of rows and data size of archive eligible data in a graphical representation.

Solix EDMS Data Assessment (ILM Assessment) Standard Edition (SE) uses retention management to assess the archive eligible data based on the retention policy. Once retention policy is assigned to the data assessment, the data found within the given retention period before the specified retention date will be assessed for the archive eligibility.

Database Assessment also provides the flexibility to assess the data growth at both tables and database level based on the statistical analysis and forecast the prediction of future growth in both the tables size and database growth size in graphical representation. It also analysis data growth yearly and provides the statistics analysis of data growth through graphical representation in dashboard.

There are four types of data assessments, they are:

1. Database Size Snapshot: Assess the data distributed in schemas, database size and size of Top N tables.
2. Archive Eligibility: Object-wise and table-wise data assessment to assess the archive eligible data.
- Table Level Archive Eligibility: Table - level data assessment to assess the archive eligible data in the tables based on the simple criteria or applying retention policies.
- Object Level Archive Eligibility: Object - level data assessment to assess the archive eligible data by defining a set of related tables, relations, joins, complex business criteria and applying retention policies.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 1
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 3. Data Growth Forecast

Analysis the data growth at table level and database level that helps to forecast the future database growth. Data growth forecast is predicted based on the some statistical regression methods that help to forecast the future data growth analysis. Data growth analysis is categorized into two types, they are:

# Table Level Forecast

To analysis the data growth based on selected tables and forecast the future growth of tables in size.

# Database Level Forecast

To analysis the data growth of database based on top tables and forecast the future database growth. Database Level forecast is categorized into two types, they are:

# Database Forecast

Database growth forecast based on the recent assessment for default data source. Make sure that atleast once the database size snapshot must be executed to forecast the database growth.

# Database Growth Analysis on Top Tables

Database growth forecast analysis based on top N tables’ growth.

# 4. Assessment Summary

Assessment Summary provides the consolidated summary of all the data assessments executed on the database. It shows the graphical representation and grid tables that provide the consolidated information of database snapshot, archive eligible data, and database growth analysis. It also provides the flexibility to select the retention policy (i.e., duration) data analyzing the database growth with archived and without archived.

Current version of Solix EDMS Database Assessment Standard Edition (SE) supports Oracle Database (9i, 10g, and 11g) and SQL Server (2005 and 2008). We recommend data assessment to be executed on recent clones of production database or production database for better output and prediction of future database growth.

In Data Growth Forecast, some statistical regression method is performed based on the current data in the database. Thereby, the database growth forecasted is an assumption so it may vary according to the business conditions.

# 1.1.1 Features of Solix EDMS Data Assessment (ILM Assessment) Standard Edition (SE)

- Identify the archive eligible data existing in the database (schema) based on the complex business rules.
- Identify the archive eligible data in the top tables by applying retention policies or simple criteria.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 2
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Statistical analysis of data growth helps to forecast the data growth in both database size and tables size in future.

- Identify data distribution among the schemas in a database.
- Identify Top N tables based on the table size.
- Identify the archive eligible data based on business compliance.
- Identify the archive eligible data as per eligible rows and eligible data size.

Eligible data - Inactive data (historical data and eligible for archiving)

Non-eligible data - Active data (Live data not eligible for archiving)

Depict the active and inactive data summary of recently executed data assessments in a dashboard.

Identifies and forecast the database growth on the selected top tables.

Dashboard shows the statistics analysis of business data growth based on the database/application level.

Provides the consolidated summary of data assessment on the database in the graphical representation that provides the snapshot of database size, archive eligible data in the database, database growth in size and records, and data growth based on the top tables based on the retention policies.

Based on the retention policy selected, the graphical representation shows the archived data growth and non-archived data growth in the database. It helps to understand the database growth with archived and without archived.

# 1.1.2 Benefits of Solix EDMS Data Assessment (ILM Assessment) Standard Edition (SE)

- Identify the eligible data to be archived in the database.
- Graphical representation of data assessment output helps to determine the number of archive eligible data in both database and tables.
- Analysis the yearly data growth in an enterprise.
- Understand and analyze the data growth of business at database level and table level both for next 5 years by graphical representation.
- Helps to execute data assessment based on the retention policy and simple criteria.
- Provide the detailed analytics by rows and size.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 3
---
# Solix EDMS Standard Edition (SE) 2.2

Helps to understand the future data growth in database and table in size for the next 5 years and helps to understand the strategy to archive the data timely for improving the data storage management.

Provide the flexibility to export the graphical representation of data assessment output into .pdf format.

# 1.2 Solix EDMS Database Archiving Standard Edition (SE)

Solix EDMS Database Archiving Standard Edition (SE) is a process of moving data that is no longer actively used to a separate data storage device for long-term retention. Data archives consist of historical data that is still important and necessary for future reference, as well as data that must be retained for regulatory compliance. Data archiving platforms like Solix EDMS Database Archiving Standard Edition (SE) provide data access so that data can be retrieved easily whenever needed.

# 1.2.1 Benefits of Solix EDMS Database Archiving Standard Edition (SE)

- Archiving optimizes storage and improves application performance.
- It mitigates risk by reducing the amount of data exposed to potential problems.
- It cuts the cost of storage by decreasing the amount of data on expensive Tier 1 disks significantly.
- It meets compliance requirements by preserving data in a read-only format while supporting data visualization through standard reporting tools.
- It improves business continuity by cutting the active data that requires backup and potential restoration, and decreasing backup windows significantly.

# 1.3 Solix EDMS Data Masking Standard Edition (SE)

Solix EDMS Data Masking Standard Edition (SE) ensures data security and compliance by masking sensitive data in test databases using several masking algorithms. At the same time, the referential integrity of the data is maintained to keep the application testing process seamless.

# 1.3.1 Benefits of Solix EDMS Data Masking Standard Edition (SE)

- Supports compliance with privacy legislation & policies.
- Increases protection against data theft.
- Access to data can be regulated based on user types. (For example, internal users and external users).
- Provides realistic data for testing, development, training, outsourcing, data mining/research, etc.
- Enables off-site and cross-border software development and data sharing.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 4
---
# Solix EDMS Standard Edition (SE) 2.2

Provides ability to secure the confidential and sensitive data in organizations based on standard compliance.

Enables to preview the sample of masked data before masking the original data existing in the database during execution.

Provides feasibility to view the data in the table before and after the data masking process.

# 1.4 Solix EDMS Data Validation Standard Edition (SE)

Data warehouses are usually built on multi-tier architectures with multiple data extraction and insertion jobs between two databases. The nature of data changes when they pass from one tier to another. Data Validation is a process of comparing records across different databases to ensure that the data is consistent.

# 1.4.1 Purpose of Solix EDMS Data Validation Standard Edition (SE)

While extracting data from one database and loading it to another, the nature of data can change considerably. Also, some data may be lost during this transition. In such cases, the validation process helps to identify the loss or changes.

The major reason for data loss can be failures or errors that occur during loading the data. Errors can occur due to several reasons such as:

- Inconsistent data in the source
- Non-integrating data among different sources
- Unclean/ non-profiled data
- Technical failures like loss of connectivity, loss over network, space issue etc.

Any failure that occurs due to such issues can result in potential data loss and lead to unreliable data quality.

Current version of Solix EDMS Standard Edition (SE) supports Oracle Database (9i, 10g, and 11g), SQL Server (2005 and 2008) and Sybase ASE (15.5). Solix EDMS Standard Edition (SE) does not support special data types such as 'BLOB','CLOB','LONG','LONG RAW', 'RAW', 'BFILE', 'XML', 'IMAGE', 'BINARY', 'VARBINARY', 'BIT', 'BINARY_FLOAT', 'BINARY_DOUBLE', 'NCLOB', 'TEXT', 'NTEXT', 'UNITEXT' etc.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 5
---
# Solix EDMS Standard Edition (SE) 2.2

# Getting Started

In order to access Solix EDMS Standard Edition (SE), enter the respective URL = :9090/edms/">http://<ip address>:9090/edms/ in the address bar. The Login screen for initiating the authentication process will be displayed as shown in the figure below:

SOLIX

Enterprise Data

Standard Edition

2.2

Empowering Data Management Suite

User Name

Password

Remember me

Login

Forgot Password? Enter your E-Mail Address

Get Password

Solix Technologies

All rights reserved

To login to the application, enter the authenticated user name and password provided by the Solix Delivery team.

For example,

User Name: ADMIN

Password: ADMIN

1. Click Login to access Solix EDMS (Standard Edition)
2. On successful login, the Solix EDMS Standard Edition (SE) home screen appears as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 6
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# SOLIX

# Enterprise Data Management Suite

# Standard Edition 2.2

- Home
- ADHIN
- Help
- Support
- Log Out

# Data Validation

# Data Masking

# Data Archiving

# Data Assessment

# Schedule

# Status

# DATA MASKING

Solix EDMS Data Masking scrambles effectively encrypts, masks sensitive data in the test databases while ensuring data format remains valid for testing purposes. It ensures data security and helps meet compliance requirements per the Payment Card Industry (PCI) and Protected Health Information (PHI) guidelines.

Launch Data Masking Wizard

# DATA ASSESSMENT

Solix EDMS Database Assessment Standard Edition (SE) plays a significant role to archive eligible data in given database based on specific criteria.

This tool also provides the flexibility to assess the data growth at both table and database level and forecast database growth through graphical representation.

# DATA VALIDATION

Solix EDMS Data Validation is a simple solution that helps you check integrity and accuracy of your data. The tool can validate various types of data including characters, numbers, dates, etc. and can be used effectively to validate and reconcile the data copy with the source.

Launch Data Validation Wizard

# DATABASE ARCHIVING

Solix EDMS Database Archiving Standard Edition (SE) provides platform to move inactive data into long-term retention. The archived data consists of historical data that is important and necessary for future reference and must be retained for regulatory compliance.

Launch Data Archiving Configurator

# Forgot Password

Forgot Password feature allows the user to receive a new password. To retrieve the password:

1. In login page, enter the user name in the User Name text field.
2. Enter E-mail address (i.e., the email-id provided while creating new user) in the Forgot password? Enter your E-mail Address and your User Name text box. Once the email address is entered, the system will validate both user name and email.
3. Click Get Password button. The “MAIL IS SENT WITH CHANGED PASSWORD” message will be prompted.

If the entry is valid, the system will generate a new password and it will be mailed to the specified email address.

# Change Password

The default User ID and password provided by Solix Technologies logs the user in as an Admin user.

To change password:

1. Login to the Solix EDMS Standard Edition (SE) using the authenticated user name and password.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 7
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

2. When user wants to change the password for the first time, it is mandatory to change the default email-id provided by Solix in order to send new password to the email-id specified by the user. To change user email-id,

1. Navigate to the following path: Admin > Manage Users & Roles > Users. The User screen will be displayed.
2. Select radio button adjacent to Admin and click Edit button. The User Details screen with the information associated to admin user will be displayed as shown in the figure below.
|User Details|User Details|
|---|
|First Name|Last Name|
|Admin|User|
|Phone|Email|
|+1-388467-6549|suppont colifon|
|Login Name|Enter user's email_id|
|Start Date|End Date|
|201200302| |
|Custom Name|Solix Technologies|
|Notes|Description|
|Touhave|1020 characters remaining|
|Save Back|Save Back|
3. Enter email-id of the user in the Email text box.
4. Click Save button, to update the user information.

3. Once email_id of the user is changed, click on Role (by default-ADMIN) which appears at the top right corner of screen as shown in the figure below.

|ADMIN|Help|
|---|---|
|Role|ADMIN|
|Knowledge|Oracle|
|Lozin|2012-07-05 14.21:16.923|
|Audit| |
|Switch Profile|Select one|
|Primary Role|Reitesh|
|Change Password|Change Password|

4. In Role Popup window, click Change Password hyperlink to change the password. The Change Password pop-up window will be displayed as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 8
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# EDMS Change Password

# Change Password

|Old Password|New Password|Confirm Password|Email|
|---|---|---|---|
|Enter current password in the Old Password text field.|Enter current password in the Old Password text field.|Enter current password in the Old Password text field.|Enter current password in the Old Password text field.|
|Enter the new password in the New Password text field.|Enter the new password in the New Password text field.|Enter the new password in the New Password text field.|Enter the new password in the New Password text field.|
|Re-enter the new password in the Confirm Password text field.|Re-enter the new password in the Confirm Password text field.|Re-enter the new password in the Confirm Password text field.|Re-enter the new password in the Confirm Password text field.|
|Enter the email-id of the user in the Email text field to send the confirmation mail.|Enter the email-id of the user in the Email text field to send the confirmation mail.|Enter the email-id of the user in the Email text field to send the confirmation mail.|Enter the email-id of the user in the Email text field to send the confirmation mail.|
|Click Change Password button. A message stating that “Password is changed successfully” appears and the confirmation message would be sent to the email address specified by the user.|Click Change Password button. A message stating that “Password is changed successfully” appears and the confirmation message would be sent to the email address specified by the user.|Click Change Password button. A message stating that “Password is changed successfully” appears and the confirmation message would be sent to the email address specified by the user.|Click Change Password button. A message stating that “Password is changed successfully” appears and the confirmation message would be sent to the email address specified by the user.|

The fields marked as are mandatory fields.

It is mandatory to enter the email address of the user in the User Details screen only when the password is changed for the first time.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 9
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 3 Data Assessment Process using Wizard

Solix EDMS Data Assessment Standard Edition (SE) Wizard is designed to provide an intuitive user friendly environment. The user is led through a step-by-step process to perform all the activities required to accomplish the data assessment efficiently.

This section outlines the procedure to perform four types of data assessment that differs at procedural level.

SOLIX

Enterprise Data Management Suite Standard Edition 2.2

Home ADHIN Help Support Log Out

# Data Validation

# Data Masking

# Data Archiving

# Data Assessment

Schedule Status

# DATA MASKING

Solix EDMS Data Masking scrambles effectively encrypts, masks sensitive data in the test databases while ensuring data format remains valid for testing purposes. This tool also helps meet compliance requirements per the Payment Card Industry (PCI) and Protected Health Information (PHI) guidelines.

Launch Data Masking Wizard

# DATA VALIDATION

Solix EDMS Data Validation is a simple solution that helps you check integrity and accuracy of your data. The tool can validate various types of data including characters, numbers, dates, etc. and can be used effectively to validate and reconcile the data copy with the source.

Launch Data Validation Wizard

# DATABASE ARCHIVING

Solix EDMS Database Archiving Standard Edition (SE) provides a platform to move inactive data into a separate tier for long-term retention. The archived data consists of historical data that is important and necessary for future reference and must be retained for regulatory compliance.

Launch Data Archiving Configurator

To initiate the data assessment, in Solix EDMS Standard Edition (SE) home page, click Launch Data Assessment Wizard button in the Data Assessment section or Navigate to the Data Assessment >> Launch Data Assessment Wizard. By default, the Data Assessment initial screen will be displayed which shows the four types of data assessment that can be carried out through the wizard.

# Data Assessment

Solix EDMS Database Assessment provides the snapshot of database size, helps to identify the archive eligible data (i.e inactive data) in the database based on specific criteria and retention policies. It provides the flexibility to assess the data growth at both table and database level and provides forecast for future growth.

Note: We recommend data assessment to be executed on recent clones of production database for better output and prediction of future database growth.

# Database Size Snapshot

Snapshot of data distribution in schemas, Top N tables and database size.

# Archive Eligibility

Archive eligibility at Table level & Object level:

# Data Growth Forecast

Data growth forecast at both the Table Level and Database Level.

# Assessment Summary

Consolidated summary of data assessments accomplished on the database.

Data Assessment screen provides feasibility to opt for the required assessment type of data assessment to be carried out in the data assessment successfully.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 10
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# The four assessment types shown in the wizard are given below.

- Database Size Snapshot
- Archive Eligibility
- Table Level Archive Eligibility
- Object Level Archive Eligibility
- Data Growth Forecast
- Table Level Forecast
- Data Growth Database Forecast
- Assessment Summary

In Data Growth Forecast, some statistical regression method is performed based on the current data in the database. The database growth forecasted is an assumption so it may vary according to the business conditions. We recommend the data assessment to be executed on recent clones of production database or production database for better output and prediction of future database growth.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 11
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 3.1 Database Size Snapshot

Database Size Snapshot shows a graphical presentation that enables to understand the current database size and space distribution among schemas in the database by providing the snapshot of database size. Database Size Snapshot helps to identify the data distributed among different schemas in the database, space occupied by the each schema, identify the top tables based on the table size that occupied more space in the database.

# Benefits of Database Size Snapshot:

- Helps to identify the top N tables in the database.
- Ease to view the schema that contains major growth size in the database by identifying the schema which has occupied more space in the database.

# Data Assessment for Database Size Snapshot

Once Database Size Snapshot is selected in the Data Assessment screen, by default, the Data Assessment Wizard initial screen will display that shows the summary of each step designed to accomplish the data assessment successfully.

This section outlines the procedure to setup a connection, and then create data assessment for the database size snapshots.

# Data Assessment

Data Assessment Wizard enables the user to run the data assessment process with ease of following steps:

1. SETUP DATABASE CONNECTION
2. Create or Edit database connection which will be used as source database while data assessment process:
3. CREATE DATABASE SIZE SNAPSHOT ASSESSMENT
4. Register Database Schemas and tables for Assessment.

To initiate the data assessment and navigate to the first step in the wizard, click Next button.

# 3.1.1 Setup Database Connection

The user needs to configure the database connection to establish the connectivity to the database in to perform the data assessment. This section describes the process to configure the connection details in order to connect to the database.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 12
---
# Solix EDMS Standard Edition (SE) 2.2

# Data Assessment Launch

# Data Assessment Wizard

|Connection Name|Type|Machine Name|Host Name/IP Address|Database|Instance Name|
|---|---|---|---|---|---|
|PK_RC-Q4|URCE| |152.241|Oraoa| |
|QASIDREL|TARGET|QASIDIREL|10.2.152.241|Oraoa| |
|QA5IDIREL-Q4|Create Like|TARGET|QASIDIREL|10.2.152.241|Orad|
|QA6D-QA|{OURCE|94241|10.2.152.241|Oraoa| |
|SYBAE MAJID-Pubs2|URCE| |10.2.152.42|Sybase AE|Pubi2|
|VIS_APPS|JOURCE|VIS-25 -APFS|10.2.152.251|Orache| |

To setup the database connection for data assessment, do the following:

1. In Data Assessment Wizard initial screen, click Next button. By default, the
Setup Database Connection screen with the list of existing database
connections will display and enables to create or create a replica of connection or
edit connections.
If the required database connection already exists, then the user can navigate
to the next step by selecting the required database connection and click Next
button.
2. To create a new database connection, do the following:
1. Click Add button (or) Hover on any existing database connection, the
three links (Create Like, New and Edit) will appear to create or edit the
database connection.
- Create Like – enables the user to create a replica of the selected
database connection. The same connections details are maintained.
It is recommended to define a new name for the database
connection.
- Create - enables the user to create a new database connection.
- Edit - enables the user to edit the details of an existing database
connection.
2. The Setup Database Connection popup window is displayed. A new
database connection can be created here as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 13
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Setup Database Connection

# Setup Database Connection

# Help

|Name|Type|
|---|---|
|Machine Name|Host Name/IP Address|
|Catataze|Instance Name|
|Select One|Catabaze User|
|Catabaze Port Number|Table Owner Schema Name|

1. Enter the name of the database connection in the Name text field.
2. Select an appropriate datasource type from the Type drop down list and designate the database as a source or target.
3. Enter the database server name associated to the data source in the Machine Name text field.
4. Enter the host name/ IP address associated to the database server in the Host Name/ IP Address text field.
5. Select the database which is compatible to the data source from the Database (such as Oracle, Demo database) drop down list.
6. Enter the instance name/service name of the database in the Instance Name text field.
7. Enter the login user name of the database in Database User text field.
8. Enter the password corresponding to the username of the database in Database Password text field.
9. Enter the port number of the database in the Database Port Number field.
10. Enter the Table Owner or Schema Name database in the Table Owner / Schema Name field, to assess the data associated to the selected table owner or schema.
11. Enter the comments in the Description text box.
12. Click Save button. Once the database connection details are saved successfully, a confirmation message is prompted in the Setup Database Connection screen.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 14
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

The fields marked as | are mandatory fields. Ensure that the specified databases are accessible and running. To navigate to Setup Database Connection wizard screen from the Setup Database Connection popup window, click Cancel button. To understand the functionality of each field in the Setup Database Connection popup window, refer to the table given below.

|Fields|Functionality|
|---|---|
|Name|Define the name of the database connection.|
| |Drop down list to designate the datasource as Source / Target.|
|Type|For example, if “Source” is selected, then the datasource is considered as Source database.|
|Machine Name|Enter the name of the database server associated to the datasource. It is necessary to setup a database connection.|
|Host Name/IP Address|Enter the Host Name/IP Address of the database server.|
|Database|Displays a list of supported databases and allows the user to select the database compatible to the datasource.|
|Instance name|Define the instance name of the database such as SID or Service Name.|
|Database User|Enter the user credentials (i.e., Username) required to connect to the database.|
|Database password|Enter the password corresponding to the Database User in order to connect to the database.|
|Database Port Number|Enter the Port number of the database server to establish the database connection.|
|Table Owner / Schema Name|Enter the table owner or scheme existing in the database, to assess the data associated to the selected table owner or schema.|
|Notes|It facilitates the user to enter the description associated with the database connection.|
| |Used to verify whether the connection details provided are valid and whether the connection to the database can be established based on the specified details.|
|Test Connection|If the details provided are valid, the database connectivity will be established and saved. If the given details are invalid, the database connectivity will not be established.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 15
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

connectivity fails and alerts the user to verify the details.

|Save|Used to save the database connection details.|
|---|---|
|Cancel|Used to navigate to the Setup Database Connection screen|

# 3.1.1.1 Create Like, Editing or Testing the database connections

Test Connection feature is designed to provide feasibility to verify whether the connection details specified during database connection creation are valid. To test the database connection, do the following:

1. In Setup Database Connection screen, hover on the database connection that needs to be verified. The three links (Create Like, Create and Edit) will appear beneath the database connection.
2. Click Create Like or Edit button, to verify the connection details of the database connection. The Setup Database Connection popup window is prompted to edit/create a replica of the database connection as shown in the figure below.

# Setup Database Connection

|Hame|Tpe| |
|---|---|---|
|Demo_ Source|SOURCE| |
|Machin Mame|Host Mlame|Eddres&lt;|
|Demo_Source_Host|localhost| |
|Database|InstanceMame| |
|Demo Database|sample source| |
|DatabaseUse|Databas Passtord| |
|DEMO| | |
|DatabasePort Mumbel|535| |
|escrintion| | |

Once the database connection details are saved successfully, in order to test the connection to the database based on the given details, click Test Connection button.

If the database is connected successfully, a message stating the successful connection to the database will be prompted.

If the database connection fails, an alert message to verify the given connection details will be prompted.

Test Connection
Save
Cancel

The fields marked as | are mandatory fields.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 16
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

To create a replica of database, click on Create Like link. In Setup Database Connection, modify the name of the database connection in the Name text field.

# 3.1.2 Create Database Size Snapshot Assessment

Once the database connection setup is completed successfully, the user needs to create a data assessment and execute it to perform data assessment effectively.

To create database size snapshot, do the following:

1. In Setup Database Connection screen, select the intended database connection and click Next button to navigate to the second step. The Create Database Size snapshot & Save & Run screen will be displayed as shown in the figure below.

|Setup Database Connection|Create Database Size snapshot & Save|Run| |
|---|---|---|---|
|Assessment Name|Daa Scurce|seect One| |
|Assessment Value|Database Size|Schema Size|Top N tables|
|Description|You have 1000 characters remaining|You have 1000 characters remaining| | |
|< Back|Save|Save|Run|

Enter the name of the data assessment in the Assessment Name text field.
Select the appropriate database from the Data Source drop down list, to run the data assessment.
By default, Database Size snapshot will be prompted in the Assessment Type drop down list. It is a non-editable text field.
Select the required check box based on the requirement.
- Database Size: this check box enables to assess the data for eligible archive data based on size of the selected database and displayed in the pictorial representation.
- Schema Size: this check box enables to assess the data for eligible archive data according to the data distributed in each schema existing in database selected and summarizes the eligible archive data in the pictorial representation.
- Top N Table: This check box enables to assess the data based on the size of the Top N tables. Here, “N” implies the number of tables.

Enter the value adjacent to the Top N tables check box, to pull up the data of given number of top tables in the databases for data assessment.
Click Save button, to save the data assessment.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 17
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

8. Click Save & Run button, to save and execute the data assessment. A unique Run-ID will be generated and displayed in the Run Schedule screen. To monitor the status of the data assessment, click on Run ID to navigate to the Status Monitor screen. (Status > Status Monitor).

The field marked as | are mandatory fields.

Click Edit button, to modify the data assessment.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 18
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 3.2 Archive Eligibility

Archive Eligibility enables to identify the archive eligible data at both table level and Objects level. This feature provides the feasibility to perform the assessment on tables based on the date column. Once retention policy is applied, the data found within the retention policy duration till the current date is considered as an active data (i.e., non-eligible archive data) and rest of the data is considered as an inactive data (i.e., eligible archive data).

For example,

If Retention policy duration is “3 years” and current date is “01/01/2014”, then the data found between “01/01/2011” is considered as “Active data”. Whereas, the data beyond 01/01/2011 is considered as “Inactive data”.

When a simple criterion is designed on the date column, it is applicable based on the dynamic date value provided by the user.

For example,

Suppose, the dynamic date provided by the user is “18/7/2013”, then the data found from “18/7/2013” till current date is considered as “Active data”. Whereas, the data beyond “18/7/2013” is considered as “Inactive data”.

# Data Assessment for Archive Eligibility

Once Archive Eligibility option is selected in the Data Assessment screen, Table Level Archive Eligibility and Objects Level Archive Eligibility radio button will be populated as shown in the figure below.

# Data Assessment

Solix EDMS Database Assessment provides the snapshot of database size, helps to identify the archive eligible data (i.e inactive data) in the database based on specific criteria and retention policies and provides forecast for future growth.

Note: We recommend data assessment to be executed on recent clones of production database or production database for better output and prediction of future database growth:

# Database Size SnapShot

Snapshot of data distribution in schemas; Top N tables and database size

# Archive Eligibility

Archive eligibility at Table level & Object level:

- Table Level Archive Eligibility: Table level archive eligible data in top tables by applying retention policy or simple criteria.
- Object Level Archive Eligibility: Object level archive eligible data considering tables, relations, joins complex business criteria and applying retention policies.

# Data Growth Forecast

Data growth forecast at both the Table Level and Database Level.

# Assessment Summary

Consolidated summary of data assessments accomplished on the database;

Next >

Archive Eligibility contains two different methods Table Level Archive Eligibility and Objects Level Archive Eligibility, to provide the flexibility to the user to assess the data in the database and identify the active or inactive data available in the tables or tables in the Objects.

provides the flexibility to assess the data growth at both table and database level

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 19
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Make sure that the Database Snapshot must executed at least once.

# 3.2.1 Table Level Archive Eligibility

This option enables to identify the archive eligible data existing in the selected top tables based on the retention policy or simple criteria.

# Benefits of Table level Archive Eligibility:

- Helps to identify the archive eligible data in the selected top tables based on the retention policy or simple criteria.
- Provides the user control to view the archive eligible data in the database.
- Provides the flexibility to create a retention policy during the data assessment process within the wizard.
- Helps to load the top tables from the database snapshot and identify the active or inactive data from those top tables as well.
- Ease to identify the inactive or active data existing in the top tables so that the inactive data can be archived and reduce the occupied space in the database that helps improves the performance.

# Data Assessment for Table Level Archive Eligibility

Once Table Level Archive Eligibility option is selected in the Data Assessment screen, by default, the Data Assessment Wizard initial screen will be displayed which shows the summary of each step designed to accomplish the data assessment successfully.

This section outlines the procedure to setup a connection, select top tables (i.e., tables with more size), assign retention policy and then saves & run the data assessment to identify the archive eligible data in the selected top tables.

# Data Assessment > Data Assessment Wizard

Data Assessment Wizard enables the user to run the data assessment process with ease of following steps:

- SETUP DATABASE CONNECTION
- Create or Edit a database connection which will be used as source database while data assessment process
- CREATE TABLE LIST
- Register new tables from selected data source
- ASSIGN DATA RETENTION POLICY [CRITERIA & SAVE/RUN]

STEP: Setup data retention policy/criteria on selected tables and columns

Back      Next >>

Solix EDMS Data Assessment Standard Edition (SE) Wizard provides feasibility to identify the eligible archive data in the top tables with ease of three steps given below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 20
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Setup Database Connection
2. Create Table List
3. Assign Data Retention Policy /Criteria & Save /Run

# 3.2.1.1 Setup Database Connection

Refer to section 3.1.1, for Setup Database Connection

# 3.2.1.2 Create Tables List

Once the database connection setup is completed successfully, the user needs to select tables from the database to perform data assessment on the top tables effectively.

To create tables list, do the following:

1. In Setup Database Connection screen, select the intended database connection and click Next button to navigate to the second step. The Create Tables List screen will be displayed as shown in the figure below.
2. Enter the name of the data assessment in the Assessment Name text field.
3. Select the appropriate database from the Data Source drop down list, to run the database assessment.
- If Database Snapshot assessment is already executed for the selected data source, then “Load top tables from previous Database Snapshot” checkbox will populate in the Create Tables screen. It enables to load all the top tables from the previous Database Snapshot assessment.
4. By default, the schema(s) exist in the database will populate with the corresponding schema size in the Schema Names pane.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 21
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 3.2.1.3 Assign Data Retention Policy /Criteria & Save /Run

Once the top tables are selected for the data assessment successfully, next step the user needs to assign data retention policy and run the data assessment.

To assign data retention policy and execute, do the following:

1. In the Create Tables List screen, select the tables and click Next button to navigate to the third step. The Create Column List And Assign Data

# 5. Select the required schema in the Schema Names pane.

Once schema is selected, all the tables associated to the schema will populate with corresponding table size in the Tables List pane. (Note: tables are displayed in the descending order according to the table size).

# 6. Select the tables from the Tables list,

to run data assessment on the selected top tables and identify the archive eligible data from the selected top tables.

# 7. Once the tables are selected,

it is appended automatically in the Selected Tables pane and also shows the total table size of the selected tables as shown in the figure below.

| |Tabletnt| |elected vables| |
|---|---|---|---|---|
| | |L437|GLGL_LNES|1,194.19175|
|M1196|5|4| | |
|1545017|FRLLLD D242| |XLXLTRAL_EALAACES|333.97383|
|14,4C6.12|PRASAD_DC43|91050|11.74738| |
| |FCa_POC_uZ_|40| | |
| |FCA_POD_Ool_Mv|4076| | |

# 8. Select table name created and click Next button to proceed with further step.

The field marked as | are mandatory fields.

Magnifying icon helps to search for required schema or tables from the corresponding list or filter.

Click Back button, to go back to previous step.

To remove table from the list, Click ‘X’ Remove button adjacent to the selected table.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 22
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Retention Policy/Criteria & Save Run screen will be displayed as shown in the figure below.

|Selup Dalabai Culuiecliom|CrEale Tables LIst|
|---|---|
|~rncioboscdorcstton|Gcct Onc|
|sha" NullabeDae [olunre|PK_Fosint_A|
|RESULTS_I00ou6|Sciatad tablc NM€ columm|
|EDRS_RESULTS_IOCo8}|Selented tabl|
|EDRS_RESULTS 10C0BZ|Sclelected [able LIltt= Coluinit|
|ECRECKS_-D'ICES|Parmentdee|
|Selected (oble has|Selected (oble has|
|Save& Run|Save& Run|

# 2. Select the required assessment option from the Select Assessment Mode.

Policy based assessment: this option enable to apply the retention policy on the selected tables and identify the archive eligible data existing in the tables are assessed for the duration specified in the retention policy. It also provides the flexibility to create the policy for the data assessment from this screen. This policy is applied on the “Date” columns selected from the Data Column drop down adjacent to the required tables. (Note: the Data Column drop down display the date columns existing in the corresponding table.)

For example, If Retention policy duration is “3 years” and current date is “01/01/2014”, then the data found between “01/01/2011” is considered as “Active data”. Whereas, the data beyond 01/01/2011 is considered as “Inactive data”.

Criteria based assessment: this option enable to run the assessment based on the criteria specified and identify the archive eligible data existing in the tables are assessed until the date specified in the Criteria value text field.

For example, Suppose, the dynamic date provided by the user is “18/7/2013”, then the data found from “18/7/2013” till current date is considered as “Active data”. Whereas, the data beyond “18/7/2013” is considered as “Inactive data”.

# 3. To apply retention policy on the data assessment,

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 23
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Select the Policy based assessment from the Select Assessment Mode.
2. Select the intended policy from the Policy Name drop down list, to apply selected assessment policy on the data assessment.
To define a new policy, click Add Policy button. The Add Policy screen appears.

# Add Policy

|Policy Name|Policy Owner|Policy Period|Period Type|Category|Sub Category|
|---|---|---|---|---|---|
|Enter the policy name in the Policy Name text field.|Enter the owner of the policy in the Policy Owner text field.|Enter the duration of policy in the Policy Period text field.|Select the appropriate type of duration from the Period Type drop down list.|Select One|Gave|
|Based on the Policy Type selected, the Policy Period will be calculated in Years/Month/Days. For example, if Policy Period is “6” and Policy Type is “Months”, then it is stated as duration of policy is 6 months.| | | | | |
|Years – This option indicates that the policy period is calculated in years.| | | | | |
|Months – This option indicates that the policy period is calculated in months.| | | | | |
|Weeks - This option indicates that the policy period is calculated in weeks.| | | | | |
|Days - This option indicates that the policy period is calculated in days.| | | | | |

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 24
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Select the intended sub category from the Sub Category drop down list.
2. Click Save button. Once the data assessment policy is saved successfully, the data assessment policy will automatically populate and appears at the top of the list in the Policy Name drop down.
3. To populate the nullable date columns in the Data Column drop down, then select Show Nullable Date Columns check box.
4. Select the date column from the Data Column drop down adjacent to the required tables, to apply retention policy.
(Note: the Data Column drop down will display the date columns existing in the corresponding table.)

# 4. To apply criteria on the data assessment,

1. Select Criteria based assessment from the Select Assessment Mode.
2. Enter the required date in the Criteria Value text fields, to run the assessment on the tables until the specified date.

# Assessment Run Parameters Details

|Example Format:|30-Sep-2014|30-Sep-2014|
|---|---|---|
|Selected table has date/Un = columns|EDRS_RESULTS_10008|Selected table has|
|EDRS_RESULTS_1000dg|EDRS_RESULTS_100082|PBMendae JejelmenciNuIInde' no[ave|
|EDRS_TGT_ICOD3| | |

Click Save button, to save the data assessment.

Click Save & Run button, to save and execute the data assessment. A unique Run-ID will be generated and displayed in the Run Schedule screen. To monitor the status of the data assessment, click on Run ID to navigate to the Status Monitor screen.
(Status > Status Monitor).

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 25
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Once the data assessment policy is assigned successfully, in case, the respective data assessment is set for execution the Solix EDMS Standard Edition (SE) will check whether any policies are applied on the data assessment or not. If policy is applied, then the execution of data assessment will be carried out according to the policy criteria defined.

The field marked as are mandatory fields. Click Back button, to go back to previous step.

# 3.2.2 Object Level Archive Eligibility

This option enables to identify the archive eligible data by defining tables, joins, tables relation based on the complex business compliances and applying the retention policy.

# Benefits of Object level Archive Eligibility:

- Helps to identify the archive eligible data in the selected top tables of an Object based on the retention policy and complex business regulatory.
- Ease to identify the inactive or active data existing in the top tables of Object in the database so that the inactive data can be archived and reduce the occupied space in the database that helps improve the performance.

# Data Assessment for Object Level Archive Eligibility

Once Object Level Archive Eligibility option is selected in the Data Assessment screen, by default, the Data Assessment Wizard initial screen will be displayed which shows the summary of each step designed to accomplish the data assessment successfully.

This section outlines the procedure to setup a connection, select top tables (i.e., tables with more size), create table relations and joins, create table criteria and assign retention policy and then saves & run the data assessment to identify the archive eligible data in the database.

# Data Assessment Wizard

Data Assessment Wizard enables the user to run the data assessment process with ease of following steps:

|STEP|DESCRIPTION|
|---|---|
|SETUP DATABASE CONNECTION|Create or Edit database connection which will be used as source database while data assessment process.|
|CREATE TABLES LIST|Register new tables from selected data source.|
|CREATE TABLE RELATIONS AND JOINS|Setup relations and joins on selected tables.|
|CREATE TABLE CRITERIA|Setup criteria on selected tables and columns.|
|ASSIGN DATA RETENTION POLICY & RUN|Setup data retention policy, save & run the data assessment.|

Back Next >

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 26
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Solix EDMS Data Assessment Standard Edition (SE) Wizard provides feasibility to identify the eligible archive data in the database with ease of five steps given below.

1. Setup Database Connection
2. Create Table List
3. Create Table Relations and Joins
4. Create Table Criteria
5. Assign Data Retention Policy & Run

# 3.2.2.1 Setup Database Connection

Refer to section 3.1.1, for Setup Database Connection

# 3.2.2.2 Create Tables List

Once the database connection setup is completed successfully, the user needs to select tables from the database to perform Object wise data assessment effectively.

To create tables list, do the following:

1. In Setup Database Connection screen, select the intended database connection and click Next button to navigate to the second step. The Create Tables List screen will be displayed as shown in the figure below.

Setup Database Connection
Create Tables List
Create Table Relations and Joins
Create Table Criteria

Assessment Name

Daa Source

select One

Assessment Type

Assessment Sub Type

Object Level Archive Eligibility

select One

Description

You have - 000 characters remaining in your notes

3&lt; Back &gt; Next &gt;&gt;

Enter the name of the data assessment in the Assessment Name text field.
Select the appropriate database from the Data Source drop down list, to assess the eligible archived data object wise from the selected database.
By default, Object Level Archive Eligibility will be prompted in the Assessment Type drop down list. It is a non-editable text field.
Select New Object / Use Existing object from the Assessment Sub Type drop down list. Based on the option selected, the fields prompted will differ.
If New Object option is selected, enter the description and click Save button. Next,

Assign Data Retention Policy & Run

Help

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 27
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Based on the database selected, the corresponding schemas/table owners will be listed in the Table Owner drop down list.
2. Select a schema/table owner from the Table Owner drop down list. Based on the schema/table owner selected, the corresponding tables will be listed in the Table Name drop down list.
3. Select the intended table from the Table Name drop down list.
4. Select Yes/No option of Driving Table, whether to define the selected table as Driving table or not. (Note: Make sure, at least one table should be a driving table in data assessment table).
5. Click Add button, to save and append the selected table information to the list. Once the information is saved successfully, a message stating “New Table Saved Successfully” is prompted on the screen and the respective table information will be appended to the list.

|Table Cune| |Table Name| | |
|---|---|---|---|---|
|A45_ABD| |Select One-| | |
|Driving Table*|Table Name|Table Owner|Module Name|Driving Table|
|ConFIG_CRITERIA|JJ45_ABD|444| | |

If Use Existing object option is selected, additionally, the Config Name drop down and Populate button will be prompted in the screen.
1. The configuration designed for data archiving will be pulled up and displayed in the Config Name drop down. Hence, select the required configuration from the drop down.
2. Click Populate button, to populate the tables, columns, relations, joins, criteria, generated code existing in the selected configuration for the data assessment.
3. A confirmation message stating “Config details populated successfully.” will be prompted in the screen and the respective table information will be appended to the list.

The field marked as | are mandatory fields.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 28
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Click Edit button, to modify the data assessment. To remove table from the list, Click Remove button.

# 3.2.2.3 Create Table Relations and Joins

Once the tables are created for the data assessment successfully, next step the user needs to build the relation and joins among the between tables added in the data assessment, to fetch the data for data assessment effectively.

To build the relation, do the following:

1. In Create Tables List screen, select the intended database connection and click Next button to navigate to the third step. The Create Tables Relations and Joins screen will be displayed as shown in the figure below.

| |Setup Database Connection|Create Tables List|Create Table Relations and Joins|Create Table|Assign Data Retention Policy & Criteria|Run|Help| | | | |
|---|---|---|---|---|---|---|---|---|---|---|---|
|Table Name|~Select One| | |Relational Table|Add|Table Name|Table Owner|Parent Table Name|Parent Table Owner|Relational Table Relation Type|Joins Exist|
|< Back Next >| | | | | | | | | | | |

Select the table from the Table Name drop down.
Select the parent table (i.e., driving table) from the Parent Table Name drop down.
Select Yes/No option in the Relational Table, whether to create a relation tables or not.
Click Add button. A confirmation message stating “Assessment Table Relation is Saved” will be prompted in the screen.
Once table relation is saved, then create joins in the relation. Hover on the table name appears in the list box.
Then, click on Joins hyperlink appears beneath the table name. The Join Columns Details popup screen will be prompted as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 29
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Join Columns Details

|Join Seq No|Column Name|Parent Column Name|
|---|---|---|
|Select One|Select One| |
|Column Name|Parent Column Name|Sequence No|
|DEPTNO|DEPTNO| |

a. Enter the sequence number of the join in the Join Seq. No text box.

b. Select the primary key column from Column Name and Parent Column Name drop down.

c. Click Add button. Repeat the process to add join in the data assessment table.

d. Once the Data Assessment Table Join is saved, click Close button.

8. Select table relation created and click Next button to proceed with further step.

Click Back button, to navigate to the previous screen.

The field marked as | are mandatory fields.

To remove table relations from the list, click Remove button.

# Create Table Criteria

Once the table relations and joins are built among the tables in the data assessment successfully, next step the user needs to create table criteria.

To create table criteria, do the following:

1. In Create Tables Relations and Joins screen, select the intended database connection and click Next button to navigate to the forth step. The Create Table Criteria screen will be displayed as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 30
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Setup Database Connection

# Create Tables List

# Create Table Relations and Joins

# Create Table Criteria

# Assign Data Retention Policy

# Run

# Help

|Criteria Name|Criteria Type|
|---|---|
|cpfTNnf| |

# Criteria Name

# Criteria Type

paa
Dependent

# Table Name

# Column Name

Select One
Select One

# Join Type

# Operator

Select One
Select One

# Parameter Mandatory

# Link Criteria

# Sequence No.

Select One

# Description

You have 1000 characters remaining for your notes

1. Enter name of criteria in the Criteria Name text box.
2. Select an appropriate type of criteria from the Criteria Type drop down list. Based on the type of criteria selected, the fields prompted in the screen will vary as shown in the figure below.
3. Enter the criteria details in the corresponding fields.
4. Click Save button to save the data assessment criteria. Once the criteria are saved successfully, a message will be prompted on the screen.
5. Select table created and click Next button to proceed with further step.

The field marked as | are mandatory fields.

Click Back button, go back to the previous screen.

Click Edit button, to modify the given criteria details.

To remove table criteria, click Remove button.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 31
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Assessment Criteria Details

|Fields|Functionality|
|---|---|
|Criteria Name|Define a name for the criteria in Data assessment.|
|This drop down enables the user to select an appropriate type of criteria. The criteria type can be Static, Dependent and Independent.|This drop down enables the user to select an appropriate type of criteria. The criteria type can be Static, Dependent and Independent.|
|Static: It implies that the Data assessment actions will be based on the value specified in Criteria.|Static: It implies that the Data assessment actions will be based on the value specified in Criteria.|
|Dependent: It implies that the criteria designed are dependent on a particular column of the specific table.|Dependent: It implies that the criteria designed are dependent on a particular column of the specific table.|
|Independent: It implies that the criteria are independent of tables and columns associated to specific Data assessment.|Independent: It implies that the criteria are independent of tables and columns associated to specific Data assessment.|
|Table Name|This drop down enables the user to select an appropriate table that holds the attribute value.|
|Column Name|Based on the table selected, the corresponding columns will be listed in this drop down. It enables the user to select the column on which the respective criteria will be applicable.|
|Join Type|This drop down enables the user to select an appropriate operand required for the criteria. (i.e., AND or OR).|
|Operator|This drop down enables the user to select an appropriate conditional operator required to design criteria. (i.e., =, >, <, <= and so on).|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 32
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

This drop down enables the user to define the type of parameter value (i.e., Value or Dependent SQL)

- Value: It implies that the data is fetched based on the value provided in the Value text box.
- Dependent SQL: It implies that the SQL statement will be generated based on dependent variable(s) which may be derived from the earlier parameter(s).

# Value Type

For example,

SELECT ORGANIZATION_ID, ORGANIZATION_NAME FROM ORG_ORGANIZATION_DEFINITIONS where organization name will be displayed at run time parameters for end user ease and organization id will be used in criteria.

- SQL: During the runtime, the SQL statement will be executed and the archiving will be executed based on the value obtained from running the SQL script specified in Value.

This drop down facilitates to select an appropriate data type of the parameter. (i.e., Number, String, Date).

# Data Type

Note: For the “Dependent SQL” and “SQL” value type, “String” should be selected by default.

# Format

If the Data type is “Date”, this text box enables the user to provide the format of date. For example, MM/DD/YYYY.

This drop down enables the user to define the parameter as mandatory or not (i.e., Yes or No).

# Parameter Mandatory

- Yes - it implies that the parameter is mandatory, the value must be entered
- No - it implies that the parameter is not mandatory.

# Sequence No

This text box enables the user to enter the Sequence of Criteria while execution.

Exclusively when “OR” operator is selected in Join, this drop down list enables the user to link the current criteria to this existing criteria and place it in parenthesis during Data Assessment.

# Value

This text enables the user to enter the appropriate value of the parameter according to the Value Type selected.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 33
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Default Value

This text enables the user to enter the default value of the parameter.

# Description

This text box enables the user to enter the description pertaining to the criteria.

# Save

This button is employed to save the criteria details.

# 3.2.2.5 Assign Data Retention Policy & Run

Once the table criteria are defined for the data assessment successfully, next step the user needs to assign data retention policy and run the data assessment. To assign a data retention policy, the user must have created at least one policy for data assessment.

To assign data retention policy and execute, do the following:

1. In Create Table Criteria screen, select the table criteria created and click Next button to navigate to the fifth step. The Assign Data Retention Policy & Run screen will be displayed as shown in the figure below.

# Setup Database Connection

# Create Tables List

# Create Table Relations and Joins

# Create Table Criteria

# Assign Data Assessment Policy - Run

# Help

|Policy Type| |Add Policy| | |
|---|---|---|---|---|
|Policy Name|Assessment Name| | | |
|Select One|Table Name| | | |
|Select One| |Column Name| | |
|Description|You have 1000 characters remaining for Your notes| | | |
|Policy Name|Assessment Name|Table Name|Column Name|Description|
|< Back|Add|Save|Save & Run| |

Select Assessment from the Policy Type drop down list.
Select the intended policy from the Policy Name drop down list, to apply selected assessment policy on the data assessment.

To define a new policy, click Add Policy button. The Add Policy screen appears.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 34
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Enter the policy name in the Policy Name text field.
2. Enter the owner of the policy in the Policy Owner text field.
3. Enter the duration of policy in the Policy Period text field.
4. Select the appropriate type of duration from the Period Type drop down list. Based on the Policy Type selected, the Policy Period will be calculated in Years/Month/Days. For example, if Policy Period is “6” and Policy Type is “Months”, then it is stated as duration of policy is 6 months.
- Years – This option indicates that the policy period is calculated in years.
- Months – This option indicates that the policy period is calculated in months.
- Weeks - This option indicates that the policy period is calculated in weeks.
- Days - This option indicates that the policy period is calculated in days.
5. Select the required category from the Category drop down list. Based on the category selected, the corresponding sub categories will be displayed in the Sub Category drop down list.
6. Select the intended sub category from the Sub Category drop down list.
7. Click Save button. Once the data assessment policy is saved successfully, the data assessment policy will automatically populate and appears at the top of the list in the Policy Name drop down.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 35
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Select the data assessment from the Assessment Name drop down list, to assign the data assessment policy. Once the data assessment is selected, the corresponding tables will be displayed in the Table Name text field.
2. Select the required table from the Table Name drop down list.
3. Select the column intended for data assessment from the Column Name drop down list.
4. Enter the comments in the Notes.
5. Click Add button, to save and append the assign retention policy information in the list. On assignment is saved successfully, a confirmation message will be prompted in the screen and assigned retention policy details will be appended to the list.
6. Click Save button, to save the data assessment.
7. Click Save & Run button, to save and execute the data assessment. A unique Run-ID will be generated and displayed in the Run Schedule screen. To monitor the status of the data assessment, click on Run ID to navigate to the Status Monitor screen. (Status > Status Monitor).

Once the data assessment policy is assigned successfully, in case, the respective data assessment is set for execution the Solix EDMS Standard Edition (SE) will check whether any policies are applied on the data assessment or not. If policy is applied, then the execution of data assessment will be carried out according the policy criteria is defined.

The field marked as | are mandatory fields.

Click Edit button, to modify the data assessment.

To remove data assessment policy assignment, click Remove button.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 36
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 3.3 Data Growth Forecast

Data Growth Forecast perform the statistical analysis on the current data in the selected top table or top N tables and provide the forecast of future table size growth based on table or multiple tables for next 5 years. It also enables to analysis the data growth of business in the database and forecast the future database growth for next 5 years based on recent run or selected top N tables.

Make sure that the Database Snapshot must executed atleast once. The data growth forecast is shown from the date when data assessment is executed to the next 5 years.

# Benefits of Data Growth Forecast:

- Helps to understand the top tables’ growth in size for the next 5 years.
- Helps to understand the database growth based on the top tables’ growth for the next 5 years.
- Provides the flexibility to load the top table from the recent run of database size snapshot and helps to predict the table size growth of those top tables for the next 5 years.
- Helps to understand the strategy to archive the data timely for improving the data storage management.
- Support parallel servers for faster execution of EDMS queries against the source database (only, Oracle database) that helps in consume less time for data retrieval. Solix supports ‘8’ parallel server by default. In case, if user wants to increase the number of parallel servers, then based on the number of parallel servers supported by database the user can increase the parallel server upto 16, 24, 32 and so on.
- Parallel Servers are supported for both Table level forecast and Database level forecast.
- For Database level forecast, the database data is segregated into master data and transactional data percentage that help to predict the future database growth in both archived and non-archived.
- For Table Level Forecast, the master data and transactional data percentage is applicable only when the future database growth is predicted based on the top tables’ growth as shown in the figure below. (i.e., Display Database Growth Forecast based on Top Tables check box is selected in the graph).

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 37
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# SOLIX

# Enterprise Data Management Suite 2.2

DGMT Ececuted 7014-09-2616'44-48

Datakase cme DEV_SRC-SUPR1Z-10.2.152.167

DataBase Type ORACLE

# Data Growth Analyels Summnary For AlI Tablcz

# Data Growth Forecast Parameters

While forecasting the data growth, the user is provided the flexibility to modify the seed data provided by Solix according to the requirement. The Parameter screen (Admin > Manage Source/Target Dictionary> Parameter) enables to modify the parameter value of parameter. Once the parameter value is modified, it reflects the data growth forecast accordingly. The parameters related to Data Growth Forecast Assessment are provided below.

|Parameters|Description|
|---|---|
|MASTER_DATA_INCREMENT_PERCENTAGE|during Data Growth Forecast Assessment Percentage of Master Data Incremental|
|TRANSACTIONAL_DATA_PERCENTAGE|Transactional Data Percentage considered during Data Growth Forecast Assessment|
|PARALLEL_COUNT|Number of parallel servers for faster execution of EDMS queries against the source database during Data Growth Forecast Assessment.|
|ASSESSMENT_DAYS_DIFFERENCE|Minimum number of assessment days difference between two Database Size Snapshot runs for Data Growth analysis.|
|ASSESSMENT_PERCENTAGE_INCREASE|Default Assessment Percentage increase for Data Growth analysis when Database Size Snapshot assessment details does not exist.|
|ASSESSMENT_PROJECTION_YEARS|Number of Assessment Projected years for Data Growth analysis. For example, if parameter value is 10 years, then the data growth is forecasted for next 10 years.|

# ASSESSMENT_FILTERED_VALUE

Provide flexibility to avoid unwanted values in the database for data growth forecast.

- Y – Consider only the filtered values (i.e., eliminate unwanted values) in the database for data growth forecast.
- N – By default, consider all the values in the database for data growth forecast.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 38
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Data Assessment for Data Growth Forecast

Once Data Growth Forecast option is selected in the Data Assessment screen, the Table Level Forecast and Database Level Forecast radio button will be populated as shown in the figure below.

# Data Assessment

Solix EDMS Database Assessment provides the snapshot of database size, helps to identify the archive eligible data (i.e., inactive data) in the database based on specific criteria and retention policies. It also provides the flexibility to assess the data growth at both table and database level and provides forecast for future growth.

Note: We recommend data assessment to be executed on recent clones of production database or production database for better output and prediction of future database growth:

- Database Size Snapshot
- Snapshot of data distribution in schemas, Top N tables and database size.
- Archive Eligibility
- Archive eligibility at Table level & Object level:
- Data Growth Forecast
- Data growth forecast at both the Table Level & Database Level.

# 3.3.1 Table Level Forecast

Table Level Forecast enables the analysis of the data growth based on the multiple top tables data and forecast the future data growth in the business for the next 5 years.

Once Table Level Forecast option is selected, by default, the Data Assessment Wizard initial screen will be displayed which shows the summary of each step designed to accomplish the data assessment successfully.

This section outlines the procedure to setup a database connection, register top tables (i.e., tables with more size) for data growth table level forecasting, register columns (only the date columns of corresponding table will display in the drop down) and then saves & run the data assessment to forecast the database growth based on multiple tables data growth.

# Data Assessment > Data Assessment Wizard

Data Assessment Wizard enables the user to run the data assessment process with ease of following steps:

- SETUP DATABASE CONNECTION: Create or Edit a database connection which will be used as source database while data assessment process.
- CREATE TABLE LIST: Register top tables from selected data source.
- CREATE COLUMN LIST: Register columns from selected tables and save & run the data assessment.

Back Next >>

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 39
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Solix EDMS Data Assessment Standard Edition (SE) Wizard provides feasibility to analysis the data growth of database at table level with ease of three steps given below.

1. Setup Database Connection
2. Create Table List
3. Create Column List

To initiate the data assessment and navigate to the first step in the wizard, click Next button.

# 3.3.1.1 Setup Database Connection

Refer to section 3.1.1, for Setup Database Connection

# 3.3.1.2 Create Tables List

Once the database connection setup is completed successfully, the user needs to select tables from the database to analysis the database growth on top tables selected effectively.

To create tables list, do the following:

1. In Setup Database Connection screen, select the intended database connection and click Next button to navigate to the second step. The Create Data Growth Multiple Tables ForeCast screen will be displayed as shown in the figure below.
2. Enter the name of the data assessment in the Assessment Name text field.
3. Select the appropriate database from the Data Source drop down list, to run the database assessment.

If Database Snapshot assessment is already executed for the selected data source, then “Load top tables from previous Database Snapshot” checkbox will populate in the Create Tables screen. It enables to load all the top tables from the previous Database Snapshot assessment.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 40
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 3.3.1.3 Create Column List

4. By default, the schema(s) exist in the database will populate with the corresponding schema size in the Schema Names pane.

5. Select the required schema in the Schema Names pane. Once schema is selected, all the tables associated to the schema will populate with corresponding table size in the Tables List pane. (Note: tables are displayed in the descending order according to the table size).

6. Select the tables from the Tables list pane, to run data assessment and forecast the future database growth based on the multiple tables.

7. Once the tables are selected, it is appended automatically in the Selected Tables pane and also shows the total table size of the selected tables as shown in the figure below.

8. Select table name created and click Next button to proceed with further step.

The field marked as | are mandatory fields.

Magnifying icon helps to search for required schema or tables from the corresponding list or filter.

Click Back button, to go back to previous step.

To remove table from the list, Click ‘X’ Remove button adjacent to the selected table.

Once the top tables are selected for the data assessment successfully, next step the user needs to select the date column from the Column list to run the data assessment.

Only, the top tables that contains date columns shows the column enabled in the Date Column and remaining will remain static. Therefore, the drop down will populate all the date columns.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 41
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

existing in the corresponding top table and enables to select the required date column to run the data assessment accordingly on the top tables.

To register date columns and execute, do the following:

1. In the Create Tables List screen, select the tables and click Next button to navigate to the third step. The Create Column List & Save/Run screen will be displayed as shown in the figure below.

Setup Database Connection
Create Tables List
Create Column List & Save
Run
DaeCoumn

Show NullableDae Cclumns

|Table Name|Date Column|Table Owner|Assessment Name|
|---|---|---|---|
|Back|Save|Save|Run|

To populate the nullable date columns in the Data Column drop down, then select Show Nullable Date Columns check box in Data column.
Select the required date column from the Data Column drop down to run the data assessment based on the selected column in the table and forecast the future database growth. (Note: the Data Column drop down will display the date columns existing in the corresponding table.)
Click Save button, to save the data assessment.
Click Save & Run button, to save and run the data assessment to forecast the data growth based on the data column selected in the corresponding top tables. A unique Run-ID will be generated and displayed in the Run Schedule screen. To monitor the status of the data assessment, click on Run ID to navigate to the Status Monitor screen. (Status >Status Monitor).

The field marked as | are mandatory fields.

Click Back button, to go back to previous step.

# 3.3.2 Database Level Forecast

Database Level Forecast is designed to analysis the data growth of database based on top tables and forecast the future database growth based on top tables data growth in the graphical presentation. It helps to understand the strategy to archive the data timely for improving the data storage management. (Make sure that the atleast once the database size snapshot must be executed to forecast the data growth.)

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 42
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

For data growth database level forecast, the difference between two executions should be minimum “30” days.

For one execution of data assessment, by default the data growth percentile is given as 15%. Forecasting the data growth of number of years is depended on the value specified for “ASSESSMENT_PROJECTION_YEARS' parameter (i.e., 'Assessment Projected years for Data Growth analysis'). For example, if the value is given as 5 years, the data growth forecast is shown from the date when data assessment is executed to the next 5 years.

# Benefits of Database Level Forecast:

- Provides the flexibility to load top N tables in the database or top tables used in the previous Database Size Snapshot.
- Helps to understand the database growth in the business based on the data growth and top N tables growth.
- Helps to understand the strategy to archive the data timely for improving the data storage management.

Once Database level Forecast option is selected in the Data Assessment screen, the Database Forecast and Database Growth Analysis on Top Tables radio button will be populated as shown in the figure below.

Solix EDMS Database Assessment provides the snapshot of database size helps to identify the archive eligible data (i.e: inactive data in the database based on specific criteria and retention policies. It also provides the flexibility to assess the data growth at both table and database level and provides forecast for future growth.

Note: We recommend data assessment to be executed on recent clones of production database for better output and prediction of future database growth:

# Database Size Snapshot

- Snapshot of data distribution in schemas, Top N tables and database size.
- Archive Eligibility
- Archive eligibility at Table level & Object level:
- Data Growth Forecast
- Data growth forecast at both the Table Level & Database Level.

# Table Level Forecast

Table level Data growth and forecast the future data growth in selected tables size.

# Database Level Forecast

Forecast the future database growth by using recent assessment and top tables size.

# Database Forecast

Database growth forecast based on the recent assessment for default data source. Database size snapshot must be executed once to forecast the data growth.

# Assessment Summary

Consolidated summary of data assessments accomplished on the database.

# Next?

# 3.3.2.1 Database Forecast

Database Forecast shows the database growth forecast for next 5 years based on the recent run of data assessment in the default sources.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 43
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Once Database Forecast option is selected in the Data Assessment Select Options screen, by default, the Data Growth Analysis depicting the graphical representation and grid table representation of the data growth based on the database size is shown as given below.

# Data Growth Analysis

|Data Base Size Increased by 15.0% For Next 5 Years|Data Base Size Increased by 15.0% For Next 5 Years|
|---|
|Year|Size(GB) Increased by 15.0%|
|2014|20506.22|
|2015|23582.15|
|2016|27119.47|
|2017|31187.39|
|2018|35355.5|
|2019|41245.32|

Graphical representation: Display the growth of data in business every year with a percentage in a graph which is calculated based on the data growth encountered in the previous years.

Grid table: Display the growth of data in business every year with a percentage and accurate size of data been increased in the database.

# 3.3.2.2 Database Growth Analysis on Top Tables

This feature enables to assess the selected top N tables and predict the database growth for next 5 years based on the growth of top N table size.

# Benefits of Database Growth Analysis on Top Tables:

- Provides the flexibility to load top N tables in the database or top tables used in the previous Database Size Snapshot.
- Helps to understand the database growth in the business based on the top tables and helps to understand the strategy to archive the data timely for improving the data storage management.

# Data Assessment for Database Growth Analysis on Top Tables

Once Database Growth Analysis on Top Tables is selected in the Data Assessment screen, by default, the Data Assessment Wizard initial screen will be displayed which shows the summary of each step designed to accomplish the data assessment successfully.

This section outlines the procedure to setup a connection, register top tables (i.e., tables with more size) for database growth analysis, register columns (only date columns of corresponding table will display in the drop down) and then saves & run the data assessment to forecast the database growth based on top tables data growth.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 44
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Data Assessment

# Data Assessment Wizard

Data Assessment Wizard enables the user to run the data assessment process with ease of following steps:

- SETUP DATABASE CONNECTION
- CREATE TABLE LIST
- CREATE COLUMN LIST

STEP: Register Columns from selected tables and save/save & run the data assessment:

Back Next >

Solix EDMS Data Assessment Standard Edition (SE) Wizard provides feasibility to forecast the database growth based on top tables data growth with ease of three steps given below:

1. Setup Database Connection
2. Create Table List
3. Create Column List

# 3.3.2.3 Setup Database Connection

Refer to section 3.1.1, for Setup Database Connection.

# 3.3.2.4 Create Tables List

Once the database connection setup is completed successfully, the user needs to select tables from the database to analyze the database growth on top tables selected effectively.

To create tables list, do the following:

1. In Setup Database Connection screen, select the intended database connection and click Next button to navigate to the second step. The Create Tables List screen will be displayed as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 45
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Enter the name of the data assessment in the Assessment Name text field.
2. Select the appropriate database from the Data Source drop down list, to analyze the selected top tables and forecast the future database growth based on the top tables for next 5 years. By default, the schema(s) exist in the database will populate in the Schema Names pane.
3. If Database Snapshot assessment is already executed on the selected data source, then an alert message pops up as shown in the figure below.

Message from webpage

Already Database Assessment performed for this source. To load previous top tables, please click OK button.

Cancel

Click OK button, to load all the top tables from previous Database Snapshot Assessment.

If database assessment is not performed on the selected data source, then an alert message pops up as shown in the figure below.

localhost needs some information

Script Prompt:

Database Assessment not performed on this source. So, please provide the number of top tables that need to be loaded.

Cancel

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 46
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Enter the number of top tables that need to be loaded and click OK button. Based on the number specified by the user, the top tables in the database will load in the Selected Tables list pane accordingly.

1. To select the additional top tables apart from the loaded top tables, select the required schema in the Schema Names pane. The top tables associated to the schema will load in the Tables list pane. (Note: tables are displayed in the descending order according to the table size).
2. Select the tables from the Tables list, to run data assessment based on the selected top tables and forecast the future database growth.
3. Once the tables are selected, it is appended automatically in the Selected Tables pane and also shows the total table size of the selected tables as shown in the figure below.
4. Select table name created and click Next button to proceed with further step.

The field marked as are mandatory fields.

Magnifying icon helps to search for required schema or tables from the corresponding list or filter.

Click Back button, to go back to previous step.

To remove table from the list, Click ‘X’ Remove button adjacent to the selected table.

# 3.3.2.5 Create Column List

Once the top tables are selected for the data assessment successfully, next step the user needs to select the date column from the Column list to run the data assessment.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 47
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Only, the top tables that contains date columns shows the column enabled in the Date Column and remaining will remain static. Therefore, the drop down will populate all the date columns existing in the corresponding top table and enables to select the required date column to run the data assessment accordingly on the top tables.

To register date columns and execute, do the following:

1. In the Create Tables List screen, select the tables and click Next button to navigate to the third step. The Create Column List & Save/Run screen will be displayed as shown in the figure below.

Setup Database Connection
Create Tables List
Create Column List & Save/Run
Help

|Table Name|Date Column|Table Owner|Assessment Name|
|---|---|---|---|
|EDRS_RESULTS_100083|Selected table has no date/time columns|dbo| |
|PK_posint_H|PURGE_DATE datetime Nullable - Index not available|dbo| |
|EDRS_RESULTS_100001|Selected table has no date/time columns|dbo| |
|EDRS_RESULTS_10000s|Selected table has no date/time columns|dbo| |
|EDRS_RESULTS_100082|Selected table has no date/time columns|dbo| |
|tCHECKS_-DVICES|PaymentDate_ datetime Not Nullable - Index not available|dbo| |
|EDRS_TGT_100083|Selected table has no date/time columns|dbo| |

0< Back      Save       Save   Run

To populate the nullable date columns in the Data Column drop down, then select Show Nullable Date Columns check box in Data column.
Select the required date column from the Data Column drop down to run the data assessment based on the selected column in the table and forecast the future database growth. (Note: the Data Column drop down will display the date columns existing in the corresponding top table.)
Click Save button, to save the data assessment.
Click Save & Run button, to save and run the data assessment to forecast the data growth based on the data column selected in the corresponding top tables. A unique Run-ID will be generated and displayed in the Run Schedule screen. To monitor the status of the data assessment, click on Run ID to navigate to the Status Monitor screen. (Status >Status Monitor).

The field marked as | are mandatory fields.

Click Back button, to go back to previous step.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 48
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 3.4 Assessment Summary

Assessment Summary provides the consolidated summary of all the data assessments executed on the database. It shows the graphical representation and grid tables that provide the consolidated information of database snapshot, archive eligible data, and database growth analysis. It also provides the flexibility to select the retention policy (i.e., duration) data analyzing the database growth with archived and without archived.

The user must execute the data assessment for all the data assessment types, to view the consolidated summary of all the data assessment types such as Database Size Snapshot, Archive Eligibility, and Data Growth Forecast for both Table Level Forecast and Forecast the future database growth by using recent assessment and top tables size.

Based on the data assessments executed on the database, the Assessment Summary screen will display the graphical representations accordingly.

For example, in case, if “Database Size Snapshot and Archive Eligibility” is executed, then Assessment Summary screen displays the consolidated summary and graphical representation of only those data assessments.

Make sure that the database snapshot is executed at least once on the database selected in the Assessment Summary screen.

# Benefits of Assessment Summary:

- Helps to predict the database growth with archived and without archived for the next 5 years.
- Enable to view the complete database assessment output and database growth in a single screen.

# Data Assessment for Assessment Summary

Once Assessment Summary is selected in the Data Assessment screen, the Assessment Summary screen is displayed and select the database from the Data Source drop to show the data assessment run on that database as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 49
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Data Source

SOURCE ORACLE-10.2152.167 (SOURCE)

# Database Size Snapshot Assessment Statistics

Database Size: 20,506.22 GB

# Schema Summary

|Schema Name|Space Used (GB)|
|---|---|
|CLSI|6,637.92|
|READER|639.17|
|INVDZ|277.80|
|WSh|116.10|
|APPS|92.73|
|ODI_EBS_MLOI|26.92|
|APPLSY5|81.43|
|Wsh|54.82|
|AJINNI|53.61|
|READER|40.70|
|Solu Technotgi|28.96|

# Archive Eligibility Summary

|Object Name|Object Value|
|---|---|
|Active Rows|13,909,433,690|
|Inactive Rows|9,598,415,267|
|Active Data Size (GB)|5,712.71|
|Inactive Data Size (GB)|4,050.28|

# Database growth forecast based on top tables

|Forecast Year|Archived Size (GB)|Non-Archived Size (GB)|
|---|---|---|
|2014|20,506.22|1,550.60|
|2015|26,398.95|18,731.92|
|2016|33,147.69|23,520.61|
|2017|40,753.11|23,917.18|
|2018|49,216.04|3,922.22|
|2019|58,537.34|41,536.30|

# Apply Retention Policy

2-Year Policy

# Database growth forecast based on retention policy

|Forecast Year|Non-Archived Size (GB)|Archived Size (GB)|
|---|---|---|
|2014|20,506.22|13,736.95|
|2015|26,398.98|17,748.82|
|2016|33,147.69|22,286.19|
|2017|40,753.11|27,399.54|
|2018|49,216.04|13,039.42|
|2019|58,537.34|39,356.41|

# Archive eligibility forecast for selected retention policy

|Object Name|Object Value|
|---|---|
|Active Rows|23,641,366,923|
|Inactive Rows|10,917,882,096|
|Active Data Size (GB)|5,192.48|
|Inactive Data Size (GB)|4,570.51|

Copyright ©2014 Solix Technologies, Inc. All rights reserved
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

The Assessment Summary screen is divided into four divisions and shows the graphical representation of various data assessments such as,

# 1. Database Size Snapshot Assessment Statistics

Graphical representation: Display the size of database and schema, data distributed among different schemas existing in the database.

Grid table: Provides the consolidated details and elaborated information about the database size occupied by each schema in the database.

# 2. Archive Eligibility Summary

Graphical representation: Shows the Active rows/data size and In-active rows/data size according to the recent run of Object level or top tables level data assessment.

Grid table: Provides the consolidated information associated to the Active rows/data size and In-active rows/data size according to the recent run of object level or top tables level data assessment.

# 3. Database growth forecast based on the top n tables for growth assessment.

Graphical representation: Analysis the database growth in business for next 5 years based on top ‘N’ tables and forecast the database growth with both archived data growth and non-archived data growth. It helps to predict the database growth in future.

Grid table: Provides the total size of archived data and non-archived data in the corresponding forecasted year.

# 4. Database growth forecast based on the retention policy.

a. Archived and Non archived growth forecast for selected retention policy:

Graphical representation: Analysis the database growth in business based on the retention policy (i.e., number of years) applied and forecast the database growth with both archived data growth and non-archived data growth. It helps to predict the database growth in future. The graph varies based on the policy year(s) selected in the Apply Retention Policy drop down.

As retention policy year increases the archived database size increases and vice-versa.

As retention policy year increases, the graph shows an increase in the Active data and decrease in the inactive data.

As retention policy year decreases, the graph shows the decrease in the Active data and increase in the inactive data.

Grid table: Provides the total size of archived data and non-archived data in the corresponding forecasted year.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 51
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# b.

Archive eligibility forecast for selected retention policy:

- Graphical representation: Shows the Active rows/data size and In-active rows/data size growth in the database based on the retention policy.
- Grid table: Provides the consolidated information associated to the Active rows/data size and In-active rows/data size growth in the database based on the retention policy.

Provides flexibility to export the graphical representation of data assessment output into .pdf format.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 52
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 4 Data Masking Process using Wizard

Solix EDMS Data Masking Standard Edition (SE) Wizard has been designed to provide an intuitive user friendly environment. The user is led through a step-by-step process to perform all the activities required to accomplish the data masking process efficiently.

This section outlines the procedure to setup a connection, setup tables to extract the required data for masking, setup security rule assignments to apply on the selected tables, setup run-time parameter and run the data masking process to mask the data effectively.

# DATA MASKING

Solix EDMS Data Masking scrambles effectively encrypts, masks sensitive data in the test databases while ensuring data format remains valid for testing purposes. It helps meet compliance requirements per the Payment Card Industry (PCI) and Protected Health Information (PHI) guidelines.

# DATA VALIDATION

Solix EDMS Data Validation is a simple solution that helps you check integrity and accuracy of your data. The tool can validate various types of data including characters, numbers, dates, etc. and can be used effectively to validate and reconcile the data copy with the source.

# To initiate the data masking process,

In Solix EDMS Standard Edition (SE) home page, click Launch Data Masking Wizard button adjacent to the Data Masking. By default, the Data Masking Wizard initial screen will be displayed which shows the summary of each step designed to accomplish the data masking process successfully.

# Data Masking Wizard

Data Masking Wizard enables the user to run the data masking process with ease by following these steps:

1. SETUP DATABASE CONNECTION
Create or edit a database connection which will be used as source database while data masking process.
2. SELECT TABLES
Setup new table from selected data source.
3. SETUP SECURITY RULE ASSIGNMENTS
Setup new security rule assignments on selected table columns by applying available masking rules.
4. PROVIDE SECURITY RULE PARAMETER VALUES
Setup security group name and provide run time parameter values for masking.
5. RUN
Finally, save and run the data masking process.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 53
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Solix EDMS Data Masking Standard Edition (SE) Wizard provides feasibility to run the data masking process and mask the data in the database with ease of four steps given below.

1. Setup Database Connection
2. Select Tables
3. Setup Security Rule Assignments
4. Provide Security Rule Parameter Values & Run

To initiate the data assessment and navigate to the first step in the wizard, click Next button.

# 4.1 Setup Database Connection

The user needs to configure the database connection to provide the accessibility to the database. This section describes the process to configure the connection details in order to connect to the database.

|Connection Name|Host Name|Address|Database|Instance Name|Database User|
|---|---|---|---|---|---|
|Demo Source sample {source SOURCE}|Demo Source|localhost|Demo Database|mic Source|DEMO|
|Demo Target-sample_target TARGET|Demo Target_Host|localhost|Demo Database|sample|DEMO|
|Source Details SOURCE|Source Details SOURCE|Source Details SOURCE|Source Details SOURCE|Source Details SOURCE|Source Details SOURCE|
|Default Source|Default|Oracle|Default|Default| |
|Enter Details TARGET|Enter Details TARGET|Enter Details TARGET|Enter Details TARGET|Enter Details TARGET|Enter Details TARGET|
|Default Target|Default|Oracle|Default|Default| |

To setup the database connection for data masking, do the following:

1. In Data Masking Wizard initial screen, click Next button to initiate the data masking process and navigate to the first step in the wizard. The Setup Database Connection screen with the list of existing database connections will be displayed and provides the ability to create/edit connections. If the required database connection already exists, then the user can navigate to the second step by clicking Next button.
2. To create a new database connection, do the following:
1. Click Add button (or) Hover on any existing database connection, the three links (Create Like, New and Edit) will appear to create or edit the database connection.
2. Create Like – enables the user to create a replica of the selected database connection. The same connections details are maintained. It is recommended to define a new name for the replica.
3. Create - enables the user to create a new database connection.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 54
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Edit

enables the user to edit the details of an existing database connection.

# b.

The Setup Database Connection popup window is displayed. A new database connection can be created here as shown in the figure below.

# Setup Database Connection

|Name|Type|Select One|
|---|---|---|
|Machine Name|Host Name / IP Address|Database|
|Select One|Database User|Database Password|
|Database Port Number|Description| |

1. Enter the name of the database connection in the Name text field.
2. Select an appropriate datasource type from the Type drop down list and designate the database as a source or target.
3. Enter the database server name associated to the data source in the Machine Name text field.
4. Enter the host name/ IP address associated to the database server in the Host Name/ IP Address text field.
5. Select the database which is compatible to the data source from the Database (such as Oracle, Demo database) drop down list.
6. Enter the instance name/service name of the database in the Instance Name text field.
7. Enter the login user name of the database in Database User text field.
8. Enter the password corresponding to the username of the database in Database Password text field.
9. Enter the port number of the database in the Database Port Number field.
10. Enter the comments in the Description text box.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 55
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# xi.

Click Save button. Once the database connection details are saved successfully, a confirmation message is prompted in the Setup Database Connection screen.

3. Once database connection setup is completed successfully, click Next button. The Select Tables screen to select the tables for data masking will be displayed.

The fields marked as are mandatory fields. Ensure that the specified databases are accessible and running. To navigate to Setup Database Connection wizard screen from the Setup Database Connection popup window, click Cancel button.

To understand the functionality of each field in the Setup Database Connection popup window, refer to the table given below.

|Fields|Functionality|
|---|---|
|Name|Define the name of the database connection.|
|Type|Drop down list to designate the datasource as Source / Target. For example, if “Source” is selected, then the datasource is considered as Source database.|
|Machine Name|Enter the name of the database server associated to the datasource. It is necessary to setup a database connection.|
|Host Name/IP Address|Enter the Host Name/IP Address of the database server.|
|Database|Displays a list of supported databases and allows the user to select the database compatible to the datasource.|
|Instance name|Define the instance name of the database such as SID or Service Name.|
|Database User|Enter the user credentials (i.e., Username) required to connect to the database.|
|Database password|Enter the password corresponding to the Database User in order to connect to the database.|
|Database Port Number|Enter the Port number of the database server to establish the database connection.|
|Notes|It facilitates the user to enter the description associated with the database connection.|
|Test Connection|Used to verify whether the connection details provided are valid and whether the connection to the database can be established based on the specified details.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 56
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

If the details provided are valid, the database connectivity will be established and saved.

If the given details are invalid, the database connectivity fails and alerts the user to verify the details.

|Save|Used to save the database connection details.|
|---|---|
|Cancel|Used to navigate to the Setup Database Connection screen|

# 4.1.1 Create Like, Editing or Testing the database connections

Test Connection feature is designed to provide feasibility to verify whether the connection details specified during database connection creation are valid. To test the database connection, do the following:

1. In Setup Database Connection screen, hover on the database connection that needs to be verified. The three links (Create Like, Create and Edit) will appear beneath the database connection.
2. Click Create Like or Edit button, to verify the connection details of the database connection. The Setup Database Connection popup window is prompted to edit/create a replica of the database connection as shown in the figure below.
3. Once the database connection details are saved successfully, in order to test the connection to the database based on the given details, click Test Connection button.

If the database is connected successfully, a message stating the successful connection to the database will be prompted. If the database connection fails, an alert message to verify the given connection details will be prompted.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 57
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

The fields marked as are mandatory fields. To create a replica of database, click on Create Like link. In Setup Database Connection enter the name of the replica in the Name text field.

# 4.2 Select Tables

Once the database connection setup is completed successfully, the user needs to select tables from the database to perform data masking process effectively.

# Setup Database connection

|Datasource|Wemo Source|Source-localhost| | | |
|---|---|---|---|---|---|
|Table Owner| | |Table Name| | |
|DEMQ_ QURCE|~Select One| | | | |
|Table Name| |Table Owner| |Data Source| |
|EMPLOYEES| |DEMO_SOURCE|Demo Source demo source-localhost| | |

To select the intended table, do the following:

1. In Select Tables screen, select the database from the Data Source drop down list. Based on the database selected, the corresponding schemas/table owners will be listed in the Table Owner drop down list.
2. Select a schema/table owner from the Table Owner drop down list. Based on the schema/table owner selected, the corresponding tables will be listed in the Table Name drop down list.
3. Select the intended table from the Table Name drop down list.
4. Click Add button, to save and append the selected table information to the list. Once the information is saved successfully, a message stating “New Table Saved Successfully” is prompted on the screen and the respective table information will be appended to the list.

To view the columns that exist in the table, do the following:

1. Hover on the table name in the list and click Column link. The Table Column Details popup window shows the columns and

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 58
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Table Column Details

|Column Name|Column Datatype|Data Length|Nullable|Primary Key|PK Sequence No|
|---|---|---|---|---|---|
|PHONE_|NUMERIC| | | | |
|PURGE_DATE|DATETIME| | | | |
|LAST_UPDATE_DATE|DATETIME| | | | |
|CREATION_DATE|DATETIME| | | | |
|DATE_TO|DATETIME| | | | |
|DATE_FROM|DATETIME| | | | |
|PURGE_SEQ_|DECIMAL| | | | |
|PARTY_ID|NUMERIC| | | | |
|OBJECT_VERSION_NUMBER|NUMERIC| | | | |
|LAST_UPDATE_LOGIN|NUMERIC| | | | |
|LAST_UPDATED_BY|NUMERIC| | | | |
|CREATED_BY|NUMERIC| | | | |
|PARENT_ID|NUMERIC| | | | |
|4J_RETENTION_APPLIED|VARCHAR| | | | |

Click Cancel button, to exit the popup window.

Click Next button, to navigate to the next step. The Setup Security Rule Assignments screen appears to configure an appropriate security rule on the column of the selected table to perform data masking process accordingly.

The fields marked as are mandatory fields.

While performing data masking in other Oracle database (such as SQL Server, Sybase ASE and Demo database), it is mandatory that tables selected must have at least one Primary key column in a table. In case, if the tables selected does not have primary key column then the user will be restricted to proceed further and a warning message will be prompted as shown in the figure below.

Selected tables (AN_titles should have at least one Primary key column before masking Hover on table name grid and click on Columns set primary key columns.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 59
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 4.3 Setup Security Rule Assignments

This step enables the user to assign an appropriate security rule on the required column of the selected table and mask the data existing in the column based on the security rule applied.

While masking a huge data, it is recommended to assign or setup the security rule assignment in the Security Rule Assignment screen (Settings > Data Masking > Security Rule Assignment). Therefore, define the commit frequency and parallel thread to perform data masking process on the huge data efficiently. In such cases, the tables been registered in the Solix EDMS Data Masking Standard Edition (SE) Wizard will be populated automatically in the Security Rule Assignment screen to carry out the data masking process.

# Setup Database Connection

# Select Tables

# Setup Security Rule Assignments

|Table Name|Column Name| | | | |
|---|---|---|---|---|---|
|EMPLOYEES DEMQ QURCF| | |Selert| | |
|Rule| |Type|Rule Name| | |
|-Select One-| | |~Select| | |
|Seq No|Table Owner|Table Name|Column Name|Line|Rule Name|
|DEMO_SOURCE|EMPLOYEES|FIRSTNAME|Shuffling|SHUFFLING| |
|DEMO_SOURCE|EMPLOYEES|LASTNAME|Shuffling|SHUFFLING| |
|DEMO_SOURCE|EMPLOYEES|EMAIL|Shuffling|SHUFFLING| |

To setup security rule assignment, do the following:

1. Select a table from the Table Name drop down list to extract the columns of the selected table.
2. Select a column from the Column Name drop down list, to apply the security rule on the selected column while masking.
3. Select an appropriate masking method from the Rule Type drop down list.
4. Based on the column data type and rule type selected, the corresponding security rules will be displayed in the Rule Name drop down list. Select an appropriate security rule from the list, to perform masking based on the algorithm defined in the security rule.
5. To customize a criterion for the respective security rule assignment, select check box adjacent to the Add Criteria check box. Automatically, the Criteria text box will appear on the screen. Enter the custom SQL statement in the Criteria text box to assign security rule on the data extracted based on the criteria exclusively.

# Provide Security Rule Parameter Values

Criteria String

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 60
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 4.4 Provide Security Rule Parameter Values & Run

Once the security rule assignment is configured successfully, the security group name will be automatically generated for the respective security rule assignment in the Provide Security Rule Parameter Values & Run screen. This enables the user to provide the parameter value and preview the sample of masked data before executing the data masking process effectively.

To save and execute the data masking process, do the following:

1. Click Add button to save and append the configured security rule assignment in the list. Once the security rule is assigned successfully, a message stating “Security Rule Assignment Saved Successfully” is prompted on the screen.
2. Click Next button, to navigate to the next step to accomplish the data masking process. The security group name will be automatically generated for the respective security rule assignment in the Provide Security Rule Parameter Values & Run screen.

The fields marked as | are mandatory fields. For each application/database, the total number of masking columns is restricted to only ‘10’ in Solix EDMS Data Masking Standard Edition (SE). Exclusively, for table columns of Character type, the security rules of all the data types (i.e., Character, Numeric and Date) and corresponding rule type will be displayed irrespectively.

# Data Masking Wizard Run Parameters

Setup Database Connection
Select Tables
Setup Security Rule Assignments
Provide Security Rule Parameter Values & Run

Group Name: SG_20099

Show Parameters to Run Masking

# Parameters For Security Rule Group - 20099

|Name|Parameter|Value|
|---|---|---|
|Parameters For Group Security Rule Assignment RuleAssign_200241|(Column Name: ADDRESSLINEZ; Table Name: CUSTOMERS; Security Rule: SHUFFLING)|No Parameters available this rule|
|Parameters For Group Security Rule Assignment : RuleAssign_200242|(Column Name: CONTACTFIRSTNAME; Table Name: CUSTOMERS; Security Rule: RANDOM STRINGS)|<br/>StartValue|Value|
|EndValue|Value|

Back Save Run Preview

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 61
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. To enter the single value for a group of parameters at a time, select Yes option adjacent to the Group Params. (Or) select No option, to enter the value of the parameters individually.
2. Enter the value of the parameters in the corresponding fields. To view the sample of masked data before masking the original data, do the following:
1. Click Preview button. The Preview popup window will be prompted which shows the data of all the tables before and after masking as shown in the figure below.
|Preview|Preview|
|---|
|Column Name|EXTENSION|
|Table Name|EMPLOYEES|
|Rule Name:|SHUFFLING|
|Before Mask|After Mask|
|XJBUU|x4611|
|X4611|X927}|
|X4871|X5408|
|Xlams|Xlxmm|

Note: This Data masking preview shows a small subset of data, Actual masking results may vary when you mask against actual set of data.
2. Click Close button, to navigate to the Run Parameters screen.
3. Click Save & Run button to save and execute the security group accordingly. Once the security group is executed successfully, automatically a Run ID is generated for the respective job in Run Schedule Details screen.
# Run Schedule Details

The Security Group has been scheduled for execution and might take several minutes for completion following the Job Run [100004].

Click on the Status Monitor in the Status menu to check the status and view details of the job.
4. To monitor the status and view the details of the job, click Run ID or navigate to the Status Monitor screen (Schedule & Status > Status Monitor).

The fields marked as * are mandatory fields. Based on the rule type and rule of the security rule assignment, the parameter will be initialized in the security group.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 62
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

To limit the rows in the preview results, set the value of mask preview rows count in MASK_PREVIEW_ROWS parameter in the Parameter screen (Admin > Manage Source/Target Dictionary > Parameter). For example, to limit the rows to 10 then set the default value of mask preview rows count in MASK_PREVIEW_ROWS parameter to “10”. Henceforth, the Preview results screen will display 10 mask preview records exclusively.

# 4.4.1 To Save Security group and execute it later

To save the security group and execute it later, do the following:

1. In Provide Security Rule Parameter Values & Run screen, click Save button, to save the security group and append it in the Security Groups screen. The tool automatically navigates to the Run Security Groups (Data Masking > Run Security Groups) screen and a message stating “Data Masking Security Rule Assignment Saved Successfully” is prompted on the screen as shown in the figure below.
2. |Data Masking|curt Grol|
|---|---|
|Data Masking|(urit : Pule Assignment Saved Successfully.|

Listing 1-2 of 2 records

|Security Group Name|Notes|
|---|---|
|SG_20002|created through Wizard|
|SG_20001|created through wizard|

Select the intended security group and click Run button to execute the security group for data masking process. Once the security group is executed successfully, a Run ID is generated for the respective job in Run Schedule Details screen.
3. To monitor the status and view the details of the job, click Run ID or navigate to the Status Monitor screen (Schedule & Status > Status Monitor).

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 63
---
# Solix EDMS Standard Edition (SE) 2.2

# Schedule & Status

# Status Monitor

Listing 1-7 of 7 records

|Run Id|Object Name|Status|Activity|Start Date|End Date|Preview|Parameter Value|
|---|---|---|---|---|---|---|---|
|18007|56_20002_RuleAssien_2CCCOS|Process Completed|DATA_MASK_SCRABLE|13-Ju-2012 16:36:05|13-Ju-2012 16:36:06| | |
|101006|56_2CC02_RuleAssign_2OOOO4|Process Completed|DATA_MASK_SCRAMBLE|13-Ju-2012 16:36:04|13-Ju-2012 16:36:04| | |
|100005|SG_20002 RuleAssign_2O0CO3|Process Completed|DATA_MASK_SCRANBLE|13-Ju-2012 16:36:02|13-Ju-2012 16:36:03| | |
|100004|5G_20002|Process Completed|DATA_MASK_GROUP_SCRABLE|13-Ju-2012 16:35:59|13-Ju-2012 16:36:06| | |
|100003|56_20001_ RuleAssign_2OOOOZ|Process Completed|DATA_MASK_SCRANBLE|13-Ju-2012 15:39:27|13-Ju-2012 15:39:30| | |
|1C1C02|5G_2C001_ RuleAssign_2COOO1|Process Completed|DATA_MASK_SCRANBLE|13-Ju-2012 15:39:25|13-Ju-2012 15:39:27| | |
|100001|5G_20001|Process Completed|DATA_MASK_GROUP_SCRANBLE|13-Ju-2012 15:39:23|13-Ju-2012 15:39:30| | |

To view the job details, click Details icon adjacent to the Run ID. The Job Details screen will be displayed as shown in the figure below.

Solix Enterprise Data Management Suite

Windows Internet Explorer

http:/ 10,2.152.197.9090/edms/jsp/ShowJobsjsp?RUN_ID=1OOOOS&ACTIVITY=DATA_MASK_SCRAMBLE

# Status

# Status Monitor

Listing 1-1 of records

|Activity|Table Owner|Table Name|Job Seq Id|From Record No|To Record No|
|---|---|---|---|---|---|
|SCRANBLE|DEMO_SOURCE|EMPLOYEES| | | |

The fields marked as | are mandatory fields.

# Product User Manual

Refresh All Records

Export As Customize Columns

Details Schedule Id Log

# Activity Count

Status Process Completed

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 64
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 4.4.2 View Data

View Data feature provides an option to view the data existing in the table or extracted using custom SQL. Also, it provides flexibility to view the data before and after the data masking process to verify whether the data has been masked appropriately or not.

To access view data, click the bar that appears on the left hand side of the screen. Once the bar is clicked, the administrative menus will be opened in the screen as shown in the screen below.

|WVabdabon|Masking|Archiving|
|---|---|---|
|Click here to open the Admin pane|Click here to open the Admin pane|Click here to open the Admin pane|

DATA ASSESSMENT

Contact us for Enterprise Edition, which includes Solix EDMS Database Archiving.

Solix EDMS Standard Edition (SE) plays a significant role in data management.

Solix EDMS Test Data effectively encrypts sensitive data while ensuring the data format remains valid for testing purposes. Also, this helps meet enhanced requirements for compliance.

Launch Data Masking Wizard

# DATA VALIDATION

Solix EDMS Data Validation ensures accuracy. Your data can validate various types including characters, numbers, dates, and more.

Launch Data Validation Wizard

# ARCHIVING CONFIGURATOR

Standard Edition (SE) provides a platform to archive inactive data into separate historical data that must be retained for regulatory compliance.

# Tools

1. Navigate to the following path: Tool > View Data. The View Data screen will be displayed and it enables the user to view the data in the table.

DataSource

|Vemo Source-demo source-localhost|SOURCE|
|---|---|
|Table Owner|Table Name|
|Select One|Show Data|

2. Select database from the DataSource drop down list.

3. Select an appropriate option (i.e., Table or Custom SQL) from the View Type drop down list.

Table – enables the user to show all the data exist in the table.

Custom SQL – enables the user to customize SQL statement to extract the data from the table and show the data extracted based on the specified SQL statement.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 65
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. If Table option is selected, select appropriate information associated to the intended table in the corresponding fields (such as table owner and table name) and click Show Data button. The data (including masked data) in the table will be displayed beneath the fields as shown in the figure below.
2. If Custom SQL option is selected, the Custom SQL Statement text box appears on the screen. Enter the SQL Statement in the Custom SQL Statement text box and click Show Data button to show the data extracted based on the specified criteria as shown in the figure below.

The fields marked as are mandatory fields.

When the status of data masking turns to ‘Process Completed’ the user would be able to view the masked data/encrypted data in the table.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 66
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 5 Rerun the Data Masking

Once the data masking is created and executed successfully, it will be automatically appended to the list of Security Groups on the Run Security Groups screen (Data Masking &gt; Run Security Groups). This feature allows the user to rerun the executed security group recursively.

To rerun the data masking process, do the following:

1. Navigate to the following path: Data Masking &gt; Run Security Groups. The Run Security Groups screen with the list of security groups created will be displayed as shown in the figure below.

# Data Masking Run Security Groups Listing

|Security Group Name|Notes|
|---|---|
|abcgroup|created through wizard|
|SG_20003|created through Wizard|
|SG_20001|created through wizard|

Select the intended security group and click Run button. The Run Parameters screen to enter the run-time parameters will be displayed as shown in the figure below.

# Run Parameters

|Group Params|Parameters For Security Rule Group SG_20016| | | | |
|---|---|---|---|---|---|
|Name| |Parameter| |Value| |
| |Security Rule Assignment|SG_20016_Rule Assign_200025|(Column Name: CONTACTFIRSTNAME ; Table Name: CUSTOMERS ; Security Rule : SHUFFLING)| | |
|No Parameters available to this rule| | | | | |
|Parameters For Group|Security Rule Assignment| |SG_20016_Rule Assign 200026| | |
| |(Column Name: CONTACTLASTNAME ; Table Name: CUSTOMERS ; Security Rule : SHUFFLING)|No Parameters available to this rule| | | |

Click Continue button to execute the security group for data masking process. Once the security group is executed successfully, automatically a Run ID is generated for the respective in Run Schedule Details screen.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 67
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Data Masking

# Security Groups

# Run Parameters

# Run Schedule

# Run Schedule Details

The Security Group has been scheduled for execution and might take several minutes for completion.

Following the Job Run Id [100048].

Click on the Status Monitor in the Status Menu to check the status and view details of the job.

Back

# 4.

To monitor the status and view the details of the job, click Run ID or navigate to the Status Monitor screen (Schedule & Status > Status Monitor).

# Schedule Status Status Monitor

Refresh QuI Records

Listing 15 records

Search

Export As

Customize Columns

|Run Id|Object Name|Status|Activity|Start Date|End Date|Preview|Parameter Value|
|---|---|---|---|---|---|---|---|
|100050|SG_20016_RuleAssign_200026|Process Completed|DATA_MASK_SCRAMBLE|03-Jul-2012 12:57:22|03-Jul-2012 12:57:23| | |
|100049|SG_20016_RuleAssign_200025|Process Completed|DATA_MASK_SCRAMBLE|03-Jul-2012 12:57:19|03-Jul-2012 12:57:21| | |
|100048|SG_20016|Process Completed|DATA_MASK_GROUP_SCRAMBLE|03-Jul-2012 12:57:18|03-Jul-2012 12:57:23| | |
|100047|TEST DEMO|Process Completed|DATA_VALIDATION|02-Jul-2012 19:01:35|02-Jul-2012 19:01:42| | |
|100046|TEST DEMO|Process Completed|DATA_VALIDATION|02-Jul-2012 18:09:29|02-Jul-2012 18:09:34| | |
|100045|SG_20014_RuleAssign_200023|Process Completed|DATA_MASK_SCRAMBLE|02-Jul-2012 15:11:18|02-Jul-2012 15:11:20| | |
|100044|SG_20014|Process Completed|DATA_MASK_GROUP_SCRAMBLE|02-Jul-2012 15:11:18|02-Jul-2012 15:11:20| | |

# 5.

Once the status of execution is ‘Process Completed’ the masked data can be viewed as follows:

Navigate to the following path: Tool > View Data. The View Data screen displays the data in the table after data masking process.

The View Data screen provides feasibility to view the data in the table before data masking process and after data masking process to verify whether the data has been masked appropriately or not.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 68
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 6 Data Validation Process using Wizard

Solix EDMS Validation Standard Edition (SE) Wizard has been thoughtfully designed to provide an intuitive user friendly environment. The user is led through a step-by-step process to perform all the activities required to complete the data validation process efficiently.

This section outlines the activities involved in the data validation process - setup a connection, setup source and target databases for data validation, setup column matching to join both the source and target databases, setup validation mapping criteria to validate the data in both the databases, and setup an appropriate execution method to run the data validation process effectively.

# SOLIX

# Enterprise Data Management Suite Standard Edition 2.2

Home ADHIN Help Support Log Out

# Data Validation

# Data Masking

# Data Archiving

# Data Assessment

# Schedule

# Status

# DATA MASKING

Solix EDMS Data Masking scrambles effectively masks sensitive data in the test databases while ensuring data format remains valid for testing purposes. It helps meet compliance requirements per the Payment Card Industry (PCI) and Protected Health Information (PHI) guidelines.

Launch Data Masking Wizard

# DATA VALIDATION

Solix EDMS Data Validation is a simple solution that helps you check integrity and accuracy of your data. The tool can validate various types of data including characters, numbers, dates, etc. and can be used effectively to validate and reconcile the data copy with the source.

Launch Data Validation Wizard

# DATABASE ARCHIVING

Solix EDMS Database Archiving Standard Edition (SE) provides a platform to move inactive data into long-term retention. The archived data consists of historical data that is important and necessary for future reference and must be retained for regulatory compliance.

Launch Data Archiving Configurator

To initiate the data validation process, in Solix EDMS Standard Edition (SE) home page, click Launch Data Masking Wizard button adjacent to the Data Validation. By default, the Data Validation Wizard initial screen will be displayed which shows the summary of all the steps necessary to accomplish the data validation process successfully.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 69
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Database Validation

# Data Validation Wizard

Data Validation Wizard enables the user to the data validation process with ease of following steps:

# SETUP DATABASE CONNECTION:

Create/Edit database connection which will be used as source/target database while data validation process.

# SETUP VALIDATION SOURCE AND TARGET DETAILS

Setup target details like source and target databases; Schema and tables or Custom SQL statements which are required for data validation.

# SETUP SOURCE AND TARGET COLUMN MATCHING

Setup source and target columns which will be used to join both source and target data. And these columns will be applied on primary key unique index columns.

# SETUP SOURCE AND TARGET COLUMN COMPARISON

Setup target columns comparison and these columns enable validation of data between target databases.

# SETUP DATA VALIDATION METHOD AND RUN

Setup data validation method like matched/mismatched and data existence options: "Data Exist only in Source", "Data Exist only in Target", and "Data Exist in Source and Target", and also notification details to send validation results report through email. Finally, Save and Run the data validation process.

# Solix EDMS Validation Standard Edition (SE) Wizard

provides the feasibility to run the data validation process in an easy five steps given below:

1. Setup Database Connection
2. Setup Data Validation Source & Target Details
3. Setup Source & Target Column Matching
4. Setup Source & Target Column Comparison
5. Setup Data Validation Method & Run

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 70
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 6.1 Setup Database Connection

In step 1, the user needs to configure the database connection to provide the tool accessibility to the database. This section describes the process to configure the connection details in order to connect to the database.

# Data Validation Data Validation Wizard

|Setup Database|Setup Data Validation Source|Setup Source Target Columns|Setup Data Validation| | | |
|---|---|---|---|---|---|---|
|Connection Name|Type|Host Name|Address|Database|Instance Name|Database User|
|Memo Source|Demo Source| |localhost|Demo Database|demo_source|DEMO_SOURCE|
|Memo Target|Demo Target| |localhost|Demo Database|demo|DEMO_TARGET|
|Enter Source Details| |Default Source|Default|Oracle|Default|Default|
|Enter Target Details| |Default Target|Default|Oracle|Default|Default|

To setup the database connection for data validation:

1. In Data Validation Wizard initial screen, click Next button to initiate the data validation process and navigate to the first step in the wizard. The Setup Database Connection screen with the list of existing database connections will be displayed and provides the ability to create/edit connections. If the required database connection already exists, then the user can navigate to the second step by clicking Next button.
2. To create a new database connection, do the following:
1. Click Add button (or) Hover on any existing database connection, the three links (Create Like, New and Edit) will appear to create or edit the database connection.
- Create Like – enables the user to create a replica of the selected database connection. The same connections details are maintained. It is recommended to define a new name for the replica.
- Create enables the user to create a new database connection.
- Edit - enables to edit the details of an existing database connection.
2. The Setup Database Connection popup window is displayed. A new database connection can be created here as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 71
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Enter the name of the database connection in the Name text field.
2. Select an appropriate data source type from the Type drop down list and designate the database as a source or target.
3. Enter the database server name associated to the data source in the Machine Name text field.
4. Enter the host name/ IP address associated to the database server in the Host Name/ IP Address text field.
5. Select the database which is compatible to the data source from the Database (such as Oracle, Demo database) drop down list.
6. Enter the instance name/service name of the database in the Instance Name text field.
7. Enter the login user name of the database in Database User text field.
8. Enter the password corresponding to the username of the database in Database Password text field.
9. Enter the port number of the database in the Database Port Number field.
10. Enter the comments in the Description text box.
11. Click Save button. Once the database connection details are saved successfully, a confirmation message is prompted in the Setup Database Connection screen.

Once database connection setup is completed successfully, click Next button. The Setup Data Validation Source & Target Details screen will be displayed.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 72
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

The fields marked as are mandatory fields. Ensure that the specified database is accessible and running. To navigate to Setup Database Connection wizard screen from the Setup Database Connection popup window, click Cancel button. To understand the functionality of each field in the Setup Database Connection popup window, refer to the table given below.

|Fields|Functionality|
|---|---|
|Name|Define the name of the database connection.|
|Type|Drop down list to designate the datasource as Source / Target. For example, if “Source” is selected, then the datasource is considered as Source database.|
|Machine Name|Enter the name of the database server associated to the datasource. It is necessary to setup a database connection.|
|Host Name/IP Address|Enter the Host Name/IP Address of the database server.|
|Database|Displays a list of supported databases and allows the user to select the database compatible to the datasource.|
|Instance name|Define the instance name of the database such as SID or Service Name.|
|Database User|Enter the user credentials (i.e., Username) required to connect to the database.|
|Database password|Enter the password corresponding to the Database User in order to connect to the database.|
|Database Port Number|Enter the Port number of the database server to establish the database connection.|
|Notes|Facilitates the user to enter any other details associated to the database connection.|
|Test Connection|Test Connection|
|Used to verify whether the connection details provided are valid and whether the connection to the database can be established based on the specified details. If the details provided are valid, the database connectivity will be established and saved. If the given details are invalid, the database connectivity fails and alerts the user to verify the details.|Used to verify whether the connection details provided are valid and whether the connection to the database can be established based on the specified details. If the details provided are valid, the database connectivity will be established and saved. If the given details are invalid, the database connectivity fails and alerts the user to verify the details.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 73
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 6.1.1 Create Like, Editing or Testing the database connections

Test Connection feature is designed to provide feasibility to verify whether the connection details specified during database connection creation are valid. To test the database connection, do the following:

1. In Setup Database Connection screen, hover on the database connection that needs to be verified. The three links (Create Like, New and Edit) will appear beneath the database connection.
2. Click Create Like or Edit button, to verify the connection details of the database connection. The Setup Database Connection popup window is prompted to edit/create a replica of the database connection as shown in the figure below.

|Mame|Tpe|
|---|---|
|Vision_Source|SOURCE|
|Machin Mame|Host Mame|
|Vision_Source|Vision solixcom|
|Database|Mame|
|Oracle| |
|Databaseuser|Database Passvor|
|APPS| |
|Database Polt Mumbe|1234|
|Description| |
|Save Cancel Delete|Save Cancel Delete|

Once the database connection details are saved successfully, in order to test the connection to the database based on the given details, click Test Connection button.

If the database is connected successfully, a message stating the successful connection to the database will be prompted. If the database connection fails, an alert message to verify the given connection details will be prompted.

The fields marked as are mandatory fields. To create a replica of database, click on Create Like link. In Setup Database Connection enter the name of the replica in the Name text field.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 74
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 6.2 Setup Data Validation Source & Target Details

Once the database connection setup is completed, the user needs to configure the source and target details such as database details, schema details.

|Setup Database Connection|Setup|Setup source Target Columns|setup source Target Columns|setup Data Validation Method|Run|
|---|---|---|---|---|---|
|Data Validation Name|Testdemo|Table| | | |

# Database Details

|Source Database|Demo Source-demo source-localhost SOURCE|
|---|---|
|Target Database|emo Target-demo target-localhost T-RGETi|

# Schema Details

|Source Table Owner|DEMo_SOURCE|
|---|---|
|Target Table Owner|DEMQ_T-RSET|

# Table Details

|Source Table|ORDERDET-ILS|
|---|---|
|Target Table|ORDERDE-ILS|

# Staging Tables Database Details

Database
Demo Source-demo source-localhost SOURCE

To configure the source and target details for data validation, do the following:

1. In Setup Data Validation Source & Target Details screen, define the name of the validation in the Data Validation Name text field.
2. Select an appropriate type of comparison from the Comparison Type drop down. Based on the type of comparison selected, the corresponding fields will be displayed on the screen.
3. For example, If Table is selected, then the data in the source table and target table will be validated (i.e., validation takes place between tables in the source and target database).
4. Select a database from the Source Database drop down list to define the source database for the data validation.
5. Select a database from the Target Database drop down list to define the target database for the data validation.
6. If Comparison Type is selected as “Table”, then do the following:

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 75
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Select the table from the Source Table drop down list, to extract the source data from the selected table for data validation process.
2. Select the table from the Target Table drop down list, to extract the target data from the selected table for data validation process.

# 6. If Comparison Type is selected as “Custom SQL”, then do the following:

1. Enter the SQL statement in the Source SQL Statement text box to extract the data from the source database based on the specified SQL statement. The extracted source data will be validated in the data validation process.
2. Enter the SQL statement in the Target SQL Statement text box to extract the data from the target database based on the specified SQL statement. The extracted target data will be validated in the data validation process.

# 7. If Comparison Type is selected as “Registered SQL”, then do the following:

1. Select an appropriate registered custom SQL statement from the Source SQL Statement Names drop down list. Once the custom SQL Statement is selected, the corresponding SQL statement will be populated in the Source SQL Statement text box. Based on the custom SQL statement, the data will be extracted from the source database and facilitated for data validation process.
2. Select an appropriate registered custom SQL statement from the Target SQL Statement Names drop down list. Once the custom SQL Statement is selected, the corresponding SQL statement will be populated in the Target SQL Statement text box. Based on the custom SQL statement, the data will be extracted from the target database and facilitated for data validation process.

# 8. Select the Host/Staging database for validation process from the Host Database drop down list.

# 9. Click Next button.

Once the button is clicked, the data validation Source & Target details are saved. Then navigate to the next step (i.e., Setup Source & Target Column Matching screen) to configure the source and target columns for column matching.

The fields marked as are mandatory fields.

Source or target database can also be a host database.

When the Comparison Type is “Registered SQL”, the SQL Source SQL Statement text box and Target SQL Statement text box will be non-editable text fields.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 76
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Both source database and target database must be homogenous. For example, Oracle to Oracle.

To understand the functionality of each field on the Setup Data Validation Source & Target Details screen, refer to the table given below.

|Field Name|Description|
|---|---|
|Data Validation Name|Used to define a unique name for the data validation process.|
|Comparison Type|Comparison Type enables the user to compare the data in the validation process based on the comparison criterion such as Table, Custom SQL, and Registered Custom SQL. Based on the type of comparison selected, the corresponding fields will be displayed on the screen.|
|Source Database|Enables the user to enter the list of registered databases and define the source database for data validation process. Based on the comparison type selected, it provides feasibility to fetch the data from the source table or execute the custom query provided by the user.|
|Target Database|Enables the user to enter the list of registered databases and define the target database for data validation process. Based on the comparison type selected, it provides feasibility to fetch the data from the target table or execute the custom query provided by the user.|
|Source Table Owner|Used to display the list of table owners that exist in the source database and enable the user to select the intended schema/user from the Source Database.|
|Target Table Owner|Used to display the list of table owners that exist in the target database and enable the user to select the intended schema/user from the Target database.|
|Source Table|Displays the list of tables that exist in the selected Source Table Owner and enables the user to select a table from the source database for data validation process.|
|Target Table|Displays the list of tables that exist in the selected Target Table Owner and enables the user to select a table from the target database for data validation process.|
|Source SQL Statement|Provides feasibility to customize the SQL statement required to accomplish the data validation process. Based on the customized SQL statement, the data will be extracted from the selected source database for data validation process.|
|Target SQL Statement|Provides feasibility to customize the SQL statement required to accomplish the data validation process. Based on the customized SQL statement, the data will be extracted from the selected target database for data validation process.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 77
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Source SQL Statement

Displays the list of registered custom SQL statements which are already created in Solix EDMS Standard Edition (SE) and can be reused to perform data validation process. It enables the user to select the custom SQL statement in order to extract the data from the source database.

# Target SQL Statement

Displays the list of registered Custom SQL Statements which are already created in Solix EDMS Standard Edition (SE) and can be reused to perform data validation process. It enables the user to select the custom SQL Statement in order to extract the data from the target database.

# Host Database

Display the list of databases and enables the user to select the Host/Staging database for validation process. The host database stores both the source and target data which are copied from the respective databases for validation process. Also, the validation results are stored in host database.

Note: Source or target database can also be a host database.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 78
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 6.3 Setup Source & Target Column Matching

Once the source and target details are defined for the data validation process, the user needs to configure the source and target columns. This is done by selecting the primary key or unique index column from the source and target table required to register for column matching.

Setup Database
Setup Data Validation Source
Setup Target Columns
Setup Source Target Columns
Setup Data Validation Comparison Method
Run

# Source & Target Columns Matching (Key Matching)

|Source Column|Target Column|Seq No|
|---|---|---|
|ORDERNUMBER|ORDERNUMBER| |
|PRODUCTCODE|PRODUCTCODE| |

To setup source and target column matching, do the following:

1. In Setup Source & Target Column Matching screen, select the intended column from the Source Column drop down list. This list is extracted from the source table/SQL. The primary key or unique index column is selected to register for matching the column.
2. Select the intended column from the Target Column drop down list which are extracted from the target table/SQL. The primary key or unique index column is selected to register for matching the column.
3. Click Add button, to save the source and target column matching information. Once the information is saved successfully, a message stating “Source & Target Column Matching Saved Successfully” is prompted on the screen and the respective column matching setup will be appended in the list.
4. Click Next button, to navigate to the next step. The Setup Source & Target Column Comparison screen will be displayed to setup an appropriate source and target column for comparison based on the specified criteria.

The fields marked as are mandatory fields.

The source and target column matching information configured in the Setup Source & Target Column Matching screen are appended sequentially in the list.

When multiple column matchings are configured, Add More button will appear in place of Add button.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 79
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

To understand the functionality each field on the Setup Source & Target Column Matching screen, refer to the table given below.

|Field Name|Description|
|---|---|
|Source Column|Display the list of columns that exist in the source table/SQL. It enables the user to select the primary key or unique index column in order to register for column matching.|
|Target Column|Display the list of columns that exist in the source table/SQL. It enables the user to select the primary key or unique index column in order to register for column matching.|
|Add|This button enables the user to add the information associated to the source & target columns configured for column matching in the list.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 80
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 6.4 Setup Source & Target Column Comparison

The Setup Source & Target Column Comparison screen enables the user to configure the source and target column for comparison in the validation process based on the given validation mapping criteria.

|setup Database|setup Data Validation Source|setup source| | |Target Columns| |Setup Data Validation|
|---|---|---|---|---|---|---|---|
|Connection|Target details|Matching|Commission|Method| | | |
|Source Column|Target Column| | | | | | |
|Select One|Select One|Mapping Type| |From Value| |To Value|Seq No|
|PRICE EACH|PRICE EACH|EXACT| | | | | |

To setup the source and target column for validation mapping, do the following:

1. To validate the data of a column in the data validation process, select that column of the source table/SQL from the Source Column drop down list.
2. Select a column of the target table/SQL that needs to be validated from the Target Column drop down list.
3. Based on the data type of Source and Target Column, the corresponding option will be prompted in the Mapping Type drop down list, to perform validation effectively based on the criteria selected.
- For Character columns, Exact Match option will be prompted in the Mapping Type. This option enables to validate the data of Source and Target Column exactly.
- For Numeric or Date columns, Define Threshold option will be prompted in the Mapping Type. This option enables to validate the data based on Threshold Type (i.e., Range Difference, Percentage Difference or Fixed Value) selected.
4. If Threshold option is selected, the Threshold Type drop down and Threshold Value text field appears on the screen.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 81
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Select an appropriate type of threshold required for validation mapping from the Threshold Type drop down. (i.e., Range Difference, Percentage Difference or Fixed Value).
2. Based on the threshold type selected, enter the relevant value in the Threshold Value text field.
3. Click Add button, to save the selected source and target column information to validate the data between source and target database accordingly. Once the information is saved successfully, a message stating “Source & Target Column Comparison Saved Successfully” is prompted on the screen and the respective column comparison setup will be appended in the list.
4. Click Next button, to navigate to the next step. The Setup Data Validation Method & Run screen will be displayed to setup an appropriate method for data validation process and execute it effectively.

The fields marked as are mandatory fields.

In Source Column and Target Column drop down, “All Columns” option provides feasibility to register all the columns in source and target tables for comparison (i.e., validation). Exclusively, it is applicable when both the source and target tables contain the same column name. In such cases, the Mapping Type should be “Exact Match”. When multiple column comparison is configured, Add More button will appear in place of Add button.

For Date columns, only Range Difference and Fixed Value options are prompted in the Threshold Type drop down and enables to validate the data based on the selected threshold type.

To know more about the functionality of each field on the Setup Source & Target Column Comparison screen, refer to the table given below.

|Field|Description|
|---|---|
|Source Column|Displays the list of columns from source table/SQL. This column enables to validate the data between source and target databases.|
|Target Column|Displays the list of columns from target table/SQL. This column enables the user to validate the data between source and target databases.|
|Mapping Type|This drop down list provides the flexibility to select the criteria to perform the mapping in the validation process effectively. Exact Match – It enables the user to|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 82
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

validate the data only if it matches exactly.

# Define Threshold

It enables the user to validate the data based on Threshold Type.

# Threshold Type

enables the user to select an appropriate type of threshold required for Validation mapping (i.e., Range Difference or Percentage Difference or Fixed Value).

Range Difference compares the difference values of source and target columns in the given range of Threshold From Value and Threshold To Value.

Percentage Difference compares source and target columns percentage difference value which should be less than or equal to given Threshold value.

Fixed Value compares the difference value of source and target columns which should be less than or equal to the given Threshold value.

# Threshold Value

Threshold value field appears on the screen, only when Threshold Type is selected as Percentage Difference or Fixed Value. It enables the user to enter the percentage value / fixed value for threshold.

For example, when Threshold Type = “Fixed Value” and Threshold value = “10”, it is considered as 0-10.

# Threshold From Value

Threshold From value field appears on the screen, only when Threshold Type is selected as Range Difference. It enables the user to initialize the “From” value of threshold which implies that the value for threshold starts from the specified value.

# Threshold To Value

Threshold To value field appears on the screen, only when Threshold Type is selected as Range Difference. It enables the user to initialize the “To” value of threshold, which implies that the value for threshold is considered till the specified value.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 83
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 6.5 Setup Data Validation Method & Run

The Setup Data Validation Method & Run screen enables the user to configure the method for data validation process and execute the data validation process effectively.

|Setup Database|Setup Data Validation Source|Setup Source Target Columns|Setup Data Validation|
|---|---|---|---|
|Connection|Target details|Matching|Comparison Method|
|Comparison Method|Mismatched Records|Show Data Exists in Source And Target|Show Data Exists only in Target|
|Send Validation Results through Email (Optional)|Notes|Notes|Notes|
|Description|You have 1222 characters remaining for Quote|You have 1222 characters remaining for Quote|You have 1222 characters remaining for Quote|
|Back|Save|Save|Run|

To setup a method for data validation process and execute it, do the following:

1. Select an appropriate method for comparison of data from the Comparison Method drop down list. (i.e., Matched Records or Mismatched Records).
- If “Matched Records” option is selected, the tool identifies the data which are matched in both source and target databases. The Show Data Exists in Source And Target check box will be visible on the screen.
- If “Mismatched Records” option is selected, the tool identifies data which are not matched in both source and target databases. The Show Data Exists in Source and Show Data Exists in Target check box will also appear on the screen.
2. Enter the frequency value in the Commit Frequency text field, to commit data after specified number of rows from both source and Target Databases.
3. Select Yes/No option in the Retain Staging Tables, to retain the staging tables or not.
- By default “No” option is selected, because this version of the tool - Solix EDMS Standard Edition (SE) does not support retaining staging tables. The validation staging tables will be dropped automatically.
4. To send the notification email to the user, select the Send Validation Results through Email (Optional) check box to provide email information. Once the check box is selected, automatically the notification email section will be populated on the screen as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 84
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

|setup Database|setup Data Validation Source|setup source|Target Columns|Setup Source|Target Columns|Setup|Data Validation|
|---|---|---|---|---|---|---|---|
|Connection|Target details|Matching|Comparison|Method|Computation Method|Commit Frequency|Mismatched Records|
|Show Data Exists Source|Target|Retain Staging Tables|Show Data Exists Only|Target| | |Notification Email section|

Send Validation results through Email (optional)

# Notification Details

Click here to Setup/Validate Mail Server Details

|Success Email|Failure Email| |
|---|---|---|
|Notification Template|Notification Preference| |
|Select One|Attachment|Inline|

# Notes

Description

You have 1100 characters remaining for your notes

Back | Save | Save | Run

1. In Notification Email section, enter the email address in the Success Email text field, to whom the notification emails should be sent when the source and target matches exactly, or within the defined threshold percent or range. It is recommended to use comma/semicolon to enter multiple users email address list.
2. Enter the email address in the Failure Email text field, to which the notification emails should be sent when the source and target don’t match exactly, or their differences exceeds the defined threshold percent or range. It is recommended to use comma/semicolon, to enter multiple users email address list.
3. Select the template for the notification from the Notification Template drop down list, for sending (i.e., emailing) the validation results.
4. Select the required preference from the Notification Preference drop down list (i.e., Attachment or Inline). Based on selected value, results would be sent as an attachment or an inline text of a mail.
5. To setup the mail server details for the respective execution, click (Click here to Setup/Validate Mail Server Details) link appears adjacent to the Notification Details as shown in the figure below.

# Notification Details

(Click here to Setup/Validate Mail Server Details)

|Success Email|Failure Email| |
|---|---|---|
|Notification Template|Notification Preference| |
|Select|Attachment|Inline|

The Mail Server Details popup window will be prompted as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 85
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Mail Server Details

|Hame|Value|Description|
|---|---|---|
|EM-IL_USER|edms@solix.com|Email user-id that will be used for sending the mail.|
|M-L SERVER|10.1.151.70|Address of the mail server to be used while sending the messages to the User.|
|M-IL SERVER_PORT| |Port number of the mail server to be used while sending the messages to the User.|

# Send Test Mail To

Send Test Mail

1. Enter the email-id of the user in the EMAIL_USER text field.
2. Enter the IP address of the email server in the MAIL_SERVER text field.
3. Enter the Port number of the email server in the MAIL_SERVER_PORT text field.
4. To send a test mail, enter the email-id of the user in the Send Test Mail To text field. Click Send Test Mail button, to send the test mail to the specified email-id.

# Data Validation Process

The data validation process can be executed in two ways:

1. Click Save & Execute button, to save the method of data validation and execute the data validation process accordingly. The Run ID for the respective job will be depicted in the Run Schedule screen.
2. Click Save button, to save the method of data validation successfully. The screen automatically navigates to the Run Validation (Data Validation > Run Validation) screen to execute the respective data validation process as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 86
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Data Validation

# Run Validations

Listing 8-15 of 20 records

Search | Export As | Customize Columns

|Data Validation Name|Source Object Type|Source| | |Object Name|Source Name|Target Object Type|Target Object Name|
|---|---|---|---|---|---|---|---|---|
|NEWTWO|CUSTOM_SQL|CUSTOM_SQL_SRC_NEWTWO|Demo_Source|CUSTOM_SQL|CUSTOM_SQL_TGT_| | | |
|NEWONE|CUSTOM_SQL|CUSTOM_SQL_SRC_NEWONE|VIS_SOURCE|CUSTOM_SQL|CUSTOM_SQL_TGT_| | | |
|MYTESTING6|CUSTOM_SQL|CUSTOM_SQL_SRC_MYTESTING6|Demo_cource|CUSTOM_SQL|CUSTOM_SQL_TGT| | | |
|KYTESTINGS|CUSTOM_SQL|CUSTOM_SQL_SRC_KYTESTING5|Demo_Source|CUSTOM_SQL|CUSTOM_SQL_TGT_| | | |
|TESTS|CUSTOM_SQL|SQL_SOURCE|VIS_SOURCE|CUSTOM_SQL|SQL_TARGET| | | |
|TEST3|CUSTOM_SQL|CUSTOM_SQL_SRC_TEST3|VIS_SOURCE|CUSTOM_SQL|CUSTOM_SQL_TGT_| | | |
|TEST1|CUSTOM_SQL|CUSTOM_SQL_SRC_TEST1|Demo_Source|CUSTOM_SQL|CuSTOM_SQL_TGT_| | | |

Click Run button, to execute the process. The Run ID for the respective job will be generated in the Run Schedule screen.

To monitor the status and view the details of the job, click Run ID or navigate to the Status Monitor screen (Schedule & Status > Status Monitor).

# Schedule

# Status

# Status Monitor

Listing 3-11 of 65 records

Search | DATA_VALIDATION | Export As | Customize Columns

|Run Id|Object Name|Status|Activity|Start Date|End Date|Preview|Parameter Value|Details|Schedule Id|Log|
|---|---|---|---|---|---|---|---|---|---|---|
|100230|KYTABLE_TEST|Process Completed|DATA_VALIDATION|16-Aug-2012 14:09:59|16-Aug-2012 14:11:24| | | |100039| |
|100229|ORDERDETAILS-VALII|Process Completed|DATA_VALIDATION|14-Aug-2012 16:14:08|14-Aug-2012 16:14:32| | | | | |
|100228|NEWITWO|Process Completed|DATA_VALIDATION|14-Aug-2012 16:07:10|14-Aug-2012 16:07:45| | | | | |
|100227|NEWONE|Process Failed|DATA_VALIDATION|14-Aug-2012 16:06:08|14-Aug-2012 16:06:08| | | | | |
|100226|ABC123456|Process Completed|DATA_VALIDATION|14-Aug-2012 11:55:49|14-Aug-2012 11:56:23| | | | | |
|100194|TESTFOUR|Process Completed|DATA_VALIDATION|01-Aug-2012 13:09:38|01-Aug-2012 13:09:57| | | | | |
|100193|NEWITHREE|Process Completed|DATA_VALIDATION|01-Aug-2012 12:53:40|-Fug"- 2012 12:53:58| | | | | |
|100192|NEWTWO|Process Completed|DATA_VALIDATION|31-Jul-2012 19:07:44|31-Jul-2012 19:08:10| | | | | |
|100191|NEWONE|Process Completed|DATA_VALIDATION|31-Jul-2012 16:39:36|31-Jul-2012 16:40:03| | | | | |

To view the validation result, click Preview icon of the corresponding Run ID. The Data Validation Summary screen will be displayed with consolidated results of validations executed based on the criteria selected (i.e., validation type) in the validation process as shown in the figure below.

# Schedule & Status

# Status Monitor

# Data Validation Summary for NEWTWO (Run Id 100228)

Listing 1-2 of 2 records

Search

|Validation Type|Total Rows|Details|
|---|---|---|
|Data Mismatches|121| |
|Data Exists Only|Source| |

To view the detailed results of validation according to the validation type, click button of the corresponding validation type.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 87
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

For example, To view the results of Data Mismatches, click corresponding button. The Details screen will be displayed with the detailed information of Data Mismatches as shown in the figure below.

|Schedule|Status|Status Monitor -|Preview|Details| |
|---|---|---|---|---|---|
|Data Mismatches for NEWTWO (Run Id 100228)|Listing records 50 of 121| | |Search|Export As|

|EDMS_SEQ_NO|CUSTOMERNUMBER_SRC|CUSTOMERNUMBER_TGT|CUSTOMERNAME_SRC|CUSTOMERNAME_TGT|CONTACTLASTI|
|---|---|---|---|---|---|
|103|Atelier graphique|Atelier graphique|Schmitt| | |
| |Signal Gift Stores|Signal Gift Stores|King| | |
| |Australian Collectors_|Australian Collectors|Ferguson| | |
| |La Rochelle Gifts|La Rochelle Gifts|Labrune| | |
| |Baane Kini Imports|Baane Kini Imports|Bergulfsen| | |
| |Hini Gifts Distributors Ltd_|Hini Gifts Distributors Ltd.|Nelson| | |
|125|Havel|Zbyszek Co|Havel|Zbyszek Co|Piestrzeniewicz|
|128|Blauer See Auto_|Blauer See Auto, Co.|Keitel| | |
|129|Kini Wheek Co|Lini Wheel Co|Eurchy| | |

Back Close

To view the detailed results of all validations executed in the respective Run ID, click Show All Details button in the Data Validation Summary screen. The Details screen will be displayed with the Data Validation Results as shown in the figure below.

|Schedule & Status|Status Monitor > Preview > Details| | | |
|---|---|---|---|---|
|Data Validation Results for NEWTWO (Run Id 100228)|Listing records 50 of 122|Search|Export As| |

|EDMS_SEQ_NO|VALIDATION_TYPE_DESC|CUSTOMERNUMBER_SRC|CUSTOMERNUMBER_TGT|CUSTOMERNAME_SRC|CUSTOME|
|---|---|---|---|---|---|
| |Data Mismatches|103|Atelier graphique|Atelier gri| |
| |Data Hismatches| |Signal Gift Stores|Signal Gift| |
| |Data Mismatches| |Australian Collectors;|Australian| |
| |Data Hismatches| |La Rochelle Gifts|La Rochell| |
| |Data Nismatches| |Baane Kini Imports|Baane Kin| |
| |Data Hismatches| |Hini Gifts Distributors Ltd_|Kini Gifts| |
| |Data Nismatches| |Havel|Zbyszek Co|Havel|
| |Data Hismatches| |Blauer See Auto_|Blauer Sed| |
| |Data Lismatches| |Lini Whaeks Co|Lini Whed| |

Back close.

The fields marked as are mandatory fields. In Retain Staging Tables, “Yes” option is disabled because Solix EDMS Standard Edition (SE) application does not support Retain Staging Tables feature. To limit the rows in the notification results, set the value of RECON_RESULTS_MAIL_LIMIT parameter in the Parameter screen (Admin> Manage Source/Target Dictionary>Parameter). For example, to limit the rows to 500 then set the default value of RECON_RESULTS_MAIL_LIMIT to “500”. Henceforth, the notification result will display 500 rows exclusively.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 88
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

To understand the functionality of the fields on the Setup Data Validation Method & Run screen, refer to the table given below.

|Field|Description|
|---|---|
|Comparison method|Comparison method enables the user to identify the characteristic of data in Validation process (i.e., Matched Records or Mismatched Records). Matched Records identifies the data in the Validation process which are matched in both source and target databases. The Show Data Exists in Source And Target check box will be visible on the screen. Mismatched Records identifies the data in the Validation process which are not matched in both source and target databases.|
|Commit Frequency|Commit Frequency configures the tool to commit data once certain number of rows processed from both source and Target Databases. Basically, this option optimizes the resources on database when handling huge volumes of data. Optimum value should be 10000 but user can also use higher number based on resources availability on databases used in validation process.|

# Show Data Exists in Source and Target

This option is deployed to reconcile the data which exist in both source and target (Matched or Mismatched data) and extract the data based on Comparison method selected. Suppose, if Mismatched Records is selected, the data which are mismatched in both source and target will be extracted.

# Show Data Exists in Source

Once the data in source and target is compared, this option is deployed to extract the data that only exist in source but does not exist in target.

Note: This option will be visible only when the Comparison method is selected as Mismatched Records.

# Show Data Exists in Target

Once the data in source and target is compared, this option is deployed to extract the data that only exist in target but does not exist in source.

Note: This option will be visible only when the Comparison method is selected as Mismatched Records.

# Retain Staging Tables

This feature facilitates the user to select whether to retain the staging tables or not.

“Yes”- To fetch the validation results.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 89
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

from the staging tables and display in the Preview screen. Whenever the tables are not required for verification or review process, the staging tables can be deleted manually.

“No” – To delete the validation staging tables automatically. The validation results will not be displayed in the Preview screen.

Note: In Retain Staging Tables, “Yes” option is disabled because Solix EDMS Standard Edition (SE) application does not supports Retain Staging Tables feature.

# Success Email

Enter the email address of users to whom the notification emails should be sent when the source and target matches exactly, or within the defined threshold percent or range. It is recommended to use comma/semicolon while entering multiple users in the email address list.

# Failure Email

Enter the email address of users to whom the notification emails should be sent when the Validation process fails. It is recommended to use comma/semicolon to enter multiple users email address list.

# Notification template

Display the list of templates designed to send the notification of validation results. Once the Notification template is selected, the validation results will be incorporated into the selected notification template for sending (i.e., emailing) the notification email to the user.

# Notification Preference

Notification Preference provides flexibility to send the validation result in the mail as an Attachment or Inline to the mail. Based on selected value results, the mail will be sent as an attachment or an inline text.

# MAIL_SERVER

IP address of the email server to which the emails will be send.

# MAIL_SERVER_PORT

Port number of the email server which is used to sent the emails.

# EMAIL_USER

Email address of the user to which the notification emails will be sent.

# Send Test Mail To

This field enables the user to enter the email address of the user to send the test mail.

# Send Test Mail

This button is deployed to send the test mail to the specified email-id.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 90
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 7 Rerun the Data Validation

Once the data validation is created and executed successfully, it will be automatically appended to the Run Validation Screen (Data Validation &gt; Run Validation). Furthermore, if the user wants to rerun the data validation, the Solix EDMS Standard Edition (SE) provides feasibility to rerun the executed data validation recursively.

To rerun the data validation, do the following:

1. Navigate to the following path: Data Validation &gt; Run Validation. The Run Validation screen will be displayed as shown in the figure below.
2. Select the radio button adjacent to the intended data validation and click Run button. The Run Parameter screen appears to enter the parameter value at run time as shown in the figure below.

|Source Object Run Parameters Details [CUSTOM_SQL_SRC_NEWTwO]|Source Object Run Parameters Details [CUSTOM_SQL_SRC_NEWTwO]|Source Object Run Parameters Details [CUSTOM_SQL_SRC_NEWTwO]|
|---|
|Name|Parameter|Value|
| | | |

|Target Object Run Parameters Details [CUSTOM_SQL_TGT_NEWTWO]|Target Object Run Parameters Details [CUSTOM_SQL_TGT_NEWTWO]|Target Object Run Parameters Details [CUSTOM_SQL_TGT_NEWTWO]|
|---|
|Name|Parameter|Value|
| | | |

Continue close

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 91
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Click Continue button, to execute the data validation process. A Run ID will be generated and displayed in the Run Schedule screen.
2. To monitor the status and view the details of the job, click Run ID or navigate to the Status Monitor screen (Schedule & Status > Status Monitor).
3. To view the validation result, click Preview icon of the corresponding Run ID. The Statistics screen which shows the validation results is displayed as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 92
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# User Management

User management handles the comprehensive information of the user and knowledgebase in the Solix EDMS Standard Edition (SE) application, which enable the user to create instant custom configurations efficiently. To setup a configuration and perform validation process, firstly the user must be registered in the application and be assigned a user role. The user must define a knowledgebase to access the metadata in the database (both source and target database). Also, the user should have thorough knowledge of the relationships among the selected tables while creating the configurations. Inappropriate configurations may result in nullified data relationships in the tables or loss of referential integrity.

This chapter outlines the procedure to setup users, define source & target database, define a knowledgebase and assign user to the knowledgebase. Also, it navigates through the process to create a knowledgebase (KB) in the Solix EDMS Standard Edition (SE) application successfully. The topics included are listed below:

- User Creation
- User Role Creation
- KB Source & Target Definitions
- KB Definition
- KB Assignments

To perform administration activities, click the bar that appears on the left hand side of the screen. Once the bar is clicked, the administrative menus will be opened on the screen as shown below.

SOLIX Enterprise Data Standard Edition Home ADMIN 0 Help Support Log Out

Click here to open the side menu

# Data Validation

'Masking Data Archiving Data Assessment Schedule Status

# DATA MASKING

Solix EDMS Data Masking Standard Edition (SE) effectively scrambles and encrypts sensitive data while ensuring data format remains valid for testing purposes. This tool also helps meet compliance requirements the Payment Card Industry (PCI) and Protected Health Information (PHI) guidelines.

Launch Data Masking Wizard

# DATA ASSESSMENT

Solix EDMS Database Assessment Standard Edition (SE) plays a significant role to assess archive eligible data specific to given database criteria and ensures retention policies.

Launch Data Assessment Wizard

# DATA VALIDATION

Solix EDMS Data Validation provides a simple solution that helps you check the integrity and accuracy of your data. The tool can validate various types of data including characters, numbers, dates etc. and effectively validate and reconcile the data copy with the source.

Launch Data Validation Wizard

# DATABASE ARCHIVING

Solix EDMS Database Archiving Standard Edition (SE) provides a platform to move inactive data into a separate tier for long term retention. Archived data consists of historical data that is important and necessary for future reference, and must be retained for regulatory compliance.

Launch Data Archiving Configurator

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 93
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 8.1 User Creation

User should be registered in the Solix EDMS Standard Edition (SE) application to access / perform validation process. This feature enables the user to add/edit the user information in the Solix EDMS Standard Edition (SE). This section illustrates the process to create and manage the user information.

# 8.1.1 Creating User

To create a new user, do the Following:

1. Place cursor at Admin tab in the main menu. The list of submenus incorporated in the Admin menu is displayed.
2. Select Manage Users & Roles option from the submenu. The list of options is displayed in the drop down.
3. Click Users option from the drop down. The Users screen with the list of existing users will be displayed as shown in the figure below.

|Admin Manage Users & Roles| | | | | | | |
|---|---|---|---|---|---|---|---|
|Users Listing of 2 records| | | | | | | |
|First Name|Last Name|Phone|Login Name|Start Date|End Date|Notes| |
|Default User|888-467 Admin|29-Feb-2012|00:00|Admin Usel|+1-888-467 ADMIN|23-Feb-201Z|12:48|

To create a new user, click Add button. The User Details page will appear where the information corresponding to the user can be entered as shown in the figure below.

# Admin. Manage Users & Roles Users - User Detail:

# User Details

|First Name|Last Name|
|---|---|
|Phone|Email|
|Login Name|Confirm Password|
|Start Date|End Date|
|Customer Name|Select One|
|Notes|Description|
|You have 1000 characters remaining for your notes.|You have 1000 characters remaining for your notes.|

Save Back

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 94
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Enter first name and last name of the user in the corresponding text fields.
2. Enter contact number of the user in the Phone text field.
3. Enter email-id of the user in the Email text field. Enter user name or login name of the user in the Login Name (User Name) text field.
4. Enter the password of the corresponding username in the Password text field.
5. Re-enter the password in the Confirm Password text field.

In both Username and Password,

- Minimum of three characters must be entered.
- Both upper and lower cases are allowed.
- Spaces are not allowed in between the characters in Username.

Special characters are not allowed in the Username. Only alphabets, underscores “_” and numeric characters are allowed. The first character must be alphabet. Alpha-numeric characters and special characters are allowed in passwords.

Enter Start Date in the corresponding field by selecting a date from the Calendar.

Enter End Date in the corresponding field by selecting a date from the Calendar. End Date should not be less than Start Date.

Select a Customer Name (i.e., name of the Client Organization) from the corresponding drop-down list.

Click Save button. Once the information is saved successfully, the message “User is saved. Please go to KB Assignments and assign a KB to the User.” will be prompted on the screen.

If the details provided are invalid, a warning message will be prompted.

If the login user name already exists, then the user will not be created and a message "User Name Already exists. Please try giving some other name “will be displayed.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 95
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

The field marked as “ ” are mandatory fields.

To select date from the Calendar, click the adjoining icon.

If the user is already created but the user role is not assigned to the respective user, then the Solix EDMS Standard Edition (SE) will restrict the user to login to the application even though the user id is valid.

The user is not allowed to access the Solix EDMS Standard Edition (SE) application before the specified start date and after the specified end date.

# 8.1.2 Editing an Existing User

This section explains the process to edit the information of the existing user which is defined during user registration in the application. To edit an existing user, do the following:

1. Place cursor at Admin tab in the Solix EDMS Standard Edition (SE) main menu. The list of submenus is displayed.
2. Select Manage Users & Roles option from the submenu. A list of options is displayed in the drop down.
3. Click Users option from the drop down. The Users screen with the list of existing users will be displayed.
4. From the users list, select the radio button adjacent to the desired user.
5. Click Edit button. The User Details page with the information corresponding to the selected user will be displayed as shown in the figure below.

Admin Manage Users Roles Users > User Details

# User Details

|First Name|Last Name|
|---|---|
|Admin|Admin|
|Phone|Email|
|+1-888-467-6549|aj_support@solixcom|
|Login Name (User Name)|Admin|
|Start Date|End Date|
|2011/11/22| |
|Customer Name| |
|Solix| |
|Notes|Description|
|You have 1000 characters remaining for your notes:| |

Save  Back

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 96
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

b. Click Save button, to save the modified information. A message stating “User is Updated” will be prompted on the screen.

The fields marked as and * are mandatory fields.

To select date from the Calendar, click the adjoining icon.

To return to the Users list screen from Add / Edit Details screen, click Back button.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 97
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 8.2 User Role Creation

Once the user is created in the application, the user is restricted to access the Solix EDMS Standard Edition (SE) application until a role is assigned to the user, even though the user is a valid user. This feature enables the user to define a role which can be assigned to new/existing user. This section explains the process to add and manage the user role information.

# 8.2.1 Navigation

To access User Roles link, login to Solix EDMS Standard Edition (SE) and follow the path: Admin > Manage Users & Roles > User Roles.

# 8.2.2 Add a User Role

To add a new user role, do the following:

1. Place cursor at Admin tab in the Solix EDMS Standard Edition (SE) main menu. The list of submenus is displayed.
2. Select Manage Users & Roles option from the submenu. The list of options is displayed in the drop down.
3. Click User Roles option from the drop down. The User Roles screen with the list of existing user roles is displayed as shown in the figure below.
4. Click Add button. The User Role Details screen appears which allows the user to enter the information corresponding to the user role.

# User Role Details

|User Role Name|Notes|Description|
|---|---|---|
|You have 1000 characters remaining for your notes.| | |
|Save|Back| |

In User Role Details screen, do the following:

1. Enter the name of the user role in the User Role Name text field.
2. Enter comments associated to user role in the Notes text field.
3. Click Save button. Once the information is saved successfully, a confirmation message will be prompted on the screen.

The fields marked as and * are mandatory fields. If the details provided are invalid, a warning message dialog box will be prompted. If the user role name already exists, a warning message about duplicate name will be prompted in the dialog box.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 98
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 8.2.3 Editing an Existing User Role

To edit an existing user role, do the following:

1. From the user roles list screen, select the radio button adjacent to desired user role.
2. Click Edit button. The User Role Details screen with the information corresponding to the selected user role will be displayed.
3. In Edit User Role Details screen, do the following:
1. Make the necessary changes in the required fields.
2. Click Save button, to save the modified information. Once the modified information is updated successfully, a confirmation message will be prompted.

The fields marked as and * are mandatory fields.

If the details provided are invalid, a warning message dialog box will be prompted.

To return to the User Role list screen from Add / Edit Details screen, click Back button.

# 8.2.4 Deleting User Role

To delete the user role, do the following:

1. In the User Roles page, select the radio button adjacent to the desired user role in the list.
2. Click Edit button. The User Role Details screen with the information corresponding to the selected user role will be displayed.
3. To delete the user role, click Delete button. A message stating that “Are you sure you want to delete the User Role?” will be prompted as shown in the figure below.

Message from webpage:

Are YOU sure you want to delete the User Role

Click OK to proceed with the deletion of the User Role

Click Cancel to cancel the operation and return to the screen

Click Ok button, to delete the User Role.

Click Cancel button, to deny the deletion.

User roles which have already been assigned to the user cannot be deleted.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 99
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 8.3 KB Source Target Definition

For the validation/data archiving process, it is mandatory to ensure the connectivity details associated with the source and target databases. This feature is designed to register the source or target database machine details in order to build the connectivity between both the databases while performing any activity in the Solix EDMS Standard Edition (SE) such as data validation, data masking, column comparison, and so on.

# 8.3.1 Navigation

To access KB Source Target Definitions link, login to Solix EDMS Standard Edition (SE) and follow the path: Admin > Manage Knowledgebase (KB) > KB Source target Definitions.

# 8.3.2 Add New KB Source Target Definitions

To add a new KB source target definition, do the following:

1. Place cursor at Admin tab in the main menu. The list of submenus will be displayed.
2. Select Manage Knowledgebase (KB) option from the submenu. The list of options is displayed in the drop down.
3. Click KB Source Target Definitions option from the drop down. The KB Source Target Definitions screen with the list of existing KB source target definitions will be displayed.
4. Click Add button, to add new source or target in the knowledgebase. The KB Source Target Definition Details screen appears where the information corresponding to the KB source target definition can be entered.

|Name|Type|
|---|---|
|Select One| |
|Machine Name|Host Name|
|Database|Instance Name|
|Select One| |
|Database User|Database Password|
|Database Phone Number| |
|Notes|Description|
|You have 1000 characters remaining for your notes.|You have 1000 characters remaining for your notes.|

Save
Test Connection
Back

In KB Source Target Definition Details screen, do the following:

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 100
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Enter the Name in the corresponding field.
2. Select the Type (Source or Target) from the corresponding drop down list.
3. Enter the Machine Name in the corresponding field.
4. Enter the Host Name/IP Address in the corresponding field. Here, the user can provide either hostname or IP Address.
5. Select Database (i.e., Oracle) from the corresponding drop-down list.
6. Enter Instance Name in the corresponding field.
7. Enter Database User in the corresponding field.
8. Enter Database Password in the corresponding field.
9. Enter Database Port Number in the corresponding field.
10. Enter the comments in the Notes.
11. Click Save button. Once the KB source or target is saved successfully, a confirmation message will be prompted on the screen.
12. Once the KB source or target is saved successfully, in order to verify the database connection click Test Connection button.
Based on the KB source or target details provided, if the database is connected successfully, then a message indicating the successful connection to the database will be prompted on the screen.
Based on the KB source or target details provided, if the connection to the specified database fails, an alert message will be prompted on the screen.

The field marked as “ ” are mandatory fields.

|Fields|Functionality|
|---|---|
|Name|Define a unique name of the KB source or KB target database.|
|Type|It enables the user to define whether the knowledge is associated to the source or target database.|
|Machine Name|This text box enables the user to define the machine name of server associated to Type selected (i.e., source or target).|
|Host Name / IP Address|This text box enables the user to define the host name of server associated to Type selected or IP address associated to the source or target database. Here, the user is provided an option to enter either hostname or IP Address.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 101
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

|Fields|Functionality|
|---|---|
|Database|This drop down enables the user to select the type of database (i.e., Oracle).|
|Instance Name|It allows the user to provide the instance name/service name of the source or target database.|
|Database User|It enables the user to enter the database user name of the source or target database.|
|Database Password|It enables the user to enter the database password corresponding to the given username of the source or target database.|
| | |
|Database Port Number|It enables the user to specify the port number of the source or target database.|
|Notes|It facilitates the user to enter the description associated to the KB source or KB target database.|
|Save|This button is deployed to verify the source or target database connectivity. If the given details are valid, the connectivity will be established and saved.|
|Test Connections|This button is deployed to verify the connectivity to the specified database. If the given details are valid, the database connectivity will be established and saved. If the given details are not valid, the database connectivity fails and alerts the user to verify the details.|
|Back|This button is employed to navigate to the previous screen from current screen.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 102
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 8.4 KB Definitions

Once the source or targets database information is registered in Solix EDMS Standard Edition (SE), the user should define a knowledgebase associated with the connectivity of source and target database to perform the archiving/ validation process effectively. This feature enables the user to create a knowledgebase and define the source and target for the respective KB. Solix EDMS Standard Edition (SE) is capable of populating metadata information of custom tables available in databases (i.e., source and target) into the respective knowledgebase automatically. Also, it maintains tables, columns, table relations and joins created in application which are used to build configuration to perform data archiving and data validation process.

# 8.4.1 Navigation

To access KB Definitions link, login to Solix EDMS Standard Edition (SE) and follow the path: Admin > Manage Knowledgebase (KB) > KB Definitions.

# 8.4.2 Define a new KB Definitions

To add a new KB definition, do the following:

1. Place cursor at Admin tab in the Solix EDMS Standard Edition (SE) main menu. The list of submenus is displayed.
2. Select Manage Knowledgebase (KB) option from the submenu. The list of options is displayed in the drop down.
3. Click KB Definitions option from the drop down. The KB Definitions screen with the list of existing KB definitions will be displayed.
4. Click Add button. The KB Definition Details screen appears to define the source and target databases to the knowledgebase.

|Admin|Manage Knowledgebase (K3)|K3 Defini-ions|K3 Defini-ion De-ail:|
|---|---|---|---|
|KB Definition Details|KB Name|Applicaticn Name|select One|
|Scurce Name|Target Name|Select One|Select One|
|Notes|Description|You have 1000 characters remaining in your notes| |
|Save|Data Sources|Back| |

In the KB Definition Details screen, do the following:

1. Enter the name of the knowledgebase in KB Name text field to register the knowledgebase with the specified name in the Solix EDMS Standard Edition (SE).

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 103
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

b. Select an Application Name from the corresponding drop down list.

c. Select an appropriate source for the KB from the Source Name drop down list.

d. Select an appropriate target for the KB from the Target Name drop down list.

e. Enter the comments in the Notes.

f. Click Save button. Once the KB definition is saved successfully, the respective KB definition will be registered in the application and a confirmation message will be displayed.

The field marked as “ ” are mandatory fields.

|Fields|Functionality|
|---|---|
|KB Name|It enables the user to define the name of the knowledge base.|
|Application Name|This drop down list displays the list of applications registered in the Solix EDMS Standard Edition (SE). It enables to define application associated to the knowledgebase.|
|Source Name|Displays the list of source databases registered in the KB Source Target Definitions and enables the user to define the source to the knowledge base.|
|Target Name|Displays the list of KB target databases registered in the KB Source Target Definitions and enables the user to define the target to the knowledge base.|
|Notes|It allows the user to enter the description associated to the KB definition.|
|Save|This button is deployed to save the KB definition.|
|Data Sources|This button is deployed to assign multiple data sources (i.e., source or target) to a single KB. It facilitates to extract and validate the data of various tables from the different source or target databases.|
|Back|This button is employed to navigate to the previous screen from current screen.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 104
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 8.4.3 Assigning Data Source

Data Source enables the user to assign the multiple data sources/targets to a single knowledgebase. Also, it manages to extract and validate the data of various tables from different source/target databases during archiving/validation process. (Note: Data source can be employed only for the saved KB definitions).

To assign an additional data source (i.e., source or target) to the KB, do the following:

1. In KB Definitions screen, select the KB for which a multiple data source/target have to be assigned.
2. Click Edit button. The KB Definition Details screen appears with the source and target defined for the respective KB as shown in the figure below.

|Admin|Manage Knowledgebase (KB)|KB Defini-ions|KB Defini-ion De-ail:|
|---|---|---|---|
|KB Name|Application Name|pracle|Oracle|
|scurce Name|Target Name|Vis scurce-10.2.152.251-VIs Host|Vis Target-10.2.152.251-Vis Target Host|
|Notes|Description|You have 1000 charatters emaining icr Ycur notes| |
|Save|Data Sources|Back| |

Click Data Source button, to assign another data source/target to the KB. The KB Data Source screen will be displayed with the list of sources/targets assigned to the KB as shown in the figure below.

|Aclmin|Manage Knowledgebase (KB)|KB Defini-ions|K3 Dara Scurces| | | |
|---|---|---|---|---|---|---|
|Listing Of 2Teconds|Search| | |Export As|Customize Columns| |
|KB Hame|Data Source Type|Data Source Name|Database|Machine Name|Address|Database Mame|
|Oracle|SOURCE|DEMO SOURCE-DEMO|ORACLE|DEMO HOST|10,2,152,197|DEMO|
|Oracle|TARGET|UAT SOURCE-UAT|ORACLE|UAT HOST|10,2,152,252|UAT|
|Add|Edit|Back| | | | |

Click Add button to add the source/target datasource details to the KB. The KB Data Source Details screen will be displayed as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 105
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Admin

# Manage Knowledgebase (KB)

# KB Definitions

# KB Definition Detail:

# KB Data Source Detail:

# KB Data Source Details

|Data Source Type|Data Source Name|
|---|---|
|Select One|Select One|
|Enable|Yes|

5. Select the type of data source (i.e., target or source) from the Data Source Type drop down list. For example, if Source option is selected, the list of source details will be extracted and displayed in the Data Source Name drop down list.

6. Select an appropriate data source from the Data Source Name drop down list, to assign the selected data source to the respective KB.

7. Select Yes/No option in the Enable, based on the option selected the data source will be enabled/disabled for the respective KB during archiving/validation process.

8. Click Save button, to assign the selected data source to the KB. Once the data sources is assigned successfully, the selected data source details will be appended to the existing data sources in KB Data Sources list screen.

The field marked as “*” are mandatory fields.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 106
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 8.5 KB Assignments

Once the knowledgebase is defined in the Solix EDMS Standard Edition (SE), it should be assigned to a user in order to enable the user to access the metadata pertaining to the knowledgebase. This feature is designed to assign the knowledgebase to the user who is already created in the application and empowered with the relevant user role.

# 8.5.1 Navigation

To access KB Assignment link, login to Solix EDMS Standard Edition (SE) and follow the path: Admin &gt; Manage Users &amp; Roles &gt; KB Assignment.

# 8.5.2 Add New KB Assignment

To assign a KB, do the following:

1. Place cursor at Admin tab in the Solix EDMS Standard Edition (SE) main menu. The list of submenus is displayed.
2. Select Manage Users &amp; Roles option from the submenu. The list of options is displayed in the drop down.
3. Click KB Assignments option from the drop down. The KB Assignments screen with the list of existing KB Assignments will be displayed.
4. Click Add button. The KB Assignments Details screen appears where the information corresponding to the KB assignment can be entered.

Admin Manage Users &amp; Roles &gt; KB Assignment:: KB Assignment Details

|Select One|User|User Role|
|---|---|---|
|Select One|Select One| |
|Notes|Description|You have 1000 characters remaining for your notes|
|Save|Back| |

5. In the KB Assignments Details page, do the following:

1. Select the knowledgebase to which the user and user role should be assigned from the KB drop down list.
2. Select the user from the User drop down list, to assign to the knowledgebase selected.
3. Select the user role from the User Role drop down list, to empower the selected user with the privileges defined in the corresponding user role.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 107
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

d. Enter comments in the Notes text field.

e. Click Save button. Once the information is saved successfully, a confirmation message will be prompted on the screen.

Once the KB Assignment is saved successfully, the selected user will be assigned to the specified knowledgebase with the selected user role. To proceed with archiving/validation process it is important that the SQL statements required to perform archiving/validation efficiently are designed or generated correctly.

The fields marked as and * are mandatory fields.

If the details provided are invalid, a warning message about the invalid details will be displayed on the screen.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 108
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 9 Manage Source/Target Dictionary

Manage Source / Target Dictionary is designed to manage and maintain the seed data associated to the source and target.

# 9.1 Database Queries

Solix EDMS Standard Edition (SE) provides the seed data for various activities performed during data masking/data validation. The seed data are database specific. Database Queries provides flexibility to modify the seed data as per the enterprise environment, if needed.

# 9.1.1 Navigation

To access Database Queries link, follow the path: Admin &gt; Manage Source / Target Dictionary &gt; Database Queries.

# 9.1.2 Edit the existing Database Query

To modify the database query, do the following:

1. Place cursor at Admin tab in the Solix EDMS Standard Edition (SE) main menu. Select Manage Source/Target Dictionary option from the submenu options displayed in the drop down.
2. Click Database Queries option from the drop down. The Database Queries screen with the list of existing database queries will be displayed.
3. Select the intended activity and click Edit button. The Database Queries screen will be displayed with the information associated to the corresponding database queries.

# Database Query Details

|Activity Name|Execution| | |
|---|---|---|---|
|~J_D-TAMASK_CRE-TION| |SOURCE| |
|Database| |Sequenc= Humk| |
|Microsoft SoLServer| | | |
|Object|Type|SOLStatement Type| |
|IndexScript| |~reate| |
|SOLStatement| |Elternative|ULStatement|
|CREATE INDEX APD_Srun_Id_i1 ON STableOwnerAJ_DATAMASK_Srun_ (RUN_ID, TABLE_ID)| |CREATE INDEX APD_Srun_Id_i1 ON STableOwnerAJ_DATAMASK_Srun_ (RUN_ID, TABLE_ID)| |

# Notes

Description

You have 1000 characters ining QuTnote

Save Back

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 109
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. The Activity Name is a non-editable text field.
2. Make the necessary changes in the corresponding fields.
3. Click Save button, to save the modified information. Once the modified information is updated successfully, a message will be prompted on the screen.
- If the details provided are invalid, a warning message dialog box is prompted.
- If the database query name already exists, a warning message about duplicate name is prompted in the dialog box.

The field marked as “|” are mandatory fields

Current version of Solix EDMS Standard Edition (SE) supports Oracle Database (9i, 10g, and 11g), SQL Server (2005 and 2008) and Sybase ASE(15.5).

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 110
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 9.2 Lookup Values

Lookup Values provide the flexibility to modify the seed data provided as a part of installation.

# 9.2.1 Navigation

To access Lookup Values link, follow the path: Admin &gt; Manage Source/Target Dictionary &gt; Lookup Values.

# 9.2.2 Edit Lookup Values

To add a new Lookup Values, do the following:

1. Place cursor at Admin tab in the Solix EDMS Standard Edition (SE) main menu and select Manage Source/Target Dictionary option from the submenu. The list of options is displayed in the drop down.
2. Click Lookup Values option from the drop down. The Lookup Values screen with the list of existing lookup values will be displayed.
3. Click Edit button to edit the lookup value details. The Lookup Values Details page appears to enter the information corresponding to the lookup values.

# Lookup Value Details

|Lookup Type|Database|
|---|---|
|PoLiG_DATARASE|Uracle|
|Lookup Code|Meaning|
|TARGET|TARGET|
|Lookup Value| |
|Notes| |

Saves   Delete  Back

4. In the Lookup Values Details screen, do the following:

1. Enter type of lookup value in the Lookup Type.
2. Select the database associated to the lookup value from the Database drop down list.
3. Enter the lookup value in the Lookup Code text field.
4. Enter the description of the corresponding look up value in the Meaning text field.
5. Check Yes/No option in the Run Lookup Value, based on the option selected the lookup value will be enabled/disabled.
6. Enter the comments in the Notes.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 111
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

g. Click Save button. Once the lookup value is saved, automatically the lookup will be appended or provisioned in the respective screens.

h. Once the information is saved successfully, a confirmation message dialog box is prompted.

If the details provided are invalid, a warning message dialog box is prompted.

If the lookup value already exists, a warning message about duplicate name is prompted in the dialog box.

The field marked as are mandatory fields.

If the details provided are invalid, a warning message dialog box is prompted.

To delete the Lookup Value, click Delete button appears in the Lookup Values Details screen.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 112
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 9.3 Data Type Mapping

Data Type Mapping provides the flexibility to map the data types across heterogeneous databases. Solix EDMS Standard Edition (SE) provides data types for various databases and enables to modify the seed data provided.

# 9.3.1 Navigation

To access Data Type Mapping link, follow the path: Admin &gt; Manage Source/Target Dictionary &gt; Data Type Mapping.

# 9.3.2 Edit Data Type Mapping

To edit the data type mapping details, do the following:

1. Place cursor at Admin tab in the Solix EDMS main menu and select Manage Source/Target Dictionary option from the submenu. The list of options is displayed in the drop down.
2. Click Data Type Mapping option from the drop down. The Data Type Mapping screen with the list of existing data type mapping will be displayed.
3. Select the intended data type mapping and click Add button. The Data Type Mapping screen appears to enter the information corresponding to the data type mapping.

# Admin. Manage Source Target Dictionary - DataType Mapping

# DataType Mapping Details

|Source Database|Target Database|
|---|---|
|Demo Database|Demo Database|
|Source|DataType|
|INTEGER|INTEGER|
|Precision Required|Scale Required|
|Charbytes Required| |

Save
Back

4. In the Data Type Mapping Details page, do the following:

1. Source Database and Target Database are non-editable text fields.
2. Modify the data type to be mapped from the source in the Source Data Type text field, if needed.
3. Modify the data type to which the source data type will be mapped in the target database in the Target Data Type text field, if needed.
4. Enter Y/N in the Precision Required text field, to allow or deny the digits after decimal point in the data during data type mapping. If “Y” is entered, then digits after decimal point in the data will be displayed.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 113
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

If “N” is entered, then digits after decimal point in the data will not be displayed.

1. Enter the number of digits to be depicted after decimal point in the Scale Required text field. (For example, if Scale Required is specified as “2”, then the data will depict two digits after decimal point. (for example, 10.24)
2. Enter Y/N in the CharByte Required text field, to measure the character data in terms of character length or a byte during data type mapping.

If “Y” is entered, then the character data will be measured in terms of character length.

If “N” is entered, then the character data will be measured in terms of byte.
3. Click Save button, to save the modified information. Once the information is saved successfully, a confirmation message dialog box is prompted.

If the details provided are invalid, a warning message dialog box is prompted.

If the data type mapping already exists, a warning message about duplicate name is prompted in the dialog box.

The field marked as “|” are mandatory fields.

Solix EDMS Standard Edition (SE) does not support special data types such as 'BLOB', 'CLOB', 'LONG', 'LONG RAW', 'RAW', 'BFILE', 'XML', 'IMAGE', 'BINARY', 'VARBINARY', 'BIT', 'BINARY_FLOAT', 'BINARY_DOUBLE', 'NCLOB', 'TEXT', 'NTEXT', 'UNITEXT' etc.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 114
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 9.4 Parameters

Parameters provide the flexibility to modify the seed data provided as a part of an installation when the user intended to change the default settings provided by Solix EDMS Standard Edition (SE).

# 9.4.1 Navigation

To access Parameters link, follow the path: Admin > Manage Source / Target Dictionary > Parameters.

# 9.4.2 Add New Parameters

To add a new parameter, do the following:

1. Place cursor at Admin tab in the Solix EDMS Standard Edition (SE) main menu and select Manage Source/Target Dictionary option from the submenu. The list of options is displayed in the drop down.
2. Click Parameters option from the drop down. The Parameters screen with the list of existing parameter will be displayed.
3. Select the intended parameter and click Edit button. The Parameters Details screen will be displayed with the information corresponding to the parameter.

# Parameter Details

|Parameter Name|Parameter Type|
|---|---|
|MASK_PREVIEW_ROWS| |
|Value|Default Value|
|Notes| |
|Description|Number rows to be displayed while preview sample data mask|
|You have 941 characters remaining for your notes| |

Save    Back

In the Parameters Details screen, do the following:

1. Parameter Name and Parameter Type are non-editable text fields.
2. Modify the value for parameter in the Parameter Value, if needed.
3. Modify the default value for parameter in the Parameter Default Value, if needed.
4. Enter the comments in the Notes.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 115
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Click Save button. Once the information is saved successfully, a confirmation message dialog box is prompted. If the details provided are invalid, a warning message dialog box will be prompted.

Once the parameter is saved successfully, the parameter created is provisioned wherever it is used in the application. For example, if the value of MASK_PREVIEW_ROWS parameter is provided as “10”, then the Preview results screen will display 10 mask preview records exclusively.

The field marked as “ ” are mandatory fields.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 116
---
# Solix EDMS Standard Edition (SE) 2.2

# 10 Data Assessment

Solix EDMS Database Assessment Standard Edition (SE) plays a significant role to assess the amount of archive eligible data in a given database based on business criteria and provide the snapshot of data distributed in schemas, database size and helps in identifying the Top N tables based on the table size. Solix EDMS Database Assessment Standard Edition (SE) provides the flexibility to perform object-wise and table-wise data assessment to identify the archive eligible data available in the database based on the business compliances and retention policies. There is also a provision to depict the number of rows and data size of archive eligible data in a graphical representation.

Solix EDMS Data Assessment (ILM Assessment) Standard Edition (SE) uses retention management to assess the archive eligible data based on the retention policy. Once retention policy is assigned to the data assessment, the data found within the given retention period before the specified retention date will be assessed for the archive eligibility.

Database Assessment also provides the flexibility to assess the data growth at both tables and database level based on the statistical analysis and forecast the prediction of future growth in both the tables size and database growth size in graphical representation. It also analysis data growth yearly and provides the statistics analysis of data growth through graphical representation in dashboard.

In Data Growth Forecast, the statistical analysis is performed based on the current data in the database. The database growth forecasted is an assumption so it may vary according to the business conditions.

We recommend data assessment to be executed on recent clones of production database or production database for better output and prediction of future database growth.

This chapter walks through the process to create Data Assessment, customizing the data assessment policies, assign the data assessment policy to the data assessment defined and execute the data assessment configured to assess the data in database based on the given criteria.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 117
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.1 Creation of Data assessment

To initiate the data assessment, firstly the user need to create a new data assessment or use existing data assessment to assess the amount of archive eligible data in a specified database based on the criteria defined.

# Navigation

To access Data Assessment link,

Click Settings bar appears on the left hand side of the screen. Once the bar is clicked, the administrative menus will be opened on the screen, then follow the path: Setting > Data Assessment > Assessment. The Assessment screen will be displayed as shown in the figure below.

# Settings= Data Assessment Assessment

|Listing|Search|
|---|---|
|Source Name|-ARCH|
|Tableds|Dizit HL_TRG SLTSTA|
|Ont_ARcR|Tabie/s Level Archive Flzit FL_TPG-SLTSTA|
|ARCF|Tabiel; Levcl Archive Digit|
|KXHL_ARC|Tabeds Eizit FL_TRG SLTSTA|
|TGT_BASIC|FL_TRG- SLTSTA|
|LECGER|Tauc ; Levdl Archive Dieit|
|O5 ORDERS|Taters Levelrcriv Dizit FL SRC FLDEV|

To create a new data assessment,

1. In the Assessment screen, click Add button. The Assessment Details screen is displayed as shown in the figure below.

# Assessment Details

|Assessment Name|Daa fcurce|
|---|---|
| |Select One|
|Assessment Type|Select One|
|Description|You have 0 characters remaining for Your notes|

Back

Enter the name of data assessment in the Assessment Name text field.
Select the appropriate database from the Data Source drop down list, to assess the eligible archived data from the selected database.
Select the type of assessment need to be accomplished from the Assessment Type drop down list. Herein, the creation of data assessment differs based on the

# ExponAs

Customize Columns

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 118
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

type of data assessment need to be carried out (i.e., database size, or object wise or data growth forecast).

The field marked as are mandatory fields.

Click Back button, to go back to previous screen.

Click Edit button, to modify the data assessment.

# 10.1.1 Creation of Database Size Snapshot Data assessment

This process enables to assess the data according to the data distributed in the schemas, size of database and size of the Top N tables. To create data assessment for Database Size Snapshot, do the following:

1. In Assessment Details screen, select Database Size Snapshot option from the Assessment Type drop down list. Additionally, the check boxes will be prompted in the screen
- Database Size: this check box enables to assess the data for eligible archive data based on size of the selected database and displayed in the pictorial representation.
- Schema Size: this check box enables to assess the data for eligible archive data according to the data distributed in each schema existing in database selected and summarizes the eligible archive data in the pictorial representation.
- Top N Table: This check box enables to assess the data based on the size of the Top N tables. Here, “N” implies the number of tables.
2. Select the required check box based on the requirement.
3. Enter the value adjacent to the Top N tables check box, to pull up the data of given number of top tables in the databases for data assessment.
4. Enter the description in the Description text box.
5. Click Save button, to save the data assessment.

Once created and saved successfully, a confirmation message will be prompted on the screen. Thereafter, the user can execute the data assessment created in the Data Assessment > Run Assessment.

The field marked as are mandatory fields.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 119
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.1.2 Creation of Object Level Archive Eligibility Data assessment

This process enables to assess the data object wise to identify the archive eligible data. This process carries out the Object Specific data assessment. To create data assessment for Object Level Archive Eligibility, do the following:

1. In Assessment Details screen, select Object Level Archive Eligibility option from the Assessment Type drop down list. Additionally, the Assessment Sub Type drop down will be prompted in the screen.
2. Select New Object / Use Existing object from the Assessment Sub Type drop down list.
- If New Object option is selected, enter the description and click Save button. Next,
1. The user need to add the tables to the object, populate the columns in the table, and build relations and joins. To understand the process, refer to adding tables section.
2. Define Criteria. To understand the process, refer to Defining Criteria section.
3. Generate a Code for data assessment based on the criteria defined. To understand the process, refer to Generating Code section.
4. Then, execute the data assessment.
- If Use Existing object option is selected, additionally, the Config Name drop down and Populate button will be prompted in the screen
1. The configuration designed for data archiving will be pulled up and displayed in the Config Name drop down. Hence, select the required configuration from the drop down.
2. Click Populate button, to populate the tables, columns, relations, joins, criteria, generated code existing in the selected configuration for the data assessment.
3. A confirmation message stating “Config details populated successfully.” will be prompted in the screen.
4. Then, execute the data assessment.

Thereafter, the user can execute the data assessment created in the Data Assessment &gt; Run Assessment.

The field marked as are mandatory fields.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 120
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.1.2.1 Adding Table to Data assessment

To create a new object for Object Level Archive Eligibility data assessment type, the user needs to add the tables in the data assessment.

1. In the Assessment screen, select the data assessment created and click Table button. The Assessment Tables screen will be displayed as shown in the figure below.

|Settings Data assessment= Assessment Assessment Tables List| | | |
|---|---|---|---|
|Listing 1-2 of 2 records|Search| | |
|Table Name|Table Owner|Forecast Column|SQL STATEMENT|
|A_PURGE_STATUS|AJ61| | |
|A_CONFIGS|AJ61|null|fghfghfgh|

Add Edit Columns Remove Relations Back

Firstly, add the table to the assessment. To add the table, do the following:
1. In the Assessment Tables screen, click Add button. The Assessment Tables Details screen will be displayed as shown in the figure below.

# Assessment Table Details

|TableOwner|Table Name|
|---|---|
|Select One|Select One|
|Driving Table|Yes|

Save Back

Select an appropriate table owner from the Table Owner drop down. Once table owner is selected, the table associated to the selected table owner will be pulled up and displayed in the Table Name drop down.
Select the required table name from the Table Name drop down.
Select Yes/No option of Driving Table, whether to define the selected table as Driving table or not. (Note: Make sure, at least one table should be a driving table in data assessment table).
Click Save button, to save the table for the data assessment.
Repeat the process to add tables further.

Once the table is added, then populate the columns in the table selected. To populate columns, do the following:

Export As Customize Columns

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 121
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# a.

In the Assessment Tables screen, select the table and click Column button. The Assessment Table Columns screen will be displayed as shown in the figure below.

Settings  Data Assessment    Assessment - Assessment Table-  Assessment Table Columns

|Column Name|Table Name|Primary Key Flag|Primary Key Sequence|Data Type|Nullable|
|---|---|---|---|---|---|
|ARCHIVE_PURGE|A_CONFIGS| | |VARCHAR2| |
|cormIT_FREQUENC1|A_CONFIGS| | |NUMBER| |
|cormit_LEVEL|A_CONFIGS| | |VARCHAR2| |
|ATTRIBUTE10|A_CONFIGS| | |VARCHAR2| |
|ATTRIBUTE9|A_CONFIGS| | |VARCHAR2| |
|ATTRIBUTE8|A_CONFIGS| | |VARCHAR2| |
|ATTRIBUTE7|A_CONFIGS| | |VARCHAR2| |
|ATTRIBUTE6|A_CONFIGS| | |VARCHAR2| |
|ATTRIBUTES|A_CONFIGS| | |VARCHAR2| |

Populate     Back

# b.

Click Populate button, to populate the columns existing the table for data assessment. (Note: Make sure that columns need to populate whenever any modification take place in the table column(s), to refresh with update table column details).

# c.

Click Back button, to navigate to the Assessment Tables screen.

# 4.

Next, build the relations and joins to establish relation between tables added in the. To build the relation, do the following:

# a.

In the Assessment Tables screen, select the table and click Relations button. The Table Relations Details screen will be displayed as shown in the figure below.

# Table Relation Details

|Table Name| |Parent Table Name| |
|---|---|---|---|
|select One|select One| | |
|Table Name|Table Owner|Parent Table Name|Parent Table Owner|

Add      Back

# b.

Select the table from the Table Name drop down.

# c.

Select the parent table (i.e., driving table) from the Parent Table Name drop down.

Export As    Customize Columns

Help

Is Joins Exist

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 122
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.1.2.2 Defining Criteria for the Data assessment

Once Data assessment is created successfully, the next step would be to set criteria to run the data assessment. If not, entire data in all the selected tables will be lost.

# 10.1.2.1 Creating Joins in the Data Assessment Table

1. Click Add button. A confirmation message stating “Assessment Table Relation is Saved” will be prompted in the screen.
2. Once relation is saved, then create joins in the relation. Hover on the table name appears in the list box.
3. Click on Joins hyperlink appears beneath the table name. The Join Columns Details popup screen will be prompted as shown in the figure below.

Click Back button, to navigate to the previous screen.

The field marked as are mandatory fields.

Click Remove button, to delete the table relations or joins.

In the Assessment Tables screen, user can delete the table from the list by clicking Remove button.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 123
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# To define criteria, do the following:

1. In the Assessment screen, select the required data assessment created and click Criteria button. The Assessment Criteria List screen will be displayed.
2. Click Add button, to define a new criteria. The Assessment Criteria Details screen will be displayed.
3. Enter name of criteria in the Criteria Name text box.
4. Select an appropriate type of criteria from the Criteria Type drop down list. Based on the type of criteria selected, the fields prompted in the screen will vary as shown in the figure below.

|Settings|Data Assessment > Assessment|Assessment Criteria Details|
|---|---|---|
|Criteria Name|Criteria Type|Dependent|
|Table Name|Column Name|select One|
|Join Type|Operator|select One|
|Value Type|Value Data Type|Select One|
|Value Foimal|Parameter Mandatony|null|
|Link Criteria|sequence No|Select One|
|Description|null| |
|You have 996 characters remaining or your notes_|You have 996 characters remaining or your notes_|You have 996 characters remaining or your notes_|

Enter the criteria details in the corresponding fields.
Click Save button to save the data assessment criteria. Once the criteria are saved successfully, a message will be prompted on the screen.

The field marked as are mandatory fields.

Click Back button, go back to Assessment Module Criteria List screen.

Click Edit button, to modify the given criteria details.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 124
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Assessment Module Criteria Details

|Fields|Functionality|
|---|---|
|Criteria Name|Define a name for the criteria in Data assessment. This drop down enables the user to select an appropriate type of criteria. The criteria type can be Static, Dependent and Independent. Static: It implies that the data assessment actions will be based on the value specified in Criteria. Dependent: It implies that the criteria designed are dependent on a particular column of the specific table. Independent: It implies that the criteria are independent of tables and columns associated to specific Data assessment.|
|Criteria Type| |
|Table Name|This drop down enables the user to select an appropriate table that holds the attribute value. Based on the table selected, the corresponding columns will be listed in this drop down. It enables the user to select the column on which the respective criteria will be applicable.|
|Column Name| |
|Join Type|This drop down enables the user to select an appropriate operand required for the criteria. (i.e., AND or OR).|
|Operator|This drop down enables the user to select an appropriate conditional operator required to design criteria. (i.e., =, >, <, <= and so on).|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 125
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

This drop down enables the user to define the type of parameter value (i.e., Value or Dependent SQL)

# Value Type

Value: It implies that the data is fetched based on the value provided in the Value text box.

Dependent SQL: It implies that the SQL statement will be generated based on dependent variable(s) which may be derived from the earlier parameter(s).

For example,

"SELECT ORGANIZATION_ID, ORGANIZATION_NAME FROM ORG_ORGANIZATION_DEFINITIONS" where organization name will be displayed at run time parameters for end user ease and organization id will be used in criteria.

SQL: During the runtime, the SQL statement will be executed and the archiving will be executed based on the value obtained from running the SQL script specified in Value.

For example,

SELECT ORGANIZATION_ID FROM ORG_ORGANIZATION_DEFINITIONS

This drop down facilitates to select an appropriate data type of the parameter. (i.e., Number, String, Date).

# Data Type

Note: For the “Dependent SQL” and “SQL” value type, “String” should be selected by default.

# Format

If the Data type is “Date”, this text box enables the user to provide the format of date. For example, MM/DD/YYYY.

This drop down enables the user to define the parameter as mandatory or not (i.e., Yes or No).

# Parameter Mandatory

Yes- it implies that the parameter is a mandatory, the value must be entered

No–it implies that the parameter is not mandatory.

# Sequence No

This text box enables the user to enter the Sequence of Criteria while execution.

Exclusively when “OR” operator is selected in Join, this drop down list enables the user to link the current criteria to this existing criteria and place it in parenthesis during Data Assessment.

# Value

This text enables the user to enter the appropriate value of the parameter according to the Value Type selected.

# Default Value

This text enables the user to enter the default value of the parameter.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 126
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Description

This text box enables the user to enter the description pertaining to the criteria.

Save
This button is employed to save the criteria details.

# 10.1.2.3 Generating ANSI SQL code for Data assessment

Once the criteria are defined, then user needs to generate dynamic ANSI SQL code for a selected data assessment. The generated ANSI SQL code will be stored in the central repository to run a particular data assessment anytime in the future. This ANSI SQL code can select and insert data from source to target database configured respectively.

To generate code for a data assessment, do the following:

1. In the Assessment screen, select the data assessment created and click Generate Code button. It might take several minutes for the code to generate. On completion, a confirmation message stating “Selected Assessment code generation successful” will be displayed in the screen.
2. The SQL Statements will be generated and stored in the associated tables of selected data assessment.

# Assessment Table Details

|TableOwner|TableName|
|---|---|
|AJ61|A_PURGE_STATUS|
|Driing Table|Yes|
|SQLStatement|SELECT COUNT(*) FROM ^ JM1.AJ_PURGE_STATUS AJBIAJ_CONFIGS WHERE AND ^JBI.AJ_PURGE_STATUS.CONFIG_ID = ^ J61.AJ_CONFIGSCONFIG_ID|

# 10.1.2.4 Creating Event Triggers for Data assessment

Solix EDMS Data Assessment Standard Edition (SE) also generates ANSI SQL statements to perform assessment. In case, there is a requirement to perform other database operations post/pre to the activities, this feature provides the flexibility to execute block of SQL statements (for example, PL/SQL statements for Oracle database) for post/pre the activities. Also, enables the user to create anonymous blocks which can be executed.

To ANSI SQL statements for a data assessment, do the following:

1. In the Assessment screen, select the data assessment created and click Generate Code button. The Event Triggers screen will be displayed with the list of existing event triggers.
2. Click Add button. The Event Triggers Details screen appears to enter the information corresponding to the event trigger.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 127
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Event

| |Trigger Details| |
|---|---|---|
|Action|Assessment Name| |
|DATA ASSESSMENT| |HGGHIGHJ|
|Sequence| |Activity|
|Execution Type| |Run Event Trigger|
|Pre| |Yes|

# Execution Query

Description

You have 1000 characters remaining for your notes

Save
Back
# Instructions

1. In the Event Triggers Details screen, do the following:

The field marked as | are mandatory fields.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 128
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.1.3 Creation of Table - Level Archive Eligibility Data assessment

This process enables to assess the table data to identify the archive eligible data in the tables based on the simple criteria or applying retention policies. This process carries out the Table-wise data assessment. To create data assessment for Table Level Archive Eligibility, do the following:

1. In Assessment Details screen, select Table Level Archive Eligibility option from the Assessment Type drop down list. Additionally, the Assessment Sub Type drop down will be prompted in the screen.
2. Click Save button, to save the data assessment. Once the data assessment is saved, then user need to add the tables to the data assessment, populate the columns in the table and define criteria.
1. The user needs to add the tables to the data assessment, populate the columns in the table. To understand the process, refer to adding tables section.
2. Define Criteria. To understand the process, refer to Defining Criteria section.
3. Generate a Code for data assessment based on the criteria defined. To understand the process, refer to Generating Code section.

The field marked as | are mandatory fields. Event trigger is not applicable for the Table Level Archive Eligibility.

# 10.1.3.1 Adding Table to Data assessment

To create a new object for Table - Level Archive Eligibility data assessment type, the user needs to add the tables in the data assessment.

1. In the Assessment screen, select the data assessment created and click Table button. The Assessment Tables screen will be displayed.
2. Firstly, add the table to the module. To add the table in the module, do the following:
1. In the Assessment Tables screen, click Add button. The Assessment Module Tables Details screen will be displayed as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 129
---
# Solix EDMS Standard Edition (SE) 2.2

# Assessment Table Details

|Table Owner|Table Name|
|---|---|
|ONT|Select One|

# Dae Co umn

|Show Nullable Date Columns|Select One|
|---|---|
|Select an appropriate table owner from the Table Owner drop down. Once table owner is selected, the table associated to the selected table owner will be pulled up and displayed in the Table Name drop down. To populate including nullable date columns in the Column Name drop down, select Show Nullable Date Columns check box. Select the required table name from the Table Name drop down. Once table name is selected, the date columns (not nullable) in the selected table will populate in the Column Name drop down. Click Save button, to save the table for the module. Repeat the process to add tables further.|Select an appropriate table owner from the Table Owner drop down. Once table owner is selected, the table associated to the selected table owner will be pulled up and displayed in the Table Name drop down. To populate including nullable date columns in the Column Name drop down, select Show Nullable Date Columns check box. Select the required table name from the Table Name drop down. Once table name is selected, the date columns (not nullable) in the selected table will populate in the Column Name drop down. Click Save button, to save the table for the module. Repeat the process to add tables further.|

# 3. Once the table is added, then populate the columns in the table selected. To populate columns, do the following:

a. In the Assessment Tables screen, select the table and click Column button. The Assessment Table Columns screen will be displayed with the columns in the table.

# Listing of 162 records

|Column Name|Table Name|Primary Key Flag|Primary Key Sequence|Data Type|Nullable|
|---|---|---|---|---|---|
|PAY_"HEN_ PAID|PHA| | |VARCHARZ| |
|ENABLE_ALL_SITES|PHA| | |VARCHARZ| |
|LAST_UPDATED_PROC|PHA| | |VARCHARZ| |
|TAX_ATTRIBUTE_UPD|PHA| | |VARCHARZ| |
|STYLE_ID|PHA| | |NUMBER| |
|CAT_ADMIN_AUTH_Et|PHA| | |VARCHARZ| |
|SUPPLIER_AUTH_ENA|PHA| | |VARCHARZ| |
|LOcK_OWNER_USER|PHA| | |NUMBER| |
|Lock OWNER ROLE|PHA| | |VARCHARZ| |

b. Click Populate button, to populate the columns existing the table for data assessment. (Note: Make sure that columns need to populate whenever any modification take place in the table column(s), to refresh with update table column details).

c. Click Back button, to navigate to the Assessment Tables screen.

Next, the user can create a criteria (refer to Defining Criteria) or apply retention policy on the data assessment. If Criteria defined for the data assessment, it is mandatory to generate a code (refer to Generating ANSI SQL Code).

# Product User Manual

Export As Customize Columns

Copyright ©2014 Solix Technologies, Inc. All rights reserved Page | 130
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

The field marked as | are mandatory fields.

# 10.1.3.2 Defining Criteria for the Data assessment

Once Data assessment is created successfully, the next step would be to set criteria to run the data assessment. If not, entire data in all the selected tables will be lost.

To define criteria, do the following:

1. In the Assessment screen, select the required data assessment created and click Criteria button. The Assessment Date Criteria screen will be displayed.
2. Already, if Criteria is defined for the assessment, Then Criteria Format shows the criteria value defined for the assessment.

|Criteria Format|Criteria Value| |
|---|---|---|
|dd-mon-YYYY|Example Format : 06-Nov-2014|31-Dec-2005|

Update

Delete

Cancel

Click Update button, to save the modified criteria value.

Click Delete button, to delete the criteria defined for the assessment.

If Criteria is not defined, a message stating “No Criteria is defined for this Assessment. Please click Add to define criteria.” is displayed in the screen.

1. Click Add button, to define criteria for the selected assessment. The Criteria Format section will display in the screen as shown in the figure below.

|Criteria Format| |Criteria Value|
|---|---|---|
|dd-mon-YYYY|Example Format : 06-Nov-2014|p6-Nov-2014|

Add
Cancel

By default, the sys-date will be displayed in the Criteria Value.
Select the required date using visual calendar in the Criteria Value, to run the data assessment based on that date and consider all the data until the specified date as archive eligible data.
Click Add button, to update the new date. Once the criteria are saved successfully, a message will be prompted on the screen.

Click Cancel button, to exit the criteria screen.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 131
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

In case, the user click Add button when Criteria value is Sys date then an error message stating “Provided Date Value is current System Date, do you want to run assessment with current System Date?” is prompted in the screen.

# 10.1.3.3 Generating ANSI SQL code for Data assessment

Once the criteria are defined, then user needs to generate dynamic ANSI SQL code for a selected data assessment. The generated ANSI SQL code will be stored in the central repository to run a particular data assessment anytime in the future. This ANSI SQL code can select and insert data from source to target database configured respectively.

To generate code for a data assessment, do the following:

1. In the Assessment screen, select the data assessment created and click Generate Code button. It might take several minutes for the code to generate. On completion, a confirmation message stating “Selected Assessment code generation successful” will be displayed in the screen.
2. The SQL Statements will be generated and stored in the associated tables of selected data assessment.

# 10.1.4 Creation of Data Growth Multiple Tables Forecast Data assessment

This process enables to analysis the data growth of business in the specified duration (i.e., yearly/monthly/day basis) based on the multiple table data. It forecast the future growth of business data in the graphical presentation that helps to understand the strategy to archive the data timely for improving the data storage management.

To create data assessment for Data Growth Multiple Tables Forecast, do the following:

1. In Assessment Module Details screen, select Data Growth Table Level Forecast option from the Assessment Type drop down list.
2. Click Save button, to save the data assessment. Once the data assessment is saved, then user needs to add the tables to the module, and populate the columns in the table. To understand the process, refer to adding tables section.
3. Generate a Code for data assessment based on the criteria defined. To understand the process, refer to Generating Code section.
4. Thereafter, the user can execute the data assessment created in the Data Assessment &gt; Run Assessment.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 132
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.1.4.1 Adding Table to Data assessment

To create a new object for Data Growth Multiple Tables Forecast Data assessment, the user needs to add the tables in the data assessment.

1. In the Assessment screen, select the data assessment created and click Table button. The Assessment Tables screen will be displayed.
2. Firstly, add the table to the module. To add the table in the module, do the following:
1. In the Assessment Tables screen, click Add button. The Assessment Tables Details screen will be displayed as shown in the figure below.
2. Select an appropriate table owner from the Table Owner drop down. Once table owner is selected, the table associated to the selected table owner will be pulled up and displayed in the Table Name drop down.
- To populate including nullable date columns in the Column Name drop down, select Show Nullable Date Columns check box.
3. Select the required table name from the Table Name drop down. Once table name is selected, the date columns (not nullable) in the selected table will populate in the Column Name drop down.
4. Click Save button, to save the table for the module.
5. Repeat the process to add tables further.
3. Once the table is added, then populate the columns in the table selected. To populate columns, do the following:
1. In the Assessment Tables screen, select the table and click Column button. The Assessment Table Columns screen will be displayed with the columns in the table.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 133
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

b. Click Populate button, to populate the columns existing the table for data assessment. (Note: Make sure that columns need to populate whenever any modification take place in the table column(s), to refresh with update table column details).

c. Click Back button, to navigate to the Assessment Tables screen. Then, the user need to generate code for database assessment.

# 10.1.4.2 Generating ANSI SQL code for Data assessment

Once the criteria are defined, then user needs to generate dynamic ANSI SQL code for a selected data assessment. The generated ANSI SQL code will be stored in the central repository to run a particular data assessment anytime in the future. This ANSI SQL code can select and insert data from source to target database configured respectively.

To generate code for a data assessment, do the following:

1. In the Assessment screen, select the data assessment created and click Generate Code button. It might take several minutes for the code to generate. On completion, a confirmation message stating “Selected Assessment code generation successful” will be displayed in the screen.
2. The SQL Statements will be generated and stored in the associated tables of selected data assessment.

# 10.1.5 Creation of Forecast on Top Table Data assessment

This process enables to analysis the data growth of business in the specified duration (i.e., yearly/monthly/day basis) based on the top tables. It forecast the future growth of business data in the graphical presentation that helps to understand the strategy to archive the data timely for improving the data storage management.

To create data assessment for Data Growth Forecast on Top Table, do the following:

1. In Assessment Module Details screen, select Data Growth Table Level Forecast option from the Assessment Type drop down list.
2. Click Save button, to save the data assessment. Once the data assessment is saved, then user needs to add the tables to the module, and populate the columns in the table. To understand the process, refer to adding tables section.
3. Generate a Code for data assessment based on the criteria defined. To understand the process, refer to Generating Code section.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 134
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.1.5.1 Adding Table to Data assessment

To create a new object for Data Growth Multiple Tables Forecast Data assessment, the user needs to add the tables in the data assessment.

1. In the Assessment screen, select the data assessment created and click Table button. The Assessment Tables screen will be displayed.
2. Firstly, add the table to the module. To add the table in the module, do the following:
1. In the Assessment Tables screen, click Add button. The Assessment Tables Details screen will be displayed as shown in the figure below.
2. Select an appropriate table owner from the Table Owner drop down. Once table owner is selected, the table associated to the selected table owner will be pulled up and displayed in the Table Name drop down.
- To populate including nullable date columns in the Column Name drop down, select Show Nullable Date Columns check box.
3. Select the required table name from the Table Name drop down. Once table name is selected, the date columns (not nullable) in the selected table will populate in the Column Name drop down.
4. Click Save button, to save the table for the module.
5. Repeat the process to add tables further.
3. Once the table is added, then populate the columns in the table selected. To populate columns, do the following:

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 135
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.1.5.2 Generating ANSI SQL code for Data assessment

Once the criteria are defined, then user needs to generate dynamic ANSI SQL code for a selected data assessment. The generated ANSI SQL code will be stored in the central repository to run a particular data assessment anytime in the future. This ANSI SQL code can select and insert data from source to target database configured respectively.

# To generate code for a data assessment, do the following:

1. In the Assessment screen, select the data assessment created and click Generate Code button. It might take several minutes for the code to generate. On completion, a confirmation message stating “Selected Assessment code generation successful” will be displayed in the screen.
2. The SQL Statements will be generated and stored in the associated tables of selected data assessment.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 136
---
Solix EDMS Standard Edition (SE) 2.2                                                              Product User Manual

                                    Copyright ©2014 Solix Technologies, Inc. All rights reserved                  Page | 137
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.2 Execution of Data assessment

Once the data assessment is created successfully, the data assessment can be executed. Based on the data assessment setup, the data from the database will be assessed and the output will be represented in the pictorial presentation that elaborates the eligible data in the database accordingly.

To execute data assessment, do the following:

1. Navigate to the following path: Data Assessment > Run Assessment.

|Data Assessment|Run Assessments| | |
|---|---|---|---|
|Listing 1-9 of 17 records| | | |
|Assessment Name|Assessment Type|Source Name|Description|
|TEST|Table Level Archive Eligibility|DEV_SRC-SUPR12| |
|INSERT_DB_TEST|Data Growth Multiple Table|DEV_SRC-SUPR12| |
|INSERT_TEST|Data Growth Multiple Table|DEV_SRC-SUPR12| |
|LOACL_BASIC|Database Size Snapshot|DEV_SRC-SUPR12| |
|KY_ODULE|Database Size Snapshot|DEV_SRC-SUPR12| |
|KODULE_TEST|Object Level Archive Eligibility|DEV_SRC-SUPR12| |
|HGJGHJGHJ|Object Level Archive Eligibility|DEV_SRC-SUPR12| |
|DGAT ONT1|Table Level Archive Eligibility|DEV_SRC-SUPR12| |
|CGAT|Table Level Archive Eligibility|DEV_SRC-SUPR12| |

Select the intended data assessment and click the Run button, it will display the Run Parameters Details screen. In case of any default value provided at data assessment setup time, those values will appear on the parameters screen. Users can override those parameter values if required and click the Continue Button to carry out the execution process.
A unique Run-ID will be generated and displayed in the Run Schedule screen. To monitor the status of the data assessment, click on Run ID to navigate to the Status Monitor screen. (Status > Status Monitor).

Help

Export As    Customize Columns

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 138
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.3 Status Monitor

Status monitor serves as a dashboard to check the status of activities that have been executed. The function monitors the progress of jobs scheduled for run. It also gives a summary report of the jobs run.

Status Monitor allows to monitor the progress of all the activities scheduled for executing in Solix EDMS Standard Edition (SE).

Status Monitor also provides Previews, Job details, Log and so on.

The Status Monitor displays the list of all the jobs run for execution along with details including status. In Status Monitor screen, refer to the Run IDs in the first column to locate a specific assessment job.

The status is shown as ‘In Process’ while the process is still in progress or has just initiated. On completion of data assessment, the status of the corresponding activity will turns into ‘Process Completed’.

# 10.3.1 Navigation

To access status monitor link, follow the path: Schedule & Status > Status Monitor.

Schedule Status Status Monitor

Refresh AII Records

Listing 1-9 of 15 records Search Export As Customize Columns

|Run Id|Object Name|Status|Activity|Start Date|End Date|Preview|Parameter Value|
|---|---|---|---|---|---|---|---|
|100845|GHM1|Process Completed|DATA_ASSESSMENT|20-Sep-2013 15:02:11|20-Sep-2013 15:02:22| | |
|100ad4|APPLE|Process Completed|DATA_ASSESSMENT|13-Sep-2013 18:14:21|13-Sep-2013 18:14:23| | |
|100843| |Process Completed|DATA_ASSESSMENT|13-Sep-2013 15:00:23|13-Sep-2013 15:00:33| | |
|100842| |Process Completed|DATA_ASSESSMENT|13-Sep-2013 11:11:32|13-Sep-2013 11:11:43| | |
|100840| |Process Completed|DATA_ASSESSMENT|12-Sep-2013 15:20:46|12-Sep-2013 15:20:46| | |
|100838|GHM1|Process Completed|DATA_ASSESSMENT|06-Sep-2013 12:43:26|06-Sep-2013 12:43:28| | |
|100837|GHM|Process Completed|DATA_ASSESSMENT|06-Sep-2013 12:38:25|06-Sep-2013 12:38:27| | |
|100836|QQW4|Process Failed|DATA_ASSESSMENT|06-Sep-2013 10:27:46|06-Sep-2013 10:27:48| | |
|100835|OO1|Process Completed|DATA_ASSESSMENT|05-Sep-2013 19:20:403|05-Sep-2013 19:20:404| | |

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 139
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.3.2 Preview

Once the status of data assessment turned into ‘Process Completed’, the user can be able to view the pictorial representation of the respective data assessment. To preview the data assessment output, do the following:

1. In Status Monitor screen, click Preview icon of the corresponding Run ID.

The pictorial presentation screen will be displayed with consolidated results of data assessment executed based on the criteria selected (i.e., data assessment type) in the data assessment. Based the data assessment type, the graph displayed in the Preview screen will varies accordingly, such as:

# 10.3.2.1 For Database Snapshot

Data assessment is executed on the selected database and provides a snapshot of the database size, data distributed among the schema in the database.

|Run ID|100001|
|---|---|
|Assessment Name|BASIC|
|Executed On|2014-11-07 09.51:26|
|DataBase Name|SOURCE-ORACLE-10.2.152.167|
|DataBase Size|20,506.22 (GB)|
|DataBase Type|ORACLE|
|Exclude Schemas|Exclude|

# Assessment Details

# Top - Schemas

|Schema Name|Space Used (GB)|
|---|---|
|CL34.9|6,637.92|
|CLLC.16 %|5,530.52|
|READER 0.21|4,643.53|
|XXML|685.73|
|INV.0.22 %|639.17|
|SYS|277.80|
|AR -3|116.10|
|AJINNLO.28 %|92.73|
|IBY . 0.29|86.92|
|ODI_EBS_ML043 %|81.43|
|APPLSYS.0.46|54.82|
|ODI_EBS_MLPEBS_WK|53.61|
|APPS:0.49|41.04|
|WSH:0.61|40.70|
|XLAZ4Bl|31.23|
|XXML3.36|28.96|

# Assessment Details

# Top Tables

|Table Name|Table Size(GB)|
|---|---|
|[GL] GL_JE_LINES|2,142.86|
|[XLA] XLA_AE_UNES|964.09|
|[XLA] XLA_DISTRIBUTION_LINKS|894.93|
|[GL] GL_JE_HEADERS|784.88|
|[GL] GL_IMPORT_REFERENCES|661.56|
|[ZX] ZX_LINES_DET_FACTORS|508.08|
|[XLA] XLA_AE_HEADERS|380.83|
|[XLA] XLA_TRIAL_BALANCES|326.15|
|[AR] AR_DISTRIBUTIONS_ALL|297.62|
|[AR] AR_RECEIVABLE_APPLICATIONS_ALL|292.57|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 140
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Graphical representation: Shows the size of database, data distributed among the different schemas in the database, and size of each table in the Top N tables. (N- Represent number of tables) in pictorial and graphical presentation.

Grid table: Provides the consolidated details and elaborated information about the database size occupied by each schemas and Top N tables in the database.

To exclude the schema(s), click Exclude Schemas drop down appears at the right-top corner of the dashboard, the drop down display the list of schemas available in the selected database. Select the checkbox of required schemas from the schemas available in the selected database and click Exclude button. The screen gets refresh and display the graphical representation and grid tab according to the data of schemas included in the data assessment.

|Exclude Schemas|Exclude|
|---|---|
|[Select all]| |
|QASOURCE| |
|S5| |
|QATARGET| |
|APPLSYS| |
|2P3| |
|XLA| |

Provides flexibility to export the graphical representation of data assessment output into .pdf format.

# 10.3.2.2 For Table Level Archive Eligibility (Criteria Based Assessment)

Data assessment is executed based on the criteria (i.e., Date) provided by the user and shows the percentage of active and inactive rows existing in the selected top tables.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 141
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# SOLIX

# Enterprise Data Management Suite

# Archive Eligibility

|abi|4o6,370,500|53,45.05|L107,40n.55| |
|---|---|---|---|---|
|462 514013|29},A22614|17023.41|1,475.JJZ,9z0| |
|customer MX LINE|705,n0d,757|[dd,[37770|416,011.67|66.151.75|
|ADJUSTME|Iaa 570,070|0en0 53| | |
| |L78.080,774|5,463.605|17.55176| |

Graphical representation shows the Active rows/data space and In-active rows/data space in the top tables.

Grid tables provide the Table Assessment Summary and Data Assessment Summary.

Table Assessment Summary: Provides the detailed information associated to the Total rows, selected rows for eligibility, total space used and size of data space eligible within the Space Used in each top tables.

Data Assessment Summary: Provides the consolidated information associated to the Active rows/data space and In-active rows/data space of top tables.

Provides flexibility to export the graphical representation of data assessment output into .pdf format.

# 10.3.2.3 For Table Level Archive Eligibility (Policy Based Assessment)

Data assessment is executed based on the retention policy applied on the selected top tables and shows the percentage of total active and inactive rows found during the retention in the selected top tables.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 142
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# SOLIX

# Enterprise Data Management Suite 2.2

# Archive Eligibility - Summary

|Selected Rows|Total SUEHB|Eligible SEHB|
|---|---|---|
|GLG_JE_LES|46,047|5551 557 606|
|BLNCES|LAZ0 Z07|55+JJ1o|
|AOLA HFADFR|4i8734|770|

Graphical representation shows the Active rows/data space and In-active rows/data space found in the top tables during the retention period.

Grid tables provide the Table Assessment Summary and Data Assessment Summary.

# Table Assessment Summary:

Provides the detailed information associated to the Total rows, selected rows for eligibility, total space used and size of data space eligible within the Space Used in each top tables during the retention period.

# Data Assessment Summary:

Provides the consolidated information associated to the Active rows/data space and In-active rows/data space of top tables during the retention period.

Provides flexibility to export the graphical representation of data assessment output into .pdf format.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 143
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.3.2.4 Table Level Forecast

Data Assessment is executed on the selected tables and analysis the data growth of business based on the selected tables for past 5 years. Therefore predict the future data growth in those tables size for the next 5 years.

It provides the consolidated summary of data growth for all the selected tables. Also provides the Data growth for each table in size. Display Database Growth Forecast based on Top Tables check box – enables to predict the future of database growth based on the top tables’ growth. It check box is selected, an additional graph is shown in the figure.

# SOLIX Enterprise Data Management Suite

Run ID : 100002

Assessment Time: TABLE GROWTH

Executed On: 2014-11-07 10:00:01

Database Name: SOURCE-ORACLE-10.2.152.167

Database Size: 20,506.22 (GB)

Database Type: ORACLE

# Data Growth Analysis Summary For All Tables

|Year|Projection Type|Forecasted Size (GB)|
|---|---|---|
|2010|Actual Data|355.93|
|2011|Actual Data|1033.0+|
|2012|Actual Data|4507.9|
|2013|Actual Data|7796.33|
|2014|Projected Data|11317.37|
|2015|Projected Data|15721.56|
|2016|Projected Data|70788.01|
|2017|Projected Data|26517.24|
|2018|Projected Data|37900.16|
|2019|Projected Data|39963.86|

# Data Growth Analysis For Table AR AR_DISTRIBUIONS_ALL

|Year|Projection Type|Forecasted Size (GB)|
|---|---|---|
|2010|Actual Data|46657.71|
|2011|Actual Data|126049.79|
|2012|Actual Data|232741.65|
|2013|Actual Data|390105.73|
|2014|Projected Data|564769.9|
|2015|Projected Data|769325.76|
|2016|Projected Data|1555766.95|
|2017|Projected Data|1875008.60|

# Data Growth Analysis For Table AR AR_RECEIVABLE_APPLICATIONS_ALL

|Year|Projection Type|Forecasted Size (GB)|
|---|---|---|
|2010|Actual Data|82908.49|
|2011|Actual Data|219343.15|
|2012|Actual Data|403520.75|
|2013|Actual Data|671231.68|
|2014|Projected Data|976741.37|
|2015|Projected Data|14332363.74|
|2016|Projected Data|1739755.51|
|2017|Projected Data|2198413.66|
|2018|Projected Data|2706341.20|
|2019|Projected Data|7269537.14|

# Data Growth Analysis For Table GLGL_IMPORT_REFERENCES

|Year|Projection Type|Forecasted Size (GB)|
|---|---|---|
|2010|Actual Data| |
|2011|Projected Data|23256.45|
|2012|Actual Data|8550.0|
|2013|Actual Data|1158036.78|
|2014|Projected Data|1706910.68|
|2015|Projected Data|2448661.53|
|2016|Projected Data|3319983.74|
|2017|Projected Data|420077.30|
|2018|Projected Data|5451341.27|
|2019|Projected Data|6711776.50|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 144
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Graphical representation: Analysis the data growth of the business based on the selected tables at table level / database level and shows the total data growth for all the tables and each table as well with a percentage in a graph from past 5 year to next 5 years. It is calculated based on the data growth encountered in the previous years.

Grid table: Provide the total data growth for all the tables and each tables as well every year with a percentage and accurate size of data may increase in the database from past 5 year to next 5 years. The projection types differ based on the data in the database.

- Known - implies that the data growth analysis is calculated based on the existing data of the tables in that year (i.e., past year) and forecasted the data growth.
- Partial Prediction - implies that the data growth analysis is calculated based on the both existing data of tables (i.e., known data) and predicted data in that year and forecasted the data growth.
- Complete Prediction - implies that the data growth analysis is calculated based on predicted data in future year(s) and forecasted the future data growth (i.e., next year).

Provides the flexibility to export the graphical representation of data assessment output into .pdf format.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 145
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.3.2.5 Database Growth Analysis on Top Tables

Data Assessment is executed on the top tables in the database and analysis the data growth of based on the top tables. Therefore predict the future database growth based on top tables data growth for the next 5 years.

SOLIX Enterprise Data Management Suite 22

|Run ID|100002|
|---|---|
|Module Name|DBTT1|
|Executed On|2014-09-26 13:12:17|
|DataBase Name|DEV_SRC-SUPR12-10.2.152.167|
|DataBase Size|6,448.82 (GB)|
|DataBase Type|ORACLE|

# Database Growth Analysis Summary

|Year|Forecast Size (GB)|
|---|---|
|2014|6,448.82|
|2015|8,143.11|
|2016|10,084.18|
|2017|12,295.11|
|2018|14,810.75|
|2019|17,683.71|

Graphical representation: Analysis the data growth of the business based on the top tables in the database and shows the growth of data in business every year with a percentage in a graph for next 5 years. It is calculated based on the data growth encountered in the previous years.

Grid table: Shows the growth of data in business every year with a percentage and accurate size of data may increase in the database for next 5 years.

Provides flexibility to export the graphical representation of data assessment output into .pdf format.

# 10.3.3 Parameters

Once the status of data assessment turned into ‘Process Completed’, the user can be able to view the Parameter details of the respective data assessment. To view the parameter details, do the following:

1. In Status Monitor screen, click Parameter icon corresponding to the required Run ID, the Parameters window will be prompted as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 146
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Schedule & Status

# Status Monitor

# Parameters

Listing of 1 records

# Search Criteria

|Criteria Name|Parameter Value|
|---|---|
|CT2| |

2. The Parameters window shows the parameter information of the data assessment such as Criteria Value and Parameter Value.

# 10.3.4 Application Log

Application Log captures the details of activities performed by users in Solix EDMS Data Assessment Standard Edition (SE), which may be used in the event of audit trail system recovery.

To view the Log details, do the following:

1. In Status Monitor screen, click Log icon corresponding to the required Run ID, the Log Details window will be prompted.
2. The Log Details shows the log information associated to the data assessment.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 147
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.4 Data Assessment Policies

Data Assessment Policies enables to create a policy with constraints required to assess the data identified from given period to less than current date, to identify eligible data for archiving. Exclusively, the data assessment policy is designed based on the “Date” criteria.

# Benefits:

- Helps to identify archive eligible data in the database from the data found before the given retention period till less than current date. For example, if retention period is provided as ‘3’, then the data found before 3 years from current date will be assessed for archive eligible data.
- Helps to identify the appropriate historical data that is eligible for data archiving with adherence of business retention rules.

# 10.4.1 Navigation

To access Data Assessment Policies link, follow the path: Setting > Data Assessment > Data Assessment Policies.

# 10.4.2 Create a new Data Assessment Policy

To add new Data Assessment Policy, do the following:

1. Place cursor at Setting tab in the Solix EDMS main menu. The list of submenu is displayed.
2. Select Data Assessment option from the submenu. The list of options is displayed in the drop down.
3. Click Data Assessment Policy option from the drop down. The Data Assessment Policies screen with the list of existing data assessment policies will be displayed.
4. Click Add button. The Data Assessment Policies page appears which enables to enter the information corresponding to the data assessment policy.

# Data Assessment Policy Details

|Folcy Name|Pccy Owner| |
|---|---|---|
|Pclcy erod|Pericd Type|seect One|
|(tegory|Sub Categcry| |
|Notes|Descripton| |
|YouhalelO0 charactersremaningfor Your notes|YouhalelO0 charactersremaningfor Your notes| | |

Save
Back

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 148
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.4.2 Creating a Data Assessment Policy

1. Enter the policy name in the Policy Name text field.
2. Enter the owner of the policy in the Policy Owner text field.
3. Enter the duration of policy in the Policy Period text field.
1. Select the appropriate type of duration from the Period Type drop down list. Based on the Policy Type selected, the Policy Period will be calculated in Years/Month/Days. For example, if Policy Period is “6” and Policy Type is “Months”, then it is stated as duration of policy is 6 months.
- Years – This option indicates that the policy period is calculated in years.
- Months – This option indicates that the policy period is calculated in months.
- Weeks - This option indicates that the policy period is calculated in weeks.
- Days - This option indicates that the policy period is calculated in days.
4. Select the required category from the Category drop down list. Based on the category selected, the corresponding sub categories will be displayed in the Sub Category drop down list.
5. Select the intended sub category from the Sub Category drop down list.
6. Enter the comments in the Notes.
7. Click Save button. Once the data assessment policy is saved successfully, a confirmation message is prompted on the screen.

Once the policy is created successfully, the user can assign the policy on the column of intended table existing in the data assessment.

The field marked as “|” are mandatory fields.

# 10.4.3 Editing an Existing Data Assessment Policy

To edit data assessment policy, do the following:

1. From the data assessment policy list, select the radio button adjacent to the desired data assessment policy.
2. Click Edit button. The Data Assessment Policies Details screen will be displayed.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 149
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 3. In the Edit Data Assessment Policy Details screen,

1. Make the necessary changes in the required fields.
2. Click Save button, to save the modified information. Once the modified information is updated successfully, a confirmation message is prompted.

The field marked as “|” are mandatory fields.

If the details provided are invalid, a warning message dialog box is prompted.

To return to the list screen from Add / Edit Details screen, click Back button.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 150
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.5 Assign Data Assessment Policies

This section illustrates the process to assign data assessment policy to the data assessment and enables to apply the policy on the intended column of table existing in the data assessment.

# 10.5.1 Navigation

To assign Data Assessment Policies, navigate to the following path: Setting > Data Assessment > Assign Data Assessment Policies.

# 10.5.2 Add New Assign Data Assessment Policy

To add new Assign Data Assessment Policy, do the following:

1. The Assign Data Assessment Policies screen will be displayed with the list of existing assign data assessment policies.
2. Click Add button, to assign policy to the data assessment. The Assign Data Assessment Policy Details page appears which allows the user to enter the information corresponding to the assign data assessment policy.

# Assign Data Assessment Policy Details

|Policy Type|LereeMent_-| | |
|---|---|---|---|
|Policy Name|Assessment Name|A_MI| |
|Table Name|Column Name|PLA|CLOSED_DATE|
|Notes|Description|You have 000 characters remaining| |
| |Your notes| | |

Save
Delete
Back

In the Assign Data Assessment Policy Details page, do the following:
1. Select Assessment from the Policy Type drop down list.
2. Select the intended policy from the Policy Name drop down list, to apply selected assessment policy on the data assessment.
3. Select the data assessment from the Assessment Name drop down list, to assign the data assessment policy. Once the data assessment is selected, the corresponding tables will be displayed in the Table Name text field. For Tables Level Archive Eligibility, Table Name and Column Name drop down list will not be populated in the screen.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 151
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.5.2 Assigning a Data Assessment Policy

d. Select the required table from the Table Name drop down list.

e. Select the column intended for data assessment from the Column Name drop down list.

f. Enter the comments in the Notes.

g. Click Save button, to save the data assessment policy assignment. On assignment is saved successfully, a confirmation message will be prompted in the screen.

Once the data assessment policy is assigned successfully, in case, the respective data assessment is set for execution the Solix EDMS Standard Edition (SE) will check whether any policies are applied on the data assessment or not. If policy is applied, then the execution of data assessment will be carried out according the policy criteria is defined.

The field marked as “|” are mandatory fields. If the details provided are invalid, a warning message dialog box is prompted. If the assign data assessment policy name already exists, a warning message about duplicate name is prompted in the dialog box. For Tables Level Archive Eligibility, Table Name and Column Name drop down list will not be populated in the screen.

# 10.5.3 Editing an Existing Assign Data Assessment Policy

To edit an existing Assign Data Assessment Policy, do the following:

1. From the assign data assessment policies list, select the radio button adjacent to the desired assign data assessment policy.
2. Click Edit button. The Assign Data Assessment Policy page will be displayed.
3. In the Edit Assign Data Assessment Policy Details screen,
1. Make the necessary changes in the required fields.
2. Click Save button, to save the modified information. Once the modified information is updated successfully, a confirmation message is prompted.

The field marked as “|” are mandatory fields. If the details provided are invalid, a warning message dialog box is prompted. To return to the list screen from Add / Edit Details screen, click Back button.

# 10.5.4 Deleting an Existing Assign Data Assessment Policy

To delete an existing Assign Data Assessment Policy, do the following:

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 152
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. In the Assign Data Assessment Policy page, select the radio button adjacent to the desired assign data assessment policy.
2. Click Edit button. Assign Data Assessment Policy Details page will be displayed.
3. Click Delete button. A window pops up with message Are you sure you want to delete the Assign Data Assessment Policy?
- Click Ok button to delete the Assign Data Assessment Policy from the list, or else Click Cancel button.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 153
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 10.6 Data Assessment Dashboard

Data Assessment Dashboard is designed to depict the comprehensive information of the archive eligible data (i.e., Active data) encountered during data assessment in each object based on maximum 10 recent executions, data distributed in schemas existing in the database, analysis business data growth based on database size, and provides a detailed analytics statistics in the size of database can be increased yearly in future. Once the data assessment is executed in the data assessment, the respective information will be replicated in the Data Assessment Dashboard screen automatically.

Dashboard also provides the flexibility to exclude the schema(s) which are not required for the data assessment and only shows the graphical representation of required schemas in the database.

To exclude the schema(s),

Click Exclude Schemas drop down appears at the right-top corner of the dashboard, the drop down display the list of schemas available in the selected database. Select the checkbox of required schemas from the schemas available in the selected database and click Exclude button. The Assessment Dashboard gets refresh and displays the graphical representation and grid tab according to the data of schemas included in the data assessment.

|Exclude Schemas|Exclude|
|---|---|
|[Select all]| |
|QASOURCE| |
|S5| |
|QATARGET| |
|APPLSYS| |
|2P3| |
|XLA| |

To view Assessment Dashboard, do the following:

1. Navigate to the following path: Data Assessment > Assessment Dashboard. The Assessment Dashboard screen is displayed showing the graphical representation of data database size snapshot, data amount of eligible archive data in given database, data growth analysis, and object wise assessment in rows and size.
2. Select the required data assessment from the Data Sources drop down list. This drop down maintains the databases and data assessments associated the KB. (In case, multiple sources are defined & data assessments assigned to the current KB).
3. Once the data assessment, the Assessment Dashboard screen gets refreshed and display the graphical information associated to the selected data assessment as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 154
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Data Source

DEV_SRC-SUPR12-10.2. 152. 167 (SOURCE)

# Select the required database

Exclude Schemas Exclude

# Database Size Snapshot Assessment Statistics Recent

# Schema Summary

|Schema Name|Space Used (GB)|
|---|---|
|QASOURCE|65.03|
|APPS|30.49|
|Sys|19.77|
|QATARGET|16.20|
|APPLSYS|1.06|
|ZPB|10.98|
|AR:L.I|7.03|
|AJINNI6I|6.0|
|CSF|6.42|
|MSC|4.39|
|HR?| |
|ZPB|5.43|
|ASO|2.63|
|Sclix Technologies|2.12|

# Data Growth Forecast

Data Base Size Increased by 59 for next 5 years

# Data Growth Analysis

|Year|Size(GB)|Increased by 15.0%|
|---|---|---|
|2014|292.76| |
|2015|336.57| |
|2016|387.17| |
|2017|445.25| |
|2018|512.04| |
|2019|588.85| |

# Object Level Archive Eligibility Assessment Statistics Summary Recent

|Active Rows|Inactive Rows|Active Data|Inactive Data|
|---|---|---|---|
|1s0ocododo|1ddooodooo|4sododo0 MB|Joodooo0 MB|
|soodooooo|1s0dodo0 MB| | |

# Modules

|Run Id|Module Name|Creation Date|Active Rows|Inactive Rows|Active Data Size(MB)|Inactive Data Size(MB)|
|---|---|---|---|---|---|---|
|1cco1o|DGMT ONT|2014-03-29 19.18.41|50,861,965|551,563,654|20,296.10|217,759.39|
|Icccc?|DGMT API|2014-03-29 18.55.49|74,813,888|143,311,346|32,710.30|62,442.71|
|100008|DGMT GL2|2014-03-29 16.38.53|325,440,818|516,063,330|99,441.26|161,939.48|
|100007|DGMT IN2|2014-03-29 16.38.53|43,197,637|897,093,884|306,030.71|608,416.78|
|1000o5|DGMT|2014-03-29 14.56.35|314,034,876|106,717,198|96,81+.27|33,876.03|
| |DGMT INV|2014-03-29 13.03.00|526,697,587|260,734,934|328,269.70|159,558.17|

# Figure 1: Assessment Dashboard

Pane 1: This pane provides the Database Size Snapshot Assessment statistics, and bifurcated into two sections: Pictorial presentation and Grid table.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 155
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Presentation shows the data distributed in tables of each schema that been assessed in the database. Whereas, Grid table provides a detailed amount of space occupied in each schema in the database.

# 2. Pane 2

This pane provides data growth forecast of the business per every year based on the analysis at database level (i.e., database size). This pane bifurcated into two sections: Graphical representation and Grid table. Graphical representation shows the growth of business data every year in percentage in a graph which is calculated based on the data growth encountered in the previous years. Grid table provides consolidated information of data growth in business every year with a percentage and accurate size of data that can be increased every year in the selected database.

Make sure that the at least once the database size snapshot must be executed to forecast the data growth. Make sure that the difference between two executions should be minimum “30”. For one execution of data assessment, by default the data growth percentile is given as 15%. Forecasting of number of years of data growth is depended on the value specified for “ASSESSMENT_PROJECTION_YEARS' parameter (i.e., 'Assessment Projected years for Data Growth analysis'). For example, if it is 5 years, next coming 5 year data growth analysis will be shown.

# 3. Pane 3

This pane shows the graphical presentation of archive eligible data (i.e., Active data) and non-eligible data (i.e., Inactive data) accordingly to rows and data size in each object. Based on the maximum “10” recent data assessment executions for Object Level Archive Eligibility, the eligible archive data and non-eligible data as per row and data space is designed and shown in the graph.

# 4. Pane 4

This pane shows the grid table that provides the consolidated information related to amount of active rows, inactive rows, active data size and inactive data size found in each object based on the maximum “10” recent data assessment executions for Object Level Archive Eligibility.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 156
---
# Solix EDMS Standard Edition (SE) 2.2

# 11 Database Archiving

Solix EDMS Database Archiving Standard Edition (SE) is a process of moving data that is no longer actively used to a separate data storage device for long-term retention. Data archives consist of historical data that is still important and necessary for future reference, as well as data that must be retained for regulatory compliance. Data archiving platforms like Solix EDMS Database Archiving Standard Edition (SE) provide data access so that data can be retrieved easily whenever needed and provides data classification to identify scarcely accessed data that can be moved to an active archive.

This section illustrates the process to create KB tables, build relations & joins between the tables and design configuration for data archiving process to archive the data from source to target database.

Both source database and target database must be homogenous. For example, Oracle to Oracle.

# Functionalities

The functionalities provided by Solix EDMS Database Archiving Standard Edition (SE) to archive the data from source to target database are listed below.

- User Management
- Environment (Knowledge base) Management
- Source and target definition
- KB Assignment
- Define the tables and their structures for custom tables in Knowledge Base (KB) tables
- Define the table relations for custom tables in the Knowledge Base tables

# Assumptions

- All the required KB tables and KB Rules are configured.
- Objects (Tables) to be archived have been identified.
- Users have the knowledge of the tables and their relations in the data to be archived.

# Standard Procedure to Build and Run Configuration

1. Select related tables from the Knowledge Base. The selected tables will be populated in the design space.
2. Link up the selected tables to define the parent-child relationships among them.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 157
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Specify the driving table that will drive the archive & purge when the configuration is eventually run.
2. Specify the configuration details, specify archive/purge strategy and save the configuration.
3. Define the criteria. By default, the data in all the selected tables will be mapped for Archive & Purge. Defining the criteria allows the user to select specific rows from the tables for archive and purge.
4. Generate ANSI SQL code for the configuration.
5. Run the configuration. The application prompts the user to supply parameter values at run time for archive configuration. Specify values. The run will be scheduled.
6. The archive/purge configuration will be scheduled for run and the application assigns a Run Id to the archive/purge activity.
7. Go to Status Monitor and, using the Run Id, identify the archive/purge activity. Solix EDMS Standard Edition (SE) application is in process of performing a preview before the actual execution of archive/purge, once the preview completes, the status of the activity turns to preview completed.
8. View the Preview Report of the activity. On successful result, hence execute Archive & Purge.

# 11.1 Custom Configuration (Design)

Configurator is a powerful tool with a visual design editor to setup custom and standard archive configurations. It enables to generate re-usable ANSI SQL Code for the configurations to move data from one location to another. Configurator includes Auto-Config and partitioning capabilities.

# Features of Configurator:

- Provides a powerful configuration tool that enables automatic design and setup of custom configurations.
- Helps in designing meta-data structure.
- Provides an editor that enables the user to use drag-drop components in order to paint the entity relations for customizations and bolt-on applications.
- Enables archiving and purging of data for customizations in the Oracle EBS, PeopleSoft, JDE and other custom-developed or third-party applications.
- Code Generator automatically generates ANSI SQL code, which will enable the user to archive the data across homogenous databases, viz., Oracle to Oracle. This code will be stored in Solix EDMS repository and can be called anytime for any future archive/purge runs.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 158
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Archiving Types

- Database to Database
- Database to CSV
- Database to XML

To design custom configuration, the user needs to create a metadata (i.e., KB tables, KB table relation, Join, and so on) and populate the columns in knowledgebase to build the configuration effectively. This chapter outlines the procedure to create a KB table, KB table Relation and build a configuration for archiving. The topics included are given below:

1. KB Table
2. KB Table Relation
3. Creating Configuration for Data Archiving

It is recommended to create KB Table Relation only if the user is designing the configuration based on multiple KB tables. The user must have the knowledge of the parent - child relationship among the tables selected. Inappropriate selection of tables may result in data being orphaned partially or completely.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 159
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 11.1.1 KB Tables

Tables are the basic unit of data storage in the knowledgebase. KB Table is defined with a table name and a set of columns to extract the data from the database and populate it in the knowledgebase for archiving process. Here, the user is provided feasibility to setup a table in the knowledgebase and add the required columns to the table including metadata of the column (Data type, Primary key flag, Primary Key Sequence, and so on).

# 11.1.1.1 Navigation

To access KB Tables link, follow the path: Admin > Metadata Repository > KB Tables.

# 11.1.1.2 Add New KB Tables

To add a new KB tables in the knowledge base, do the following:

1. Place cursor at Admin tab in the Solix EDMS Standard Edition (SE) main menu. The list of submenus is displayed.
2. Select Metadata Repository option from the submenu. The list of options is displayed in the drop down.
3. Click KB Tables option in the drop down. The KB Tables screen with the list of KB tables existing in the knowledgebase will be displayed.
4. Click Add button, to create a new KB table. The KB Table Details screen appears to enter the KB table information as shown in the figure below.

# Admin    Metadata Repository -   KB Tables    KB Table Details

# KB Table Details

|KB Data Source|Select One| |
|---|---|---|
|Table Owner|Table Name| |
|Select One|Target Table Required| |
|Yes|Category| |
|Sub Category|Notes| |
|Ceicricticn|Ceicricticn| | |
|You have 1000 characters remaining for your notes|You have 1000 characters remaining for your notes| | |
|Save|Columns|Back|

In the KB Table Details page, do the following:

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 160
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Select an appropriate data source from the KB Data Source Type drop down list. Once the data source is selected, the table owners associated to the selected datasource will be listed in the Table Owner drop down list. (Note: exclusively, the data sources assigned to the respective KB will be listed in the KB Data Source drop down list).
2. Select the Table Owner from the corresponding drop down list. Once the table owner is selected, the tables associated to the selected table owners will be listed in the Table Name drop down list.
3. Select the Table Name from the corresponding drop down list, to define the table in the knowledgebase.
4. Select “Yes” option in the Target Table Required, to create the target table in the target database. Once option is selected, Auto Create Target Table, Target Table Name and Target Table Owner fields become visible in the screen.
|Auto Create|Target Table|
|---|---|
|Target Table Name|rzet Table Owner|
|GL_IMPORT_REFERENCES|FJINNI|
5. Select “Yes/No” option in Auto Create Target Table, to create the target table in the target database automatically during the archiving process.
- If “Yes” option is selected, additional two purge columns “PURGE_SEQ_ID and PURGE_DATE will be created in target table and also two columns will be added in the TARGET_TABLE_PURGE_COLUMNS parameter (Parameter screen).
- If “No” option is selected, the table structure of both source and target table will be same.
6. Enter Target Table Name and Target Table Owner fields in the corresponding fields, the data will be archived in the corresponding target table during archiving process.
7. Enter Category in the corresponding field.
8. Enter Sub Category in the corresponding field.
9. Enter the comments in the Notes.
10. Click Save button. Once the KB table is created and saved successfully, a confirmation message will be prompted on the screen.
- If the details provided are invalid, a warning message will be prompted on the screen.
- If the KB Table Name already exists, a warning message about duplicate name will be prompted.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 161
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

The field marked as are mandatory fields.

# 11.1.1.3 Populating Columns

Once the KB table is created, henceforth the user need to populate the columns in KB table from the specified KB Data source. To populate column in the KB table, do the following:

1. In the KB Table Details page, click Columns button to navigate to KB Table Columns screen. Solix EDMS Standard Edition (SE) invokes all the columns pertaining to the configured table from the enterprise application, which are listed in the KB Table Columns screen.

|Column Name|Table Name|Primary Key Flag|Primary Key Sequence|Data Type|Global Description|
|---|---|---|---|---|---|
|PO_HEADER_ID|SRC_KRISHNA| | |NUMBER|SALARY|
|AGENT_ID|SRC_KRISHNA| | |NUMBER| |
|TYPE_LOOKUP_CODE|SRC_KRISHNA| | |VARCHAR2| |
|LAST_UPDATE_DATE|SRC_KRISHNA| | |DATE| |
|LAST_UPDATED_BY|SRC_KRISHNA| | |NUMBER| |
|SEGMENT1|SRC_KRISHNA| | |VARCHAR2| |
|SUMMARY_FLAG|SRC_KRISHNA| | |VARCHAR2| |
|ENABLED_FLAG|SRC_KRISHNA| | |VARCHAR2| |
|SEGMENT2|SRC_KRISHNA| | |VARCHAR2| |

Populate Edit Back
2. Click Populate button, to populate all the columns in Solix EDMS Standard Edition (SE). The KB Table Columns page will be displayed as shown in figure below.

|Column Name|Table Name|Primary Key Flag|Primary Key Sequence|Data Type|Global Description|
|---|---|---|---|---|---|
|PO_HEADER_ID|SRC_KRISHNA| | |NUMBER|SALARY|
|AGENT_ID|SRC_KRISHNA| | |NUMBER| |
|TYPE_LOOKUP_CODE|SRC_KRISHNA| | |VARCHAR2| |
|LAST_UPDATE_DATE|SRC_KRISHNA| | |DATE| |
|LAST_UPDATED_BY|SRC_KRISHNA| | |NUMBER| |
|SEGMENT1|SRC_KRISHNA| | |VARCHAR2| |
|SUMMARY_FLAG|SRC_KRISHNA| | |VARCHAR2| |
|ENABLED_FLAG|SRC_KRISHNA| | |VARCHAR2| |
|SEGMENT2|SRC_KRISHNA| | |VARCHAR2| |

Populate Edit Back

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 162
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 11.1.1.4 Editing a Column

Sometimes changes may be made to the column(s) of a table in the application instance that has been configured in Solix EDMS Standard Edition (SE) Knowledge Base. In such cases, the same column changes should be made to the respective KB table in Solix EDMS Standard Edition (SE). The Edit function enables the users to make such changes to the columns.

To edit a table column, do the following:

1. In KB Table Columns screen, select the radio button adjacent to the desired column and click Edit button. The KB Table Column Details page will be displayed as shown in the figure below.

# KB Table Column Details

|Column Name|Data Type|
|---|---|
|CUSTOMERNUMBERI|INTESER|
|Length|Primary Key Flag|
|Primary Key Sequence| |
|Notes| |
|Description|You have 10 js remaining for QuTnotes|

Save Back

Figure 11-1: KB Table Column Details screen

In the Edit KB Table Column Details screen, do the following:
1. The Column Name remains static and cannot be changed.
2. Make the necessary changes in Data Type, Data Length fields.
3. Specify “Y” in the Primary key Flag, when the column is a primary key in the table.
4. Specify the sequence number of the primary key column in the Primary key Sequence
- Enter “1” value, when single primary key exists in table.
- In case, when multiple primary keys exist in table, then enter the sequence number of primary key accordingly.

A piece of data such as salary, etc. may be shared across different Enterprise Applications in an organization but the column names of such data may differ from one application to another. Global Description enables the user to identify the counterparts of such column in different Enterprise Applications by the column description and map those columns to the specific table column.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 163
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

The Global Description values that are displayed in the list are created in Parameters functionality under Admin in Solix EDMS Standard Edition (SE). The administrative user, super user, or apps functional user can create the Global Description values for GLOBAL_MAPPING parameter. These values will be listed in the Global Description drop down list in the Edit KB Table Column Details page.

1. Click Save button. The selected column will be updated accordingly.
2. Click Back button to return to the previous page.

The field marked as “ ” are mandatory fields.

# 11.1.2 KB Table Relations

Table relationship is an association between two or more tables. Relationships are expressed in the data values of the primary and foreign keys. Keys are fundamental to the concept of relational databases because they enable tables in the database to be related with each other. Navigation around a relational database depends on the ability of the primary key to unambiguously identify specific rows of a table. Knowledge Base (KB) Relations function allows the users to setup the table relations and joins in Solix EDMS Standard Edition (SE). This function is used to configure a child table to inherit the properties of the parent table.

It is recommended to create KB Table Relation, only if the user is designing the configuration based on multiple KB tables.

# 11.1.2.1 Navigation

To access KB Table Relations link, login to Solix EDMS Standard Edition (SE) and follow the path: Admin > Metadata Repository > KB Table Relations.

# 11.1.2.2 Add New KB Table Relations

To add a new KB Table Relations, do the following:

1. Place cursor at Admin tab in the Solix EDMS Standard Edition (SE) main menu. The list of submenu is displayed.
2. Select Metadata Repository option from the submenu. The list of options is displayed in the drop down.
3. Click KB Table Relations option from the drop down. The KB Table Relations screen with the list of existing KB Table Relations will be displayed as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 164
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Admin Metadaza Repository KB Table Relations

# Listing 1-1 of records

Search
Export As
Customize Columns

|Table Name|Parent Table Name|Relation Type|Relational Table|Notes|
|---|---|---|---|---|
|CLICL|CLICH|Child| | |

Add
Edit
Populate Relations

4. Click Add button. The KB Table Relations Details screen appears to enter the information corresponding to the KB Table Relations.

# KB Table Relation Details

|Table Name|Parent Table Name|
|---|---|
|~Select One|_Select One|
|Relational Table|Notes|
|Description|You have Jjjchz|

Save
Jolns
Back

5. In the KB Table Relations Details screen, do the following:

1. Select child table from the Table Name drop down list.
2. Select Parent Table Name from the corresponding drop down list.
3. Select Yes/No option in the Relational Table, to indicate whether both the parent table and child table is a relational table or not.
4. - If “Yes” option is selected, the relations (i.e., Foreign Keys and Primary Keys) exist on the database level.
- If “No” option is selected, the relations (i.e., Foreign Keys and Primary Keys) does not exist on the database level but it will be maintained at the business application level.

Enter the comments in the Notes.
5. Click Save button. Once the information is saved successfully, a confirmation message dialog box will be prompted.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 165
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

If the details provided are invalid, a warning message dialog box is prompted. If the KB table relations name already exists, a warning message about duplicate name is prompted in the dialog box.

The field marked as are mandatory fields.

# 11.1.2.3 Editing an Existing KB Table Relations

To edit KB Table Relations, do the following:

1. From the KB Table Relations list, select the radio button adjacent to the desired KB Table Relations.
2. Click Edit button. The KB Table Relations Details screen will be displayed.
3. In the Edit KB Table Relations Details screen, do the following:
1. Make the necessary changes in the required fields.
2. Click Save button, to save the modified information. Once the modified information is updated, a confirmation message will be prompted.

The field marked as are mandatory fields. If the details provided are invalid, a warning message is prompted. To return to the KB Table Relations List screen from Add / Edit Details screen, click Back button.

# 11.1.2.4 Configuring Table Joins

Joins preserve the lineage of the tables in the KB. This function keeps track of all the links that connects one table with the other tables in the KB.

Path: KB Table Relations Details screen (Refer to KB Table Relations Details)

In KB Table Relation Details screen, click Joins button. The KB Table Joins screen displays the existing table joins corresponding to the KB Table Relation as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 166
---
# Solix EDMS Standard Edition (SE) 2.2

# K3 Table Relations

# K3 Table Relation Detail:

# K3 Table Joins

# Listing 1-1 of records

|Join Sequence Number|Table Name|Parent Table Name|Column Name|
|---|---|---|---|
| |CLIBL|AVPH|PO_HEADER_ID|

Add
Edit
Back

# 11.1.2.5 Add New KB Table Join

To add new KB Table Join, do the following:

# Product User Manual

Export As
Customize Columns

# Parent Column Name

PO_HEADER_ID

# KB Table Join Details

|Join Sequence Number|Table Name|Parent Table Name|Column Name|Parent Column Name|
|---|---|---|---|---|
|EMPLOYEES|EMPLOYEE| |Select| |

# Notes

Description

You have 1100 characters remaining for your notes

Save
Back

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 167
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 11.1.2.5 Creating a New KB Table Join

d. Select the appropriate column name of the parent table from the Parent Column Name drop down list to which the linkage to child table is established.

e. Enter the comments in the Notes.

f. Click Save button, to develop the parent-child relation among the specified tables. Once the information is saved successfully, a confirmation message dialog box is prompted.

If the details provided are invalid, a warning message dialog box is prompted.

If the KB Table Join Name already exists, a warning message about duplicate name is prompted in the dialog box.

The field marked as are mandatory fields.

# 11.1.2.6 Editing an Existing KB Table Join

To edit an existing KB Table Join, do the following:

1. From the KB Table Join list, select the radio button adjacent to the desired KB Table Join.
2. Click Edit button. The KB Table Join Details screen will be displayed.
3. In the Edit KB Table Join Details screen,
1. Make the necessary changes in the required fields.
2. Click Save button, to save the modified information. Once the modified information is updated successfully, a confirmation message is prompted.

The field marked as are mandatory fields.

If the details provided are invalid, a warning message will be prompted.

To return to the list screen from Add / Edit Details screen, click Back button.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 168
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 11.1.3 Creating Configuration for Data Archiving

Solix EDMS Standard Edition (SE) provides the feasibility to generate re-usable ANSI SQL Code automatically. The configurator is a powerful tool designed to setup the custom configurations to archive the data in the archiving process. The tool includes Auto-Config capabilities. The KB tables and KB Relation (optional based on requirement) are requisite to build the configuration for data archiving and stores the configurations in the KB Explorer. Once the configuration is created and code is generated, the user can initiate the data archiving process in Solix EDMS Database Archiving Standard Edition (SE). To create a new configuration, do the following:

# 11.1.3.1 Navigation

To access Configurator screen, there are two ways to navigate to the Configurator:

In Solix EDMS Standard Edition (SE) home page, click Launch Data Archiving Configurator button adjacent to the Database Archiving as shown in the figure below.

|SOLIX|Enterprise Data Management Suite|Standard Edition|2.2| | | |
|---|---|---|---|---|---|---|
| | |Home|ADHIN|Help|Support|Log Out|

# Data Masking

Solix EDMS Data Masking effectively encrypts, masks sensitive data in test databases while ensuring data format remains valid for testing purposes. It helps meet compliance requirements per the Payment Card Industry (PCI) and Protected Health Information (PHI) guidelines.

# Data Assessment

Solix EDMS Database Assessment plays a significant role to archive eligible data in given database based on specific criteria.

# Data Validation

Solix EDMS Data Validation is a simple solution that helps you check integrity and accuracy of your data. The tool can validate various types of data including characters, numbers, dates, etc. and can be used effectively to validate and reconcile the data copy with the source.

# Database Archiving

Solix EDMS Database Archiving Standard Edition (SE) provides a platform to move inactive data into long-term retention. The archived data consists of historical data that is important and necessary for future reference and must be retained for regulatory compliance.

In Admin pane, navigate to the following path: Setting > Database Archiving > Configurator.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 169
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Click here to open the Admin pane

The Configurator screen will be displayed as shown in the figure below.

# Settings

# Data Validation

# Configurator

# Help

# Configurations

wew

Saverls

Delete

Linkt

Gnbena)

Rauni

Delails

Fonmitla

Code Generator

Shapes

# Validation Config

# Archiving Config

# Configurations Pane

# Configuration Design Space

# Hetadata

# Metadata Pane

**Table 1: Illustrate the dashboard of Configurator**
|Fields|Functionality|
|---|---|
|Configurations|The configuration pane is designed to store the configurations created and saved in the Configurator for Data Validation and Data Archiving.|
|Metadata|The metadata pane is designed to store the tables created in the respective knowledgebase. It maintains the tables and provides feasibility to design the configuration using tables in metadata.|
|Configurator Design Space|This pane provides flexibility to design the metadata structure of configuration such as tables, establishing link between related tables, configuring the driving tables and so on. It shows the tables selected for creating metadata structure in configuration and once populated in the Design Space, a table can be dragged and placed anywhere in the space according.|
|New|This button is employed to create a new configuration.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 170
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Once the metadata structure is designed and appropriate criteria are setup for the configuration. This button is deployed to save the details of configuration created or update the information of configuration as per the modification. Automatically, the saved configuration will be accumulated in the Configuration pane and can be re-usable in future.

|Save|This button is employed to save the details of configuration created or update the information of configuration as per the modification.|
|---|---|
|Save As|This button is employed for the duplication of existing configuration or to save the information of existing configuration with different configuration name.|
|Delete|This button is employed to delete the configuration.|
|Link|This button is employed to establish the parent-child relationships among the selected tables in Design Space. Note: only if the relation among the tables is defined/exist in the knowledgebase, the relationships among those tables can be established.|
|Criteria|This button is employed to define criteria in the configuration for validation process, in order to extract the data for the validation based on the given criteria.|
| |For example, If the user needs to validate the specific data of the table or apply some condition to extract a specific data in the database. In such case, the user defines the condition in the Criteria Details screen.|
| |Note: Solix EDMS Standard Edition (SE) restricts to save a new configuration, if the criteria are not defined for the respective configuration.|
|Run|This button is employed to execute the data archiving configuration. By default, this button will be disabled for data validation configurations.|
|Details|This button is employed to view the details of selected configuration and criteria.|
|Format|This button is deployed to format the configuration as per the requirement. Only, the saved configurations can be formatted.|
|Generate Code|This button is employed to generate a re-usable ANSI SQL code based on the criteria defined in the respective configuration. The generated SQL code will be employed in the validation process to validate the data.|
|Shape|This button facilitates to utilize various kinds of shapes (such as square, rectangle, arrows, and so on) while designing the configuration.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 171
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 1.

Expand the Configurations &gt; Archiving Config folder, to view the saved data archiving configurations.

|Configurations|Hew|Saveus|belete|Onbena|Delails|code Generatton|Shapes|
|---|---|---|---|---|---|---|---|
|Validation Config| | | | | | | |
|Archiving Config| | | | | | | |
|C_GL_JE_BATCHES| | | | | | | |
|TEST| | | | | | | |
|Criteria| | | | | | | |
|CONFIG| | | | | | | |
|Hetadata|GL|GL_IMPORT_REFERENCES|CLGLJJE_LINI| | | | |

Only, 10 configurations are restricted for a KB.

# 11.1.3.2 Initiate the creation of new configuration

1. Navigate to Metadata &gt; OracleERP11i &gt; Tables &gt; Category &gt; [Table Owner] folder in the Configurator, to list all the tables existing in the corresponding table owner as shown in the figure below.

|Configurations|Save|Save 45|Delete|Link|cntena|Details|Formula|Fonmat|Code Generator|
|---|---|---|---|---|---|---|---|---|---|
|Hetadata| | | | | | | | | |
|Default KB| | | | | | | | | |
|Tables| | | | | | | | | |
|Category| | | | | | | | | |
|GLGL_JE_BATCHES| | | | | | | | | |
|GLGL_JE_HEADERS| | | | | | | | | |
|GLGL_JE_LINES| | | | | | | | | |
|GLGL_IMPORT_REFERENCES| | | | | | | | | |

Now, select the tables required to create a configuration from the Metadata pane. Drag and drop the tables in the configuration designer pane (i.e., Design Space) to build a new configuration as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 172
---
# Solix EDMS Standard Edition (SE) 2.2

# Configurations

Wew
Gave
Ze
Delete
Link
Cnitena
Details
# Validation Config

# Archiving Config

# Metadata

Drag and Drop the tables from Metadata to Design Space

# Default KB

# Tables

GLGL_JE_BATCHESCategoryGLGL_JE_HEADERSGLGL_JE_BATCHESGLGL_JE_HEADERSGLGL_JE_LINESGLGL_JE_LINESGLGL_IMPORT_REFERENCESGLGL_IMPORT_REFERENCES
Once the tables are selected from the metadata and dragged into the Configurator Design Space, the user needs to develop a link between the tables based on the parent-child relationship.

# Product User Manual

# Fonmat Code Generator

The user must have the knowledge of the parent - child relationship among the tables selected. Inappropriate selection of tables may result in data being orphaned partially or completely.

# 11.1.3.3 Create Table Links

To create links between tables, do the following:

1. First ascertain which tables to connect and in what order. The user must consider the parent-child relationships among the selected tables.
2. Click the button that appears on the Configurator toolbar.
3. In the Configurator Design Space, click the first table (child table) and then click the second table (header table) depending on the parent-child relationship between the tables.
4. Both the tables are linked.
5. Repeat the above procedures to connect all the selected tables according to the table relationships.

To populate related tables and establish links between them automatically, do the following:

1. Select the Table from the Tables folder in the KB Explorer. Drag and drop the selected table in the Design Space.
2. In the Design Space, right click on the selected table. A drop down menu appears on the screen and select Auto Config option from the menu as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 173
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# GLGL_JE_BATCHES

# GL,GL_JE_LINES

# GLGLAJF

# New

# References

|GLGL_IMPORT_REFERENCES|Driving Table|
|---|---|
|Archive|Only|
|References Driving Table|Archive Only Driving Table|
|Purge Only Driving Table|Normal Table|
|Cut Table|Properties|
|Auto Config|Relation Details|
|Settings|Global|
|Settings_| |

Once the option is clicked, the tool picks and populates all the tables related to the respective table in the design space; then it establishes relational links among those tables; and finally assigns an appropriate table from the selected ones as the driving table that drives the archiving process as shown in the figure below.

# GLGL_JE_BATCHES

# GLGL_JE_HEADERS

# GLGL_IMPORT_REFERENCES

# GLGL_JE_LINES

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 174
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 11.1.3.4 Configure Driving Table

To set the driving table, do the following:

1. Once the Parent-child relations is established, to set the driving table in the linked tables. Right-click the table that is intended to drive the configuration, a menu drop down list appears in the Design Space as shown in the figure below.

NewReferencesDriving TableArchive OnlyPurge OnlyReferences Driving TableArchive Only Driving TablePurge Only Driving TableNormal TableCut TablePropertiesAuto ConfigRelation DetailsSettings;GlobalSettings _About Adobe Flash Player 11.7,700,224.

Once the Driving table option is clicked, the respective table turns green and represents as a driving table in the configuration as shown in the figure below.

|GLGL_JE_BATCHES|Driving Table| | |
|---|---|---|---|
| | |GLGL_JE_HEADERS| |
|GLGL_IMPORT_REFERENCES| | | |
| | | |GLGL_JE_LINES|

Once the tables are linked and the driving table is assigned, this accomplishes the process of designing a configuration.

# 11.1.3.5 Configure Archive or Purge Table

In case, when the configuration is designed for Archive & Purge, the user is provided an option to configure a table for only Archive or only Purge the data in the source.

To set archive or purge table in configuration, do the following:

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 175
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Right-click the table that is intended to set as Archive or Purge in the configuration,
a menu drop down list appears in the Design Space as shown in the figure below.
|New| |
|---|---|
|References|Click here to set table as Archive only|
|Archive Only|Click here to set table as Purge only|
|Purge Only| |
|References Driving Table| |
|Archive Only Driving Table| |
|Purge Only Driving Table| |
|Normal Table| |
|Cut Table| |
|Properties| |
|Auto Config| |
|Relation Details| |
|Settings;| |
|Global| |
|Settings _| |
|About Adobe Flash Player 11.7,700,224.| |
2. Once the archive only / purge only option is clicked,
For Archive Only, the respective table turns Yellow color and represents as
Archive Only table in the configuration as shown in the figure below.
For Purge Only, the respective table turns Grey color and represents as
Archive Only table in the configuration as shown in the figure below.
|GLGL_JE_BATCHES|Table with Archive only|
|---|---|
|GLGL_JE_HEADERS|Table set as Purge only|
|GLGL_IMPORT_REFERENCES|GL,GL_JE_LINES|

Herein, whenever the configuration is executed for Archive and purge activity in data archiving
process remaining all tables will be Archived and purged, whereas the tables configured with
Archive only or purge only in design space will be only archived or purged accordingly.

# 11.1.3.6 Setup Configuration Details:

Once the configuration is designed successfully, henceforth the configuration details must be
setup to carry out the process. To setup configuration details,
1. Click button appears in the Configurator toolbar.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 176
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 2. The Configuration Details

window prompts on the screen, and enables the user to provide the Configuration Details screen as shown in the figure below.

# Configuration Details

|Config Type|Archiving| | |
|---|---|---|---|
|Config Name| |Knowledge Base|Default KB|
|Source|Select One|Target|Select One|
|Commit Frequency| |Commit Level|Select One|
|Archive/ Purge|Select One|Purge Columns|Yes|
|Archive Threads| |Purge Threads| |
|Notes| | | |
|Save| |Close| |

# 3. In the Configuration Details popup window:

1. Select Archiving option from the Config Type drop down list, to define the configuration is built for data archiving process.
2. Enter Configuration Name in the corresponding field.
3. Select the appropriate KB from the corresponding drop down list.
4. Select the source and target from the corresponding drop downs, to archive the data from the selected source to target location.
5. Specify Commit Frequency in the corresponding field.
6. Set Commit Level by selecting an option from the corresponding drop down list. There are two commit levels the user can choose based on the requirement:
- Bulk: This option enables to capture the Row ID or Primary Key information of archive eligible data in a temp table on source location for all the tables in the configuration. Make use of those temp tables to archive purge the data as per commit frequency.
- Bulk Skip Selection: This option enables to archive/purge data Table-wise in the configuration. Here, no temp table is created and commit frequency is not considered for execution.
- Bulk-Parent Based: This option enables to capture the header tables in a temp table on source location for all the tables in the configuration. Make use of those temp tables to archive purge the data as per commit frequency.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 177
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Archive/Purge Configuration

Specify Archive/Purge method. Select an option from the corresponding drop down list.

- Archive and Purge: Archive and Purge option enables to archive data from the source table into target tables (i.e., Oracle to Oracle). Simultaneously, the data in the source table will be deleted during this process.
- Archive Only: Archive only option enables to archive data from the source table into target tables but the data in the source table will not be deleted.
- Purge Only: Purge Only option deletes the data in the source table.

Select appropriate option in the Purge Columns options (i.e., Yes/No), to enable/disable purge columns in the target tables. If ‘Yes’ is selected, the purge sequence id as well as the purge date in the corresponding history tables will be captured.

Select number of parallel Archive/Purge Threads from the corresponding dropdown. When the configuration is run, then the specified number of threads will be invoked and run in parallel to execute the process.

Enter the Description in the corresponding field.

# Save Configuration

Click Save button, to save the configuration details. Once the configuration details are saved successfully, the respective configuration is created and saved in the Archiving Configs folder under Configurations in the Configurator.

Configuration Details Saved Successfully

# Add Criteria

To add criteria in the configuration, click Criteria Button. The Criteria Details screen popup window prompts as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 178
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Criteria Details

|Criteria Name|Select One|
|---|---|
|Table Name|Select One|
|Column Name|Select One|
|Type|Select One|
|Operator|Select One|
|Value Type|Select One|
|Data Type|Select One|
|Format| |
|Parameter| |
|Mandatory|Yes|
|Link|Select One|
|Sequence| |
|Value| |
|Default Value| |

# Below table illustrates the functionalities of fields in the Criteria Details screen.

|Fields|Functionality|
|---|---|
|Criteria Name|Define a name for the Criteria in configuration|
|Criteria Type|This drop down enables the user to select an appropriate type of criteria. The criteria type can be Static, Dependent and Independent. Static: It implies that the configuration actions will be based on the value specified in Criteria. Dependent: It implies that the criteria designed are dependent on a particular column of the specific table. Independent: It implies that the criteria are independent of tables and columns associated to specific configuration.|
|Table Name|This drop down enables the user to select an appropriate table that holds the attribute value.|
|Column Name|Based on the table selected, the corresponding columns will be listed in this drop down. It enables the user to select the column on which the respective criteria will be applicable.|
|Join Type|This drop down enables the user to select an appropriate operand required for the criteria. (i.e., AND or OR).|
|Operator|This drop down enables the user to select an appropriate conditional operator required to design criteria. (i.e., =, >, <, <= and so on).|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 179
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

This drop down enables the user to define the type of parameter value (i.e., Value or Dependent SQL)

- Value: It implies that the data is fetched based on the value provided in the Value text box.
- Dependent SQL: It implies that the SQL statement will be generated based on dependent variable(s) which may be derived from the earlier parameter(s).

For example,

# Value Type

"SELECT ORGANIZATION_ID, ORGANIZATION_NAME FROM ORG_ORGANIZATION_DEFINITIONS" where organization name will be displayed at run time parameters for end user ease and organization id will be used in criteria.

SQL: During the runtime, the SQL statement will be executed and the archiving will be executed based on the value obtained from running the SQL script specified in Value.

For example,

SELECT ORGANIZATION_ID FROM ORG_ORGANIZATION_DEFINITIONS

This drop down facilitates to select an appropriate data type of the parameter. (i.e., Number, String, Date).

# Data Type

Note: For the “Dependent SQL” and “SQL” value type, “String” should be selected by default.

# Format

If the Data type is “Date”, this text box enables the user to provide the format of date. For example, MM/DD/YYYY.

This drop down enables the user to define the parameter as mandatory or not (i.e., Yes or No).

# Parameter Mandatory

- Yes - it implies that the parameter is mandatory, the value must be entered
- No - it implies that the parameter is not mandatory.

# Sequence No

This text box enables the user to enter the Sequence of Criteria while execution.

Exclusively when “OR” operator is selected in Join, this drop down list enables the user to link the current criteria to this existing criteria and place it in parenthesis during validating the data.

# Value

This text enables the user to enter the appropriate value of the parameter according to the Value Type selected.

# Default Value

This text enables the user to enter the default value of the parameter.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 180
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Description

This text box enables the user to enter the description pertaining to the criteria.

Save
This button is employed to save the criteria details.

# 6.

Enter the criteria details and click Save button. Once the criteria is saved successfully, the output of the archiving process will be generated based on the defined criteria. Henceforth, generate a code for the respective configuration.

# 7.

Click Generate Code button to generate the SQL Statement (i.e., Alternate SQL statement) for the corresponding config in the Code Generator window as shown in the figure below.

# Code Generator

|Seq No|SQL Statement Type|Activity|ObjectType|Alternate SQL Statement|Active Flag|Object Version Num|
|---|---|---|---|---|---|---|
|SELECT|SELECTION|CONFIG|SELECT SRUN_ID,100001,10001, ROWid,100001 FROM GL.GL_JE_BATCHES WHERE AND GL_JE_BATCHES.SET_OF_BOOKS_ID SSOB AND GL_JE_BATCHES.DEFAULT_EFFECTIVE_DATE TO_DATE (SUptoDate' DD-MON-YYYY)| | | |
|INSERT|SELECTION|CONFIG|INSERT INTO APPS AJ_PURGE_DATA_SRUN_ID (RUN_ID, CONFIG_ID, TABLE_ID, ROW_ID, CONFIG_TABLE_ID, ROW_NUM)| | | |
|SELECT|SELECTION|CONFIG|SELECT ORDERED USE_NL(GL_JE_BATCHES,GL_JE_HEADERS) SRUN_ID; 1CCI01, 1C002, GL_JE_HEADERS.ROWID, 1C8002, 1C001 FROM SELECT /*- ORDERED USE_NL(a,| | | |

Edit

Close

Now, the generated SQL statement will be used in archiving process to archive the data accurately.

Also, user is provided an option to edit the generated code. To edit generated code, do the following:

1. In Code Generator screen, select the appropriate SQL Statement and click Edit button. The Generate Code Details screen will be displayed as shown in the figure below.

# Generate Code Details

|Activity|Statement Type|Table|Reconciliation Required|
|---|---|---|---|
|SELECTION|INSERT|GL_JE_BATCHES|Select One|
|SQL Statement|INSERT INTO 4PPSA] PURGE_DATA_#RUN_ID (RUN_ID, CONFIG_ID, TABLE_ID, ROW_ID, CONFIG_TABLE, ROW_NUM)| | |
|Alternate SQL Statement|INSERT INTO 4PPSA] PURGE_DATA_#RUN (RUN_ID, CONFIG_ID, TABLE_ID, ROW_ID, CONFIG_TABLE, ROW_NUM)| | |

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 181
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Make the necessary changes in the SQL Statement /Alternate SQL Statement text box.
2. Click Save button, to update the modified SQL statement.

The field marked as “*” are mandatory fields. Whenever any modifications take place in the configuration, it’s mandatory to generate a code once again to revise the SQL statement accordingly. It is recommended to define criteria for a new configuration in order to fetch a small set of data as per the requirement and accomplish the archiving process effectively in a less time.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 182
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 11.2 Custom Configuration (Execution)

Once the data archiving configuration is designed successfully the data archiving process can be executed. Based on the configuration setup and criteria defined, the data in the source will be archived to the target database and enable the user to view the status in the status monitor.

There are two ways to execute configuration:

1. Executing configuration in the Configurator toolbar.
2. Executing configuration in the following path: Database Archiving > Configurations.

# 11.2.1 Run configuration using Configurator

The Configurator not only allows the user to design and setup configurations, but also run those configurations. The Configurator first ascertains the need to enter any dynamic parameters. If so, the user is required to enter the values for all the dynamic parameters in the run-time parameters screen. Constant parameters (those with static values) are also displayed in the run parameters screen.

Users who do not have the privilege to create the configurations can run the pre-configured configurations from the Designer.

1. From the Configurations folder in the KB Explorer, select the Configuration to run.
2. Click RUN button in the Configurator toolbar. The parameters dialog pops up prompting the user to provide the value(s) against the parameters defined in the configuration.

# Run Parameters Details

|Name|Parameter|Value|
|---|---|---|
|SOB|SOB|289|
|UptoDate|SUptoDate|31-DEC-2000|
|Archive To Database|celectCne| |
|Recordliatic|Database|XML|
|SINGLE-STEP (ARCHIVE Withon Previe)|Continue| |

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 183
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Specify the values in the respective parameters.
2. Select CSV/ Database/ XML option from the ARCHIVE TO dropdown, to archive the data from respective source to target. For example, to archive the data from database to CSV.

If the value provided in the criteria is a static value, then at run-time the archive/purge process is executed based on that value without seeking any value from the user.

If the value defined in the criteria is a dynamic value, then at run-time the application seeks a value from the user and the archive/purge process will be executed based on this value. Also, on providing a dynamic value, the Configuration will automatically run for the dependent values, if any.

If no criterion has been defined for a configuration, then the parameter against the configuration says ‘No Parameters’.
3. Suppose, if the user wants to reconcile the data been archived. Enter the percent of data to be reconciled in the Reconciliation text box. While archiving, the data been archived for each thread will be reconciled for the specified percentage of commit frequency. (Exclusively, it is applicable when source and target are located in a single Repository and it is Oracle database).
4. Click CONTINUE button to run the configuration. By default, custom archiving is done in two-steps. Firstly, it previews and secondly it archives.

If ‘SINGLE-STEP’ option is not selected, the process will be terminated at ‘Preview Completed’.
5. Once Preview process is completed,

To perform only archiving, deselect the ‘Continue Purge’ option. To perform archiving & purge, select ‘Continue Purge’ option.
6. Click Run Configuration button, the custom archive run will be scheduled and a unique Run ID will be assigned to the job and displayed in the Run Parameters window. Note this Job Run ID. Using this ID, Users can view the status of this particular custom archive activity in the Status Monitor.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 184
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Click CLOSE button to close the pop-up window.

3. Go to Status Monitor screen (Status &gt; Status Monitor).

The number of and type of parameters will differ from one configuration to another while executing a configurations, since the user defines the different set of parameters for individual configurations.

To bypass the preview and archive the records directly, then select ‘SINGLE-STEP’ option before clicking CONTINUE button.

The data that matches the criteria is only selected at this point. To continue with the Archive/Purge process, the user has to go to the Status Monitor where the scheduled process can be previewed and executed. However, process starts executing instantly and status will be displayed in the status monitor.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 185
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 11.2.2 Run configuration in Generic Method

Once the configuration is created in the Configurator successfully, the user can execute it whenever it is required. Solix EDMS provides a user-friendly environment to execute the existing configuration based on the requirement.

Navigate through the following path: Database Archiving > Configurations. Select the intended configuration and click Run button.

|Data Archiving| | |Run|Configurations| | | | |
|---|---|---|---|---|---|---|---|---|
|Listing Of {Teconds| | | |Search| |Export As|Customize Columns| |
| | |Configuration Name|Source Mame|Target Mame|Hotes|Standard Configuration| | |
| |ABC| |vIs-VIS|vIS-VIS| | | | |
| | |TEST|vIS-vIS|vIS-VIS| | | | |
| | |CONFIG|vIs-VIS|vIS-VIS| | | | |

# 11.2.3 Monitoring status of Data Archiving execution

Status Monitor screen displays the list of all the jobs run scheduled for execution along with details including status. In the Status Monitor screen, refer to the Run IDs in the first column to locate the Run ID of the required custom archive job.

|Schedule|Status|Status Monitor| | | | | |
|---|---|---|---|---|---|---|---|
|Listing|15 records| |Search| |Export As|Customize Columns| |
|Run Id|Object Hame|Status|Activity|Start Date|End Date|Preview|Parameter Value|
|100015|GL_CONFIG|Process Completed|PURGE_BOTH|25-Jun-2013 13:17:25|25-Jun-2013 13:19:14| | |
|100014|ABC|Process Completed|Code Generation|25-Jun-2013 12:47:24|25-Jun-2013 12:47:24| | |
|100013| |Process Completed|DATA_ASSESSMENT|19-Jun-2013 16:30:17|19-Jun-2013 16:31:11| | |
|100012|ABC|Process Completed|DATA_ASSESSMENT|19-Jun-2013 16:30:02|19-Jun-2013 16:30:42| | |
|100011|TEST|Preview Completed|PURGE_BOTH|17-Jun-2013 16:48:49|17-Jun-2013 16:48:52| | |
|100010|TEST_ASSESS|Process Completed|DATA_ASSESSMENT|17-Jun-2013 15:54:16|17-Jun-2013 15:54:45| | |
|100009|TEST|Process Completed|PURGE_BOTH|17-Jun-2013 15:48:10|17-Jun-2013 15:50:39| | |
|100008|TEST|Process Completed|Code Generation|17-Jun-2013 15:45:30|17-Jun-2013 15:45:30| | |

1. Locate the custom archive job.
2. The status is shown as ‘In Process’ while the process is in progress or has just initiated. The blue font of ‘In Process’ indicates the hyperlink to the archive/purge status of individual tables in the configuration. However, this facility is available only for Archive & Purge processes.
3. On completion of preview, the message in the corresponding status turns to ‘Preview Completed’ and the Status Monitor generates SQL queries and Preview Report for the tables in the Custom Configuration that has been executed.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 186
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

To view the dynamic SQL queries for the tables in the custom configuration, do the following:

Click the corresponding SQL button. A window pops up presenting in sequence the SQL Queries generated at run-time for all the tables in the custom archive configuration.

To get a Summary Report for the custom archive job, do the following:

Click on the corresponding PREVIEW button in the Status Monitor. A pop-up window displaying the Summary Report for the custom archive job that has been scheduled for run. The report gives a preview of space gained, selected rows and total row count in each of the configured tables along with the module name and the space used by each table.

|Status|Status Monitor|Preview|Listing|Of 4econds|Search| | | | |
|---|---|---|---|---|---|---|---|---|---|
|CONFIG|RUN_ID|TABLE_ID|TABLE_NAME|CATEGORY|SELECTED_ROWS|ASSESSMENT_DATE|ARCHIVED_ROWS|PURGED_ROWS|DETAILS|
|100001|100015|10003|GL_JE_LINES|28532|2013-06-25 13:17:52,397|28532|28532|Details| |
|100001|100015|10002|GL_JE_HEADERS|256|2013-06-25 13:17:52,397|256|256|Details| |
|100001|100015|10001|GL_JE_BATCHES|210|2013-06-25 13:17:52,397|210|210|Details| |
|100001|100015|10004|GL_IMPORT_REFERE| |2013-06-25 13:17:52,397| | |Details| |

To view detailed report of each table in Configuration, then click Details hyperlink adjacent to the intended table.

1. When status of configuration is “Preview Completed”, the Run Configuration button in the Summary Report window will be displayed. Once the statistics in the report are conformable, then click Run Configuration button to execute the scheduled custom archive job.
2. The execution of the configuration might take several minutes to complete. Get back to the Status Monitor to check the status after sometime.
3. On successful execution of the custom archive job, the status turns to ‘Process Completed’.
4. The last column in the report contains ‘Details’ appears for each table. To view detailed report of table, click Details hyperlink adjacent to the intended table. A Details Report popup window is displayed with information of the corresponding table.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 187
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Status Status Monitor Details Report

# Details Report

# Eourre Datahaee

# Tarzet Database Toroer

|Listing 1-7 of 210 records|Listing 1-7 of 210 records|Listing 1-7 of 210 records|Listing 1-7 of 210 records|Listing 1-7 of 210 records|Listing 1-7 of 210 records|
|---|
|JE_BATCH_ID|LAST_UPDATE_DATE|LAST_UPDATED_BY|SET_OF_BOOKS_ID|NAME|STAI|
|19034|2001-02-15 05;56,49|1001406|289|AR 4649| |
|19035|2001-02-15 05,56,49|1001406|289|Spreadshe| |
|19036|2001-02-15 06,30;22|1001406|289|AR 4650 R| |
|19052|2001-02-16 02.44:16|1001406|289|Spreadshe| |
|19244|2002-01-23 10,39,07|1001406|289|Spreadshe| |
|19245|2002-01-23 10,39+07|1001406|289|Spreadshe| |

Suppose if the archival process fails then the status will be shown as ‘Archival Failed’. In such cases, click PREVIEW button and then click Rerun Configuration button in the Summary Report window, to re-execute the configurations.

Use the horizontal scroll in the popup window, to view more details of the archive process for each table in the configuration.

Use vertical scroll to view more tables in the configuration.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 188
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 12 Data Masking

Solix EDMS Data Masking Standard Edition (SE) ensures data security and compliance is maintained by masking sensitive data in test databases using several masking algorithms and at the same time maintaining referential integrity of the data to keep the application testing process seamless.

# Functionalities

The functionalities provided by Solix EDMS Standard Edition (SE) to mask the data in the database are listed below.

- Table selection for Data Masking.
- Provide feasibility to view data in table.
- Designing Security Rules and Security Groups.
- Applying Security rules on tables or table columns.
- Designed Wizards for ease navigation and performing the activities (data validation and data masking) swiftly.

# 12.1 Security Rules

This feature is deployed to customize the security rules which play a vital role in data masking process. It enables the user to design the criteria for masking and initialize the algorithms (i.e., Database based algorithms or Java based algorithms) to perform encryption and decryption.

# 12.1.1 Navigation

To access Security Rules link, follow the path: Settings > Data Masking > Security Rules.

# 12.1.2 Add New Security Rule

To add new security rule, do the following:

1. Place cursor at Setting tab in the Solix EDMS main menu. The list of submenus is displayed.
2. Select Database Masking option from the submenu. The list of options is displayed in the drop down.
3. Click Security Rule option from the drop down. The Security Rules screen with the list of existing security rules will be displayed.
4. Click Add button. The Security Rules Details page appears to enter the information corresponding to the security rules.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 189
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Security Rule Details

|Security Rulename|Location|Selert|
|---|---|---|
|Rule|Type Data|Type|
|-SelectOne_|-SelectOne_|Java ass|
|Encnption Kzorithm|Choose File|Mo file choser|

# Notes

You have 1022 characters remaining for

Save
Back
# 5. In the Security Rule Details page, do the following:

1. Enter the name of the security rule in the Security Rule Name, to register in the Solix EDMS Standard Edition (SE).
2. Select the type of algorithm from the Location drop down list, to employ in the security rule. Application means Java based algorithms.
3. Select an appropriate masking method for security rule from the Rule Type drop down list.
4. Select the data type associated to the rule type selected from the drop down list.
5. Specify the source path of Java Class in the Java Class field, to locate and fetch the java based algorithms employed for masking.
6. Click Browse button, to locate the path of the java based algorithms and select the intended Java Class from the source.
7. Once the Java class is defined, automatically the algorithm associated to the encryption will be prompted in the Encryption Algorithm text field. It is non-editable text field.
8. Enter the comments in the Notes.
9. Click Save button, to the security rule information. Once the information is saved successfully, a confirmation message will be prompted on the screen.
If the details provided are invalid, a warning message is prompted.

If the security rule name already exists, a warning message about duplicate name is prompted in the dialog box.

The field marked as “ ” are mandatory fields.

Solix EDMS Standard Edition (SE) supports only Java based algorithms.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 190
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 12.1.3 Editing an Existing Security Rule

To edit an existing security rule, do the following:

1. From the security rules list, select the radio button adjacent to the desired security rule.
2. Click Edit button. The Security Rules page will be displayed.
3. In the Edit Security Rule Details screen, do the following:
1. Make the necessary changes in the required fields.
2. Click Save button, to save the modified information. Once the modified information is updated successfully, a confirmation message is prompted.

The field marked as “ ” are mandatory fields.

If the details provided are invalid, a warning message is prompted.

To return to the list screen from Add / Edit Details screen, click Back button.

# 12.1.4 Deleting the Selected Security Rule

1. Click DELETE button in the Edit Security Rule Details screen. A message pops up on the screen seeking confirmation to delete the selected security rule.
2. Click OK button to delete.

Deletion of a security rule will also delete the corresponding security rule assignments.

To return to the list screen from Add / Edit Details screen, click Back button.

# 12.1.5 Parameters

1. From the security rules list, select the radio button adjacent to the desired security rule.
2. Click Parameters Button. The Security Rule Parameters List screen will be displayed.

# 12.1.5.1 Add New Security Rule Parameter

1. Click Add button. The Security Rule Parameter details page will be displayed.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 191
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Security Rule Parameter Details

|Parameter sequence|Security Rule Parameter Name|Value|Type|Value Data Type|
|---|---|---|---|---|
|~Select one_|SSelect One_| | | |

# Parameter

Value

Default Value

Notes

Description

You have Jjjj characters remaining for notes

Save
Back
1. Enter the sequence number of the parameter in the Parameter Sequence. While executing multiple parameters in the security rule, the parameter will be executed based on the specified sequence number.
2. Enter the name of the parameter in the Security Rule Parameter Name text field.
3. Select the type of parameter value from the Value Type drop down list.
- Category: It implies that the data is fetched based on the categories defined for masking in the Category screen.
- Category Dependent SQL: It implies that the data will be fetched based on the SQL statement encoded using categories defined for masking in the Parameter Value text box.
- Value: It implies that the data is fetched based on the specific value provided for the parameter in the Value text box.
- Dependent SQL: It implies that the SQL statement will be generated based on dependent variable(s) which may be derived from the earlier parameter(s).
4. Based on the Value type selected, select the data type of the parameter from the Value Data Type drop down list. (i.e., Varchar2, String, Date).
5. Enter the value of the parameter in the Parameter Value text field.
6. Enter the default value of the parameter in the Default Value text field.
7. Enter the comments in the Notes.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 192
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Click Save button. Once the information is saved successfully, a confirmation message is prompted on the screen. If the details provided are invalid, a warning message is prompted. If the parameter name already exists, a warning message about duplicate name is prompted.

The field marked as “ ” are mandatory fields.

# 12.1.5.2 Editing an Existing Security Rule Parameter

Following is the procedure to edit an existing Security Rule Parameter:

1. From the security rule parameters list, select the radio button adjacent to the desired security rule.
2. Click Edit button. The Security Rule Parameter Detail page will be displayed.
3. In the Edit Security Rule Parameter Details screen, do the following
1. Make the necessary changes in the required fields.
2. Click Save button, to save the modified information. Once the modified information is updated successfully, a confirmation message is prompted.

If the details provided are invalid, a warning message is prompted.

# 12.1.5.3 Deleting the Selected Security Rule Parameter

1. Click DELETE button in Edit Security Rule Parameter Details screen. A message pops up on the screen seeking confirmation to delete the selected security rule parameter.
2. Click OK button to delete the security rule parameter. The Security Rule Parameter will be deleted.

To return to the Security Rule Parameters list screen from Security Rule Parameter Details screen, click Back button.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 193
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 12.2 Security Rule Assignments (Design)

This feature enables the user to assign the security rule on column of the table, to mask the data according to the criteria defined in the assigned security rule.

# 12.2.1 Navigation

To access Security Rule Assignments link, follow the path: Settings > Data Masking > Security Rule Assignments.

# 12.2.2 Add New Security Rule Assignments

To add new security rule assignment, do the following:

1. Place cursor at Setting tab in the Solix EDMS main menu. The list of submenu is displayed.
2. Select Database Masking option from the submenu. The list of options is displayed in the drop down.
3. Click Security Rule Assignments option from the drop down. The Security Rule Assignments screen with the list of existing security rule assignments will be displayed.
4. Click Add button. The Security Rule Assignments Details page appears to enter the information corresponding to the security rule assignment.

Security Rule Assignment Details

|Assignment Name|DataSource|TableName|Column Name|Select|Rule|Type|Rule Name|Commit Frequency|Parallel Thread:|Writeriz|Notes|Description|
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|~Select One|~Select One|~Select One|~Select One|1uUW|~Select|~Select One| | | | |You have 1022 characters remaining for your notes.| |

Save  Back

In the Security Rule Assignments Details page, do the following:
1. Enter the unique name of the security rule assignment in the Assignment Name.
2. Select database from the Data Source drop down list. Based on the database selected, the corresponding tables will be listed in the Table Name drop down list.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 194
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

c. Select a table from the Table Name drop down list, to apply the security rule on the selected table.
(Note: if the tables required for data masking process is not displayed in the drop down list, then the user need to register the respective tables in the KB Table (Admin > Metadata Repository > KB Tables) and populate the columns).

d. Select a column from the Column Name drop down list, to apply the security rule on the selected column while masking.

e. Select an appropriate masking method from the Rule Type drop down list.

f. Based on the column data type and rule type selected, the corresponding security rules will be displayed in the Security Rule Name drop down list.
Select an appropriate security rule from the list, to perform masking based on the algorithm defined in the security rule.
For example, If table column of Numeric type and rule type as Masking Data is selected, then the security rule associated to Masking and numeric data type will be displayed.
(For e.g., Random Number (Numeric)).

g. Enter the commit frequency in the Commit Frequency text field. (Exclusively for Demo databases, this field is a non-editable field).

h. Enter the number of parallel threads in the Parallel Threads text field, to execute the data masking process accordingly.
(Exclusively for Demo databases, this field is a non-editable field).

i. Enter the criteria associated to the security rule assignment in the Criteria text box, to perform or apply the security rule on a specified column based on the criteria defined.

j. Enter the comments in the Notes.

k. Click Save button, to save the security rule assignment. Once the information is saved successfully, a confirmation message dialog box is prompted.
If the details provided are invalid, a warning message is prompted. If the security rule assignment already exists, a warning message about duplicate name is prompted.

The field marked as “ ” are mandatory fields.

For each application/database, the total number of masking columns is restricted to only ‘10’ in Solix EDMS Data Masking Standard Edition (SE).

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 195
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 12.2.3 Editing an Existing Security Rule Assignment

To edit an existing security rule assignment, do the following:

1. From the security rule assignments list, select the radio button adjacent to the desired security rule assignment.
2. Click Edit button. The Security Rule Assignment page will be displayed.
3. In the Edit Security Rule Assignment Details screen,
1. Make the necessary changes in the required fields.
2. Click Save button. Once the modified information is updated successfully, a confirmation message is prompted.

The field marked as “ ” are mandatory fields. If the details provided are invalid, a warning message is prompted.

# 12.2.4 Deleting the Selected Security Rule Assignment

1. Click DELETE button in Edit Security Rule Assignment Details screen. A message pops up on the screen seeking confirmation to delete the selected security rule assignment.
2. Click OK button to delete. The security rule assignment will be deleted.

To return to the Security Rule Assignment list screen from Security Rule Assignment Details Screen, click Back button.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 196
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 12.3 Security Rule Assignments (Execution)

It allows the user to execute the Security Rule Assignment. Also, this feature provides an option to preview the sample of masked data before masking the original data during execution.

# 12.3.1 Navigation

To execute the security rule assignments, login to Solix EDMS Standard Edition (SE) and follow the path: Data Masking > Run Security Rule Assignments.

|Data Masking|Run Security Rule Assignments| | | | | | | |
|---|---|---|---|---|---|---|---|---|
|Listing 14 of 4 records| | | |Search| | | | |
| | | | | | |Export As|Customize Columns| |
|Assignment Name|Security Rule Name|Table Owner|Table Name|Column Name|Rule Type|Commit Frequency|Parallel Threads|Notes|
|56_20084_RuleAssign_2002|FIXED DATE|DENO_SOURCE|PAYNENTS|PAYIENTDATE|Constants|1080| |created through wizard|
|APP-CONSTANT-DATE|FIXED DATE|AJ45|TEST_KY_TAB|LAST_UPDATE_DATE|Constants|1CC0| | |
|APP-CONSTANT-CHAR|FIXED STRING|AJ45|TEST_KY_TAB|LAST_NANE|Constants|1080| | |
|APP-CONSTANT-NUMBER|DB-FIXED-NUIBER|AJ45|TEST_KY_TAB|PARTY_ID|Constants|1C10| | |

# Run

1. Select the radio button adjacent to the Security Rule Assignment and click Run button. The Run Parameters screen will be displayed to enter the value of the parameter at run time as shown in the figure below.

# Run Parameters

|Name|Parameter|Value|
|---|---|---|
|Parameters for FIXED STRING|Column Name:|EXTENSION; Table Name: EMPLOYEES; Security Rule: FIXED STRING|
| |Value|STR|

Back Continue Preview

Enter the parameter value in the Value text box. To view the sample of masked data before masking the original data, do the following:

1. Click Preview button. The Preview popup window will be prompted which shows data before masking and after masking as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 197
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Preview

Note: This is Data masking preview on small subset of data - Actual masking results may vary when you run masking against actual set of data.

|Column Name|Table Name|EMPLOTEES|Rule Name| |
|---|---|---|---|---|
| |Before Mask|After Mask|krishna|STR|
|krishna|STR| | | |
|krishna|STR| | | |
|krishna|STR| | | |
|krishna|STR| | | |

Click Close button, to navigate to the Run Parameters screen.

1. Click Continue button, to initiate the execution process. On successful execution, a Run ID will be generated and displayed in the Run Schedule screen.
2. To monitor the status of security rule assignment, navigate to Status Monitor screen (Schedule & Status > Status).

The field marked as “*” are mandatory fields.

To limit the rows in the preview results, set the value of mask preview rows count in MASK_PREVIEW_ROWS parameter in the Parameter screen. For example, to limit the rows to 10 then set the default value of mask preview rows count in MASK_PREVIEW_ROWS parameter to “10”. Henceforth, the Preview results screen will display 10 mask preview records exclusively.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 198
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 12.4 Security Groups (Design)

Security Groups enables the user to group ‘n’ number of security rule assignments and execute them parallelly or sequentially at a time in a single execution. It helps to reduce the time consumption while masking huge data.

# 12.4.1 Navigation

To access Security Groups link, follow the path: Settings > Data Masking > Security Groups.

# 12.4.2 Add New Security Group

To add new security group, do the following:

1. Place cursor at Setting tab in the Solix EDMS main menu. The list of submenu is displayed.
2. Select Database Masking option from the submenu. The list of options is displayed in the drop down.
3. Click Security Groups option from the drop down. The Security Groups screen with the list of existing security groups will be displayed.
4. Click Add button. The Security Group Details screen appears to enter the information corresponding to the security groups.

# Security Group Details

|Security|Hame| |
|---|---|---|
|Notes|Description| |
|You have 102 characters remaining for your notes|You have 102 characters remaining for your notes| | |
|Save|Group Assignments|Back|

In the Security Group Details page,
1. Enter Security Group Name.
2. Enter the comments in the Notes.
3. Click Save button. Once the information is saved successfully, a confirmation message is prompted.

If the details provided are invalid, a warning message is prompted. If the security group already exists, a warning message about duplicate name is prompted.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 199
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

The field marked as “ ” are mandatory fields.

# 12.4.3 Editing an Existing Security Group

To edit an existing security group, do the following:

1. From the security groups list, select the radio button adjacent to the desired security group.
2. Click Edit button. The Security Groups page will be displayed.
3. In the Edit Security Group Details screen,
1. Make the necessary changes in the required fields.
2. Click Save button. Once the modified information is updated successfully, a confirmation message is prompted.

The field marked as “ ” are mandatory fields.

If the details provided are invalid, a warning message is prompted.

# 12.4.4 Deleting the Selected Security Group

1. Click DELETE button in Edit Security Group Details screen, a message pops up on the screen seeking confirmation to delete the selected Security Group.
2. Click OK to delete. The Security Group will be deleted.

To return to the Security Groups list screen from Security Group Details Screen, click Back button.

# 12.4.5 Create Group Assignments

To add new Group Assignment, do the following:

1. To add Group Assignment, follow the path: Settings > Data Masking > Security Groups. The Security Group option with the list of security group created in Solix EDMS Data Masking Standard Edition (SE).
2. In Edit Security Group Details page, click Group Assignments button. In the Security Group Assignments screen with the list of existing Security Group Assignments will be displayed.
3. Click Add button. The Security Group Assignment Details page will be displayed.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 200
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Security Group Assignment Details

|Group Name|36_20002|Assignment Name|Sequence|Notes|Description|
|---|---|---|---|---|---|
|You have Jjjcharacteristic remaining|You have Jjjcharacteristic remaining|You have Jjjcharacteristic remaining|You have Jjjcharacteristic remaining|You have Jjjcharacteristic remaining|You have Jjjcharacteristic remaining|

a. The Group Name text field is disabled and it is non-editable.

b. Select an appropriate security rule assignment from the Assignment Name.

c. Enter the sequence number of the group assignment in the Sequence No, to execute the respective assignment in the specified sequence order while executing multiple assignments in the data masking process.

d. Enter Notes.

e. Click Save button. A confirmation message is prompted. If the details provided are invalid, a warning message is prompted. If the security group already exists, a warning message about duplicate name is prompted.

The field marked as “*” are mandatory fields.

# 12.4.6 Editing an Existing Security Group Assignment

To edit an existing Security Group Assignment, do the following:

1. From the security group assignments list, select the radio button adjacent to the desired security group assignment.
2. Click Edit button. The Security Group Assignment page will be displayed.
3. In the Edit Security Group Assignment Details screen,
1. Make the necessary changes in the required fields.
2. Click Save button. Once the modified information is updated successfully, a confirmation message is prompted.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 201
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

The field marked as “ ” are mandatory fields. If the details provided are invalid, a warning message dialog box is prompted.

# 12.4.7 Deleting the Selected Security Group Assignment

1. Click DELETE button in Edit Security Group Assignment Details screen, A message pops up on the screen seeking confirmation to delete the selected Security Group Assignment.
2. Click OK to delete. The Security Group Assignment will be deleted.

To return to the Security Group Assignments list screen from Security Group Assignment Details Screen, click Back button. To return to the Security Group Details screen from Security Group Assignments List Screen, click Back button.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 202
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 12.5 Security Groups (Execution)

It allows the user to execute the selected Security Group. The security rule assignments assigned to the respective security group will be executed according to the sequence order specified. Also, this feature provides an option to preview the sample of masked data before masking the original data during execution.

# 12.5.1 Navigation

To execute the security groups, and follow the path: Data Masking > Run Security Groups.

Data Masking
Run Security Groups
Help

Listing 16-23 of 23 records

Search
Export As
Customize Columns

|Security Group Name|Notes|
|---|---|
|MASK-GROUP|java algorithms for mask columns|
|OTHERS-GROUP| |
|APP-RANDOR-GROUP|java algorithms for random char,num,date|
|APP-SHUFFLE-GROUP|java algorithms for shuffle all data types|
|APP-CONSTANT-GROUP|java algorithms for constants for all data types|
|APPLICATION-TEST|some java algorithms|
|Testhask|group with some db-algorithms|
|TEST_GROUP|GROUP WITH SOME DB-ALGORITHMS|

# Run

1. Select the radio button adjacent to a security group and click Run button. The Run Parameters screen will be displayed to enter the value for the parameter at run time as shown in the figure below.

# Run Parameters

Group Params

Parameters For Security Rule Group: APP-CONSTANT-GROUP

|Name|Parameter|Value|
|---|---|---|
|Parameters For Group Security Rule Assignment|APP-CONSTANT-NUMBER|Column Name: PARTY_ID; Table Name: TEST_MY_TAB; Security Rule: DB-FIXED-NUMBER|
|FIXEDNUMBER|Value|99999|
|Parameters For Group Security Rule Assignment|PP-CONSTANT-CHAR|(Column Name: LAST_NAME; Table Name: TEST_MY_TAB; Security Rule: FIXED STRING)|
|FIXED STRING|Value|STR|
|Parameters For Group Security Rule Assignment|PP-CONSTANT-DATE|Column Name: LAST_UPDATE_DATE; Table Name: TEST_MY_TAB; Security Rule: FIXED DATE|
|FIXED DATE| |2011-01-01|

Back        Continue        Preview

To enter the single value for a group of parameters at a time, select Yes option adjacent to the Group Params. (Or) select No option, to enter the value of the parameters individually.
Enter the parameter values in the corresponding Value text box.

To view the sample of masked data before masking the original data, do the following:

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 203
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# b.

Click Preview button. The Preview popup window will be prompted which shows data of all tables in the security group before masking and after masking as shown in the figure below.

# Preview

Note: This Data masking preview on small subset of data. Actual masking results may vary when you mask against actual set of data.

# Preview for Column Name: PARTY_ID

|Table Name|Rule Name|Before Mask|After Mask|
|---|---|---|---|
|TEST_MY_TAB|DB-FIXED-NUMBER|2222|99999|
| | |2222|99999|
| | |2222|99999|
| | |2222|99999|
| | |2222|99999|

# Preview for Column Name: LAST_NAME

|Table Name|Rule Name|Before Mask|After Mask|
|---|---|---|---|
|TEST_MY_TAB|FIXED STRING|krishhhhhh|STR|
| | |krishhhhhh| |
| | |krishhhhhh| |
| | |krishhhhhh| |
| | |krishhhhhh| |

# Preview for Column Name: LAST_UPDATE_DATE

|Table Name|Rule Name|Before Mask|After Mask|
|---|---|---|---|
|TEST_MY_TAB|FIXED DATE|Rator| |

# c.

Click Close button, to navigate to the Run Parameters screen.

# 4.

Click Continue button, to initiate the execution process. On successful execution, a Run ID will be generated and displayed in the Run Schedule screen.

# 5.

To monitor the status of security group, navigate to Status Monitor screen (Schedule & Status > Status).

The field marked as “ ” are mandatory fields.

To limit the rows in the preview results, set the value of mask preview rows count in MASK_PREVIEW_ROWS parameter in the Parameter screen. For example, to limit the rows to 10 then set the default value of mask preview rows count in MASK_PREVIEW_ROWS parameter to “10”. Henceforth, the Preview results screen will display 10 mask preview records exclusively.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 204
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13 Data Validation

Data warehouses are usually built on multi-tier architectures with multiple data extraction and insertion jobs between two databases. The nature of data changes when they pass from one tier to another. Data Validation is a process of comparing records across source and target databases to ensure that the data is consistent.

Both source database and target database must be homogenous. For example, Oracle to Oracle.

# Functionalities

The functionalities provided by Solix EDMS Validation Standard Edition (SE) to validate the data that resides in the database are listed below.

- User Management
- Environment (Knowledge base) Management
- Source and target definition
- Multiple Data Source (i.e., Source or Target) Assignments
- Designing Configuration with criteria
- Customizing the SQL Statement and defining criteria
- Column selection in Data Validation
- Aggregate functions
- Customizing the column
- Code generator
- Validation Process can be performed between two configurations or two Custom SQL Statements or a single Configuration and a single Custom SQL Statement
- Validation of data based on thresholds (Range or Percentage or Fixed Value)
- Designing Notification Template
- Capabilities to monitor the status of validation process in execution
- Notification email to the users and support teams
- Time based scheduling.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 205
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.1 Custom SQL Statement

SQL Statements are a main criteria used to validate the data in validation process in Solix EDMS Validation Standard Edition (SE). SQL statements help to extract the requisite data from the database and perform validation on the extracted data.

This feature provides the flexibility to customize the SQL statement based on the requirement especially if the user has thorough knowledge of tables and table relations in the database. Also, the user can employ the existing SQL statement for Validation of data to avoid the redundancy and reduce the time-consumption. Initially, the customized SQL statement should be registered and saved, then Solix EDMS Data Validation Standard Edition (SE) validates the SQL statement and populates the metadata of columns pertaining to the specified SQL statement in the given KB data source. Henceforth, the populated columns will be registered to carry out the validation process effectively.

# 13.1.1 Navigation

To customize the SQL Statement, follow the path: Settings > Database Validation > Custom SQL Statement.

# 13.1.2 Creation of Custom SQL Statement

To create a custom SQL Statement, do the following:

1. In Custom SQL Statements screen, click Add button. The Custom SQL Statement Details screen will be displayed to enter the SQL statement as shown in the figure below.

# Custom SQL Statement Details

|KB DataSource|Statement|
|---|---|
|SelectOne|SolStatem Mame|
|Notes|Description|
|You have jjjj characters remaining|Mnot|
|Save|Column|
|Content|Back|

Select the required data source from the KB Data Source drop down list. (Note: exclusively, the data sources assigned to the respective KB will be listed in the KB Data Source drop down list).
Define the name of the SQL Statement in the corresponding field.
Enter the customized SQL statement for validation process in the SQL Statement text box. Based on the SQL statement specified, the data will be extracted from the selected DB data sources for validation process.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 206
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.1.3 Define Criteria

This feature provides the feasibility to customize a criteria to extract the specific data exist in the column or to provide a run-time value ($value) for a specific column in the custom SQL statement. To define criteria, do the following:

1. In Custom SQL Statement Details screen, click Criteria button to define the criteria. The Criteria screen with the existing criteria will be displayed.
2. Click Add button, to define a new criteria. The Criteria Details screen will be displayed as shown in the figure below.

|Criteria Name|Criteria Type| | |
|---|---|---|---|
|Value|Type|Value Data|Type|
|Value Format|Paramet|Mandatory| |
|Sequence|Default Value| | |
|Notes|Description| | |

You have 1022 characters remaining for your notes.

Click Save button to save the SQL Statement Criteria. Once the criteria are saved successfully, a message will be prompted on the screen.

In Custom SQL Statement Details screen, click Columns button to validate the metadata of the columns according to the specified SQL Statement.

The field marked as are mandatory fields.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 207
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Fields

|Criteria Name|Define a name for the Criteria|
|---|---|
|Criteria Type|This drop down enables the user to select an appropriate type of criteria. By default, the criteria type is “Independent”, because the criteria are associated to the Custom SQL Statement.|
|Value Type|This drop down enables the user to define the type of parameter value (i.e., Value or Dependent SQL)|
|Value: It implies that the data is fetched based on the specific value provided for the parameter in the Value text box. Dependent SQL: It implies that the SQL statement will be generated based on dependent variable(s) which may be derived from the earlier parameter(s).|Value: It implies that the data is fetched based on the specific value provided for the parameter in the Value text box. Dependent SQL: It implies that the SQL statement will be generated based on dependent variable(s) which may be derived from the earlier parameter(s).|
|For example, In "SELECT ORGANIZATION_ID, ORGANIZATION_NAME FROM ORG_ORGANIZATION_DEFINITIONS", where organization name is displayed at run time for end user ease and organization id is used in criteria.|For example, In "SELECT ORGANIZATION_ID, ORGANIZATION_NAME FROM ORG_ORGANIZATION_DEFINITIONS", where organization name is displayed at run time for end user ease and organization id is used in criteria.|
|Value Data Type|This drop down allows the user to select an appropriate data type of the parameter. (i.e., Number, String, Date).|
|Note: For the “Dependent SQL” value type, “String” should be selected by default.|Note: For the “Dependent SQL” value type, “String” should be selected by default.|
|Value Format|This field is deployed to enter the format of the value data type selected, if any. For example, if the Value Data type is “Date”, this text box enables the user to provide the format of date (i.e., DD/MM/YYYY).|
|Parameter Mandatory|This drop down enables the user to define the parameter as mandatory or not (i.e., Yes or No).|
|Yes - it implies that the parameter is a mandatory and it is mandatory to enter the value for the parameter. No - it implies that the parameter is not mandatory.|Yes - it implies that the parameter is a mandatory and it is mandatory to enter the value for the parameter. No - it implies that the parameter is not mandatory.|
|Sequence No|This field enables the user to enter the sequence number of the criteria while executing multiple criteria’s in the custom SQL statement.|
|Default Value|This field enables the user to enter the default value of the parameter.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 208
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Dependent SQL

When Value Data Type is selected as ‘Dependent SQL Statement’, this field will be prompted on the screen and enables the user to enter the SQL Statement associated to the parameter.

# Description

This text box enables the user to enter the description pertaining to the criteria.

# Save

This button is employed to save the criteria details.

# Back

This button is employed to navigate to the previous screen from the current screen.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 209
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.2 Custom Configuration

Configurator provides a powerful tool with a configuration design editor to setup a custom configuration for validation. It enables the user to generate re-usable ANSI SQL Code for the configurations to validate the data in the database.

# Features of Configurator:

- Provides a powerful configuration tool that enables automatic design and setup of custom configurations.
- Helps in designing meta-data structure.
- Provides an editor that enables the user to use drag-drop components in order to paint the entity relations for customizations and bolt-on applications.
- Code Generator automatically generates ANSI SQL code, which will enable the user to validate the data in the database, viz., Oracle.

To build the custom configuration, the user needs to create a metadata (i.e., KB tables, KB table relation, Join, and so on) and populate the columns in knowledgebase to build the configuration effectively. This chapter outlines the procedure to create a KB table, KB table Relation and build a configuration for validation. The topics included are given below:

1. KB Table
2. KB Table Relation
3. Creating a Configuration

It is recommended to create KB Table Relation only if the user is designing the configuration based on multiple KB tables.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 210
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.2.1 KB Tables

Tables are the basic unit of data storage in the knowledgebase. KB Table is defined with a table name and a set of columns to extract the data from the database and populate it in the knowledgebase for validation process. Here, the user is provided feasibility to setup a table in the knowledgebase and add the required columns to the table including metadata of the column (Data type, Primary key flag, Primary Key Sequence, and so on).

# 13.2.1.1 Navigation

To access KB Tables link, follow the path: Admin &gt; Metadata Repository &gt; KB Tables.

# 13.2.1.2 Add New KB Tables

To add a new KB tables in the knowledge base, do the following:

1. Place cursor at Admin tab in the Solix EDMS Standard Edition (SE) main menu. The list of submenus is displayed.
2. Select Metadata Repository option from the submenu. The list of options is displayed in the drop down.
3. Click KB Tables option in the drop down. The KB Tables screen with the list of KB tables existing in the knowledgebase will be displayed.
4. Click Add button, to create a new KB table. The KB Table Details screen appears to enter the KB table information as shown in the figure below.
5. In the KB Table Details page, do the following:

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 211
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.2.1.2 Creating a Knowledgebase Table

a. Select an appropriate data source from the KB Data Source drop down list. Once the data source is selected, the table owners associated to the selected datasource will be listed in the Table Owner drop down list. (Note: exclusively, the data sources assigned to the respective KB will be listed in the KB Data Source drop down list).

b. Select the Table Owner from the corresponding drop down list. Once the table owner is selected, the tables associated to the selected table owners will be listed in the Table Name drop down list.

c. Select the Table Name from the corresponding drop down list, to define the table in the knowledgebase.

d. Select “No” option in Target Table Required, as target table is not required for validation process. If “Yes” is selected, Auto Create Target Table, Target Table Name and Target Table Owner fields become visible to create the target table in target database.

e. Enter Category in the corresponding field.

f. Enter Sub Category in the corresponding field.

g. Enter the comments in the Notes.

h. Click Save button. Once the KB table is created and saved successfully, a confirmation message will be prompted on the screen. If the details provided are invalid, a warning message will be prompted on the screen. If the KB Table Name already exists, a warning message about duplicate name will be prompted.

The field marked as are mandatory fields.

# 13.2.1.3 Populating Columns

Once the KB table is created, henceforth the user need to populate the columns in KB table from the specified KB Data source. To populate column in the KB table, do the following:

1. In the KB Table Details page, click Columns button to navigate to KB Table Columns screen. Solix EDMS Standard Edition (SE) invokes all the columns pertaining to the configured table from the enterprise application, which are listed in the KB Table Columns screen.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 212
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

2. Click Populate button to populate all the columns in Solix EDMS Standard Edition (SE). The KB Table Columns page will be displayed as shown in figure below.

# 13.2.1.4 Editing a Column

Sometimes changes may be made to the column(s) of a table in the application instance that has been configured in Solix EDMS Standard Edition (SE) Knowledge Base. In such cases, the same column changes should be made to the respective KB table in Solix EDMS Standard Edition (SE). The Edit function enables the users to make such changes to the columns.

To edit a table column, do the following:

1. In KB Table Columns screen, select the radio button adjacent to the desired column and click Edit button. The KB Table Column Details page will be displayed as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 213
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Figure 13-1: KB Table Column Details screen

1. In the Edit KB Table Column Details screen, do the following:
1. The Column Name remains static and cannot be changed.
2. Make the necessary changes in Data Type, Data Length, Primary key Flag, and Primary key Sequence value.

The field marked as “ ” are mandatory fields.

A piece of data such as salary, etc. may be shared across different Enterprise Applications in an organization but the column names of such data may differ from one application to another. Global Description enables the user to identify the counterparts of such column in different Enterprise Applications by the column description and map those columns to the specific table column.

The Global Description values that are displayed in the list are created in Parameters functionality under Admin Module in Solix EDMS Standard Edition (SE). The administrative user, super user, or apps functional user can create the Global Description values for GLOBAL_MAPPING parameter. These values will be listed in the Global Description drop down list in the Edit KB Table Column Details page.

Click Save button. The selected column will be updated accordingly.
Click Back button to return to the previous page.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 214
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.2.2 KB Table Relations

Table relationship is an association between two or more tables. Relationships are expressed in the data values of the primary and foreign keys. Keys are fundamental to the concept of relational databases because they enable tables in the database to be related with each other. Navigation around a relational database depends on the ability of the primary key to unambiguously identify specific rows of a table.

Knowledge Base (KB) Relations function allows the users to setup the table relations and joins in Solix EDMS Standard Edition (SE). This function is used to configure a child table to inherit the properties of the parent table.

It is recommended to created KB Table Relation, only if the user is designing the configuration based on multiple KB tables.

# 13.2.2.1 Navigation

To access KB Table Relations link, login to Solix EDMS Standard Edition (SE) and follow the path: Admin > Metadata Repository > KB Table Relations.

# 13.2.2.2 Add New KB Table Relations

To add a new KB Table Relations, do the following:

1. Place cursor at Admin tab in the Solix EDMS Standard Edition (SE) main menu. The list of submenu is displayed.
2. Select Metadata Repository option from the submenu. The list of options is displayed in the drop down.
3. Click KB Table Relations option from the drop down. The KB Table Relations screen with the list of existing KB Table Relations will be displayed as shown in the figure below.
4. Click Add button. The KB Table Relations Details screen appears to enter the information corresponding to the KB Table Relations.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 215
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.2.2.3 Editing an Existing KB Table Relations

To edit KB Table Relations, do the following:

1. From the KB Table Relations list, select the radio button adjacent to the desired KB Table Relations.

# 5. In the KB Table Relations Details screen, do the following:

1. Select child table from the Table Name drop down list.
2. Select Parent Table Name from the corresponding drop down list.
3. Select Yes/No option in the Relational Table, to indicate whether both the parent table and child table is a relational table or not.

If “Yes” option is selected, the relations (i.e., Foreign Keys and Primary Keys) exist on the database level.

If “No” option is selected, the relations (i.e., Foreign Keys and Primary Keys) does not exist on the database level but it will be maintained at the business application level.
4. Enter the comments in the Notes.
5. Click Save button. Once the information is saved successfully, a confirmation message dialog box will be prompted.

If the details provided are invalid, a warning message dialog box is prompted.

If the KB table relations name already exists, a warning message about duplicate name is prompted in the dialog box.

The field marked as are mandatory fields.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 216
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

2. Click Edit button. The KB Table Relations Details screen will be displayed.

3. In the Edit KB Table Relations Details screen, do the following:

1. Make the necessary changes in the required fields.
2. Click Save button, to save the modified information. Once the modified information is updated, a confirmation message will be prompted.

The field marked as are mandatory fields.

If the details provided are invalid, a warning message is prompted.

To return to the KB Table Relations List screen from Add / Edit Details screen, click Back button.

# 13.2.2.4 Configuring Table Joins

Joins preserve the lineage of the tables in the KB. This function keeps track of all the links that connects one table with the other tables in the KB.

Path: KB Table Relations Details screen (Refer to KB Table Relations Details)

In KB Table Relation Details screen, click Joins button. The KB Table Joins screen displays the existing table joins corresponding to the KB Table Relation as shown in the figure below.

# 13.2.2.5 Add New KB Table Join

To add new KB Table Join, do the following:

1. In the KB Table Joins screen, click Add button. The KB Table Joins Details screen will be displayed as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 217
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 2. In the KB Table Joins Details screen,

1. Enter the sequence number associated to the join associated to the KB relation in the Join Sequence Number text field. This allows the user to execute the joins based on the given sequence number during execution of KB table relation.
2. Table Name and Parent Table Name specified in the KB Table Relation Details by the user will be displayed in the dialog. All the columns in the Table and the Parent Table will be listed in the drop down lists against Column Name and Parent Column Name respectively.
3. Select the appropriate column name of the child table from the Column Name drop down list to which the linkage to parent table is established.
4. Select the appropriate column name of the parent table from the Parent Column Name drop down list to which the linkage to child table is established.
5. Enter the comments in the Notes.
6. Click Save button, to develop the parent-child relation among the specified tables. Once the information is saved successfully, a confirmation message dialog box is prompted.
- If the details provided are invalid, a warning message dialog box is prompted.
- If the KB Table Join Name already exists, a warning message about duplicate name is prompted in the dialog box.

The field marked as are mandatory fields.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 218
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.2.2.6 Editing an Existing KB Table Join

To edit an existing KB Table Join, do the following:

1. From the KB Table Join list, select the radio button adjacent to the desired KB Table Join.
2. Click Edit button. The KB Table Join Details screen will be displayed.
3. In the Edit KB Table Join Details screen,
1. Make the necessary changes in the required fields.
2. Click Save button, to save the modified information. Once the modified information is updated successfully, a confirmation message is prompted.

The field marked as are mandatory fields.

If the details provided are invalid, a warning message will be prompted.

To return to the list screen from Add / Edit Details screen, click Back button.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 219
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.2.3 Creating a Configuration

Solix EDMS Standard Edition (SE) provides the feasibility to generate re-usable ANSI SQL Code automatically. The configurator is a powerful tool designed to setup the custom configurations to validate the data in the validation process. The tool includes Auto-Config capabilities. The KB tables and KB Relation (optional based on requirement) are requisite to build the configuration for validation and stores the configurations in the KB Explorer. Once the configuration is created and code is generated, the user can initiate the validation process in Solix EDMS Validation Standard Edition (SE). To create a new configuration, do the following:

# 13.2.3.1 Navigation

1. Navigate to the following path: Setting > Database Validation > Configurator. The Configurator screen will be displayed as shown in the figure below.

# Table 2: Illustrate the dashboard of Configurator

|Fields|Functionality|
|---|---|
|Configurations|The Configuration pane is designed to store the configurations created and saved in the Configurator for Data Validation and Data Archiving.|
|Metadata|The Metadata pane is designed to store the tables created in the respective knowledgebase. It maintains the tables and provides feasibility to design the configuration using tables in metadata.|
|Configurator Design Space|This pane provides flexibility to design the metadata structure of configuration such as tables, establishing link between related tables, configuring the driving tables and so on. It shows the tables selected for creating metadata structure in configuration and once populated in the Design Space, a table can be dragged and placed anywhere in the space according.|
|New|This button is employed to create a new configuration.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 220
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Once the metadata structure is designed and appropriate criteria are setup for the configuration. This button is deployed to save the details of configuration created or update the information of configuration as per the modification. Automatically, the saved configuration will be accumulated in the Configuration pane and can be re-usable in future.

|Save|This button is employed to save the details of configuration created or update the information of configuration as per the modification.|
|---|---|
|Save As|This button is employed for the duplication of existing configuration or to save the information of existing configuration with different configuration name.|
|Delete|This button is employed to delete the configuration.|
|Link|This button is employed to establish the parent-child relationships among the selected tables in Design Space. Note: only if the relation among the tables is defined/exist in the knowledgebase, the relationships among those tables can be established.|
|Criteria|This button is employed to define criteria in the configuration for validation process, in order to extract the data for the validation based on the given criteria.|
| |For example, If the user needs to validate the specific data of the table or apply some condition to extract a specific data in the database. In such case, the user defines the condition in the Criteria Details screen.|
| |Note: Solix EDMS Standard Edition (SE) restricts to save a new configuration, if the criteria are not defined for the respective configuration.|
|Run|This button is employed to execute the data archiving configuration. By default, this button will be disabled for data validation configurations.|
|Details|This button is employed to view the details of selected configuration and criteria.|
|Formula|This button is deployed to define the formula on a predefined column in the configuration. By default, this button will be disabled for data archiving configurations.|
|Format|This button is deployed to format the configuration as per the requirement. Only, the saved configurations can be formatted.|
|Generate Code|This button is employed to generate a re-usable ANSI SQL code based on the criteria defined in the respective configuration. The generated SQL code will be employed in the validation process to validate the data.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 221
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

This button facilitates to utilize various kinds of shapes (such as square, rectangle, arrows, and so on) while designing the configuration.

# 2. Expand the Configurations > Validation Config folder, to view the saved data validation configurations.

# Settings  Data Validation  Configurator

|Configurations|New|Save|Save As|Delete:|
|---|---|---|---|---|
|Validation Config| | | | |
|VALIDATION|GLGL_E_BATCHES|GLGL_JE_HEADERS|GLGL_IMPORT_REFERENCES| |

# 13.2.3.2 Initiate the creation of new configuration

1. Navigate to Metadata > OracleERP11i > Tables > Category > [Table Owner] folder in the Configurator, to list all the tables existing in the corresponding table owner as shown in the figure below.

# Help

# Code Generator    Shapes

GLCL_JE_LIN

2. Now, select the tables required to create a configuration from the Metadata pane. Drag and drop the tables in the configuration designer pane (i.e., Design Space) to build a new configuration as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 222
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Once the tables are selected from the metadata and dragged into the Configurator Design Space, the user needs to develop a link between the tables based on the parent-child relationship.

The user must have the knowledge of the parent-child relationship among the tables selected. Inappropriate selection of tables may result in data being orphaned partially or completely.

# 13.2.3.3 Create Table Links

To create links between tables, do the following:

1. First ascertain which tables to connect and in what order. The user must consider the parent-child relationships among the selected tables.
2. Click the button that appears on the Configurator toolbar.
3. In the Configurator Design Space, click the first table (child table) and then click the second table (header table) depending on the parent-child relationship between the tables.
4. Both the tables are linked.
5. Repeat the above procedures to connect all the selected tables according to the table relationships.

To populate related tables and establish links between them automatically, do the following:

1. Select the Table from the Tables folder in the KB Explorer. Drag and drop the selected table in the Design Space.
2. In the Design Space, right click on the selected table. A drop down menu appears on the screen and select Auto Config option from the menu as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 223
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

8. Once the option is clicked, the tool picks and populates all the tables related to the respective table in the design space; then it establishes relational links among those tables; and finally assigns an appropriate table from the selected ones as the driving table that drives the archiving process as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 224
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.2.3.4 Configure Driving Table

To set the driving table, do the following:

1. Once the Parent-child relations is established, to set the driving table in the linked tables. Right-click the table that is intended to drive the configuration, a menu drop down list appears in the Design Space as shown in the figure below.
2. Once the Driving table option is clicked, the respective table turns green and represents as a driving table in the configuration as shown in the figure below.

Once the tables are linked and the driving table is assigned, this accomplishes the process of designing a configuration.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 225
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.2.3.5 Setup Configuration Details:

The user needs to setup the configuration details as per the requirement. To setup the configuration, do the following:

1. Click  button appears in the Configurator toolbar.
2. The Configuration Details window prompts on the screen, and enables the user to provide the Configuration Details screen as shown in the figure below.

# Configuration Details

|Config Type|Validation| | |
|---|---|---|---|
|Config Name|Knowledge Base|Default KB| |
|Notes| | | |
|Save|Close| | |

In the Configuration Details window:
1. Select the Validation option from Config Type drop down, to define the configuration is built for data validation process.
2. Enter Configuration Name in the corresponding field.
3. Select the appropriate KB associated to the configuration from the corresponding drop down list.
4. Enter the Description in the corresponding field.

Click Save button, to save the configuration details. Once the configuration details are saved successfully, the respective configuration is created and saved in the Custom folder under Configurations in the KB Explorer.
In Right-pane of Configurator, Right-Click on any table in the configuration (for example, GL.GL_JE_BATACHES). Click Properties option in the menu, the Table Properties window prompts the list of column available in the corresponding table (i.e., GL.GL_JE_BATACHES) as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 226
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Table Properties (GLGL JE_BATCHES)

|Column Name|Column Alias|Data Type|Primary Key|PK Sequence|Keroum Function|
|---|---|---|---|---|---|
|CONTROL_TOTAL|CONTROL_TOTAL|NUMBER(O)| | |-Select One|
|CREATION_DATE|CREATION_DATE|DATE| | |-Select One|
|DATE_CREATED|DATE_CREATED|DATE| | |-Select One|
|DEFAULT_EFFECTIVE_DATE|DEFAULT_EFFECTIVE_|DATE| | |-Select One|
|EARLIEST POSTABLE_DATE|EARLIEST_POSTABLE_D|DATE| | |-Select One|
|LAST UPDATE_DATE|LAST_UPDATE_DATE|DATE| | |-Select One|
|POSTED_ DATE|POSTED_ DATE|DATE| | |-Select One|
|RUNNING TOTAL_ACCOUNTED_|RUNNING_TOTAL_ACCC|NUMBER(O)| | |-Select One|
|RUNNING TOTAL_ACCOUNTED_|RUNNING_TOTAL_ACCC|NUMBER(O)| | |-Select One|
|RUNNING_TOTAL_CR|RUNNING_TOTAL_CR|NUMBER(O)| | |-Select One|
|RUNNING TOTAL_DR|RUNNING TOTAL_DR|NUMBER(O)| | |-Select One|

6. By default, the columns of table will be selected and considered for the validation process. Exclusively, the selected columns of the table will be carried out in Validation process for data validation. (Note: to exclude the columns in validation process, uncheck the respective columns manually).

Also, the user can provide an alias name for all the selected columns. The user can select/perform the required Group Function on specific columns (such as Max, Min, etc…).

7. Click Save button, to save the selection in Table properties and apply the selected group function on the selected columns if any.

8. In case the user wants to define a formula for a column, the Custom Column (i.e., Formula) feature enables the user to define the formula on a predefined column in the configuration. To add the custom column, do the following steps:

1. In Configurator design window, click Formula button which appears on the top of the window. The Config Formula Columns window will be prompted as shown in the figure below.

# Config Formula Columns

|Config Name|Config Formula|Group Function|Column Alias|Sequence|Formula Data Type|
|---|---|---|---|---|---|
|ORDER_CONFIG|OE_ORDER_LINES_ALL|PRICING_QUAN|ITEM_COST| |NUMBER|

Add Edit

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 227
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

b. Click Add button, to add a new custom column in the configuration. The Config Formula Details window will be prompted as shown in the figure below.

# Config Formula Details

|ONT OES ORDER_HEADERS_ALL:|Formula|ORDER_LINES_ALL|PRICING_QUANTITY|
|---|---|---|---|
|OE_ORDER_LINES_ALL|UNIT_SELLING_PRICE|100|SALES_CREDITS PERCENT|
|Group Function|~Select Line|Column|Alias|
|Data Type|NUMBER|Enable|Yes|
|Save|Back| | |

b. Define the formula for the column in the Formula text box. It is recommended to make use of tablename.columnname (for example, "OE_ORDER_HEADERS_ALL.HEADER_ID") in formula columns to avoid run time issues.

c. Select the appropriate aggregate function from the Group Function drop down list if needed.

d. Enter the name of the column in the Column Alias text field.

e. Select an appropriate data type from the Data Type drop down list.

f. Select Yes/No option from the Enable drop down list, based on the option selected the custom column will be enabled/disabled during validation process.

g. Click Save button, to save the configuration formula details and apply the formula on the respective column in the configuration. Once the configuration formula is saved successfully, a message will be prompted in a popup window.

9. To add criteria in the configuration, click Criteria Button. The Criteria Details screen popup window prompts as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 228
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Criteria Details Screen Functionality

|Fields|Functionality|
|---|---|
|Criteria Name|Define a name for the Criteria in configuration|
|This drop down enables the user to select an appropriate type of criteria. The criteria type can be Static, Dependent and Independent.|This drop down enables the user to select an appropriate type of criteria. The criteria type can be Static, Dependent and Independent.|
|Static: It implies that the configuration actions will be based on the value specified in Criteria.|Static: It implies that the configuration actions will be based on the value specified in Criteria.|
|Dependent: It implies that the criteria designed are dependent on a particular column of the specific table.|Dependent: It implies that the criteria designed are dependent on a particular column of the specific table.|
|Independent: It implies that the criteria are independent of tables and columns associated to specific configuration.|Independent: It implies that the criteria are independent of tables and columns associated to specific configuration.|
|Table Name|This drop down enables the user to select an appropriate table that holds the attribute value.|
|Column Name|Based on the table selected, the corresponding columns will be listed in this drop down. It enables the user to select the column on which the respective criteria will be applicable.|
|Join Type|This drop down enables the user to select an appropriate operand required for the criteria. (i.e., AND or OR).|
|Operator|This drop down enables the user to select an appropriate conditional operator required to design criteria. (i.e., =, >, <, <= and so on).|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 229
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

This drop down enables the user to define the type of parameter value (i.e., Value or Dependent SQL)

- Value: It implies that the data is fetched based on the value provided in the Value text box.
- Dependent SQL: It implies that the SQL statement will be generated based on dependent variable(s) which may be derived from the earlier parameter(s).

For example,

# Value Type

"SELECT ORGANIZATION_ID, ORGANIZATION_NAME FROM ORG_ORGANIZATION_DEFINITIONS" where organization name will be displayed at run time parameters for end user ease and organization id will be used in criteria.

SQL: During the runtime, the SQL statement will be executed and the validation will be executed based on the value obtained from running the SQL script specified in Value.

For example,

SELECT ORGANIZATION_ID FROM ORG_ORGANIZATION_DEFINITIONS

This drop down facilitates to select an appropriate data type of the parameter. (i.e., Number, String, Date).

# Data Type

Note: For the “Dependent SQL” and “SQL” value type, “String” should be selected by default.

# Format

If the Data type is “Date”, this text box enables the user to provide the format of date. For example, MM/DD/YYYY.

This drop down enables the user to define the parameter as mandatory or not (i.e., Yes or No).

# Parameter Mandatory

- Yes - it implies that the parameter is mandatory, the value must be entered
- No - it implies that the parameter is not mandatory.

# Sequence No

This text box enables the user to enter the Sequence of Criteria while execution.

Exclusively when “OR” operator is selected in Join, this drop down list enables the user to link the current criteria to this existing criteria and place it in parenthesis during validating the data.

# Value

This text enables the user to enter the appropriate value of the parameter according to the Value Type selected.

# Default Value

This text enables the user to enter the default value of the parameter.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 230
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Description

This text box enables the user to enter the description pertaining to the criteria.

# Save

This button is employed to save the criteria details.

# 10.

Enter the criteria details and click Save button. Once the criteria is saved successfully, the output of the validation process will be generated based on the defined criteria. Henceforth, generate a code for the respective configuration.

# 11.

Click Generate Code button to generate the SQL Statement (i.e., Alternate SQL statement) for the corresponding config in the Code Generator window as shown in the figure below.

Now, the generated SQL statement will be used in validation process for validating the data accurately. Also, user is provided an option to edit the generated code. To edit generated code, do the following:

# a.

In Code Generator screen, select the appropriate SQL Statement and click Edit button. The Generate Code Details screen will be displayed as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 231
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

b. Make the necessary changes in the SQL Statement /Alternate SQL Statement text box.

c. Click Save button, to update the modified SQL statement.

The field marked as “*” are mandatory fields. Whenever any modifications take place in the configuration, it’s mandatory to generate a code once again to revise the SQL statement accordingly. It is recommended to define criteria for a new configuration in order to fetch a small set of data as per the requirement and accomplish the Validation process effectively in a less time.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 232
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.3 Data Validation Process

Once the SQL Statement is generated automatically or customized manually, the data validation process can be initiated effectively. Based on the requirement and the data to be validated, this chapter illustrates the settings of validation (i.e., mapping, comparison and so on), designing a template for output generated for the email notification and the execution of the validation. This chapter outlines the procedure of data validation process and the topics included are:

- Data Validation Mapping
- Execution of Data Validation process
- Notification Template

# 13.3.1 Data Validation Mapping

This feature is designed to map the intended source database to target database for data validation process. It enables the user to create validation mapping and provide the comprehensive information (such as source type, target type, source database, target database, comparison type, and so on) requisite to extract the data for data validation process.

# 13.3.2 Navigation

To create data validation mapping, follow the path: Settings > Database Validation > Validation.

# 13.3.2.1 Creation of Data Validation Mapping

To create a Data Validation Mapping, do the following:

Settings   Data Validation   Validations Listing

Search

|Data Validation Name|Source Object Type|Source Object Name|Source Name|
|---|---|---|---|
|TESTRUN|CUSTOM_SQL|CUSTOM_SQL_SRC_TESTRUN|Demo_Source|

Add     Edit    Column Matching     Column Comparison

1. In the Validation screen, click Add button, to assign the source and target for the data validation. The Data Validation Source & Target Details screen will be displayed to enter the data validation details as shown in the figure below.

Export As     Customize Columns

Target Object Type

CUSTOM_SQL

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 233
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Settings

# Data Validation

# Validations

# Validation Details

# Data Validation Source & Target Details

# Data Validation Name

Enable

# Source Type

~Select One

# Source Name

~Select one

# Source Database

Select One

# Target Name

-Select One-

# Target Database

Select One

# Host Database

~Select One

# Data Validation Details

# Comparison Method

~Select One

# Commit Frequency

~Select One

# Show Data Exists Source And Target

Retain Staging Tables

# Send Validation Results through Email (Optional)

# Notes

Description

You have jjjj characters remaining. Duno

Save Back

|Sl. No|Field Name|Description|
|---|---|---|
|1|Data Validation Name|It enables the user to define a unique name for the data validation. This feature facilitates to enable or disable the data validation during validation process.|
|2|Enable|“Yes” implies the Validation will be active. “No” implies inactive. This drop down enables the user to select the appropriate Source Type. The two possible source types are Configuration and Custom SQL.|
|3|Source Type|If Validation is being created from the tables defined in the Knowledge Base (KB) Repository (database), then select Configuration as the Source Type. If Validation is being created from a custom SQL, then select Custom SQL as the Source Type.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 234
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

This drop down enables the user to select the Target Type. The two possible target types are Configuration and Custom SQL.

If the Validation is being created from the tables defined in the Knowledge Base (KB) Repository (database), then select Configuration as the Target Type.

If the Validation is being created from a custom SQL, then select Custom SQL as the Target Type.

# 4 Target Type

# 5 Source Name

Based on the Validation Source Type selected, the list of Configuration /Custom SQL existing in the source. It enables the user to select the source name from the drop down list.

# 6 Target Name

It enables the user to select the target name from the drop down menu.

# 7 Source Database

It enables the user to select source database from the drop down menu.

# 8 Target Database

It enables the user to select target database from the drop down menu.

# 9 Host Database

This drop down enables the user to select the Host/Staging database. This is the database where the source and target data will be copied from their respective databases for Validation. The validation’s results are stored in this database. A source or target database can also be a host database.

# 10 Comparison Method

The Comparison method can be Matched Records or Mismatched Records.

If Matched Records option is selected, the Validation process identifies the data which are matched in both source and target databases. The Show Data Exists in Source And Target check box will be visible on the screen.

If Mismatched Records option is selected, the Validation process identifies...

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 235
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 11

Commit Frequency to commit data after certain number of rows from both source and Target Databases.

# 12

This drop down facilitates to select the Notification template for sending (i.e., emailing) the Validation results.

# 13

Notification Preference would be Attachment or Inline. Based on selected value results would be sent as an attachment or an inline text of a mail.

# 14

This text field enable to enter the email address of users to whom the notification emails should be sent when the source and target matches exactly, or within the defined threshold percent or range. It is recommended to use comma/semicolon, to enter multiple users email address list.

# 15

This text field enables the user to enter the email address of users to whom the notification emails should be sent when the source and target don’t match exactly, or their differences exceeds the defined threshold percent or range. It is recommended to use comma/semicolon, to enter multiple users email address list.

# 16

This feature facilitates to retain the staging tables or not.

“Yes”- enables the user to fetch the validation results from the staging tables and display in the Preview screen. Whenever the tables are not required for verification or review process, the staging tables can be deleted manually.

“No” – enables the user to delete the validations staging tables automatically and the validation results will not be displayed in the Preview screen.

Note: In Retain Staging Tables, “Yes” option is disabled because Solix EDMS Standard Edition (SE) application does not support Retain Staging.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 236
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 18 Show Data Exists in Source and Target

Tables feature. If the check box is selected, the data that exist in both source and target (Matched or Mismatched data) will be validated and sent as attachment/inline text in the Notification email. (As per EXACT/THRESHOLD functionality)

If the check box is selected, the Notification Email contains only the data present in source but not in target (as an attachment or inline text). “No” implies this data will not be sent in the Notification Email.

Note: This check box will be visible only when Comparison method is selected as Mismatched Records.

# 19 Show Data Exists in Source

If the check box is selected, the Notification Email contains only the data present in target but not in source (as an attachment or inline text). “No” implies this data will not be sent in the Notification Email.

Note: This check box will be visible only when Comparison method is selected as Mismatched Records.

# 20 Show Data Exists in Target

It enables the user to add any notes related to the Validation process. This is only for DISPLAY PURPOSE.

# 21 Notes Description

This button enables the user to save the information provided and once it is saved successfully, a new Validation will be created in the Knowledge Base Repository.

# 22 Save

This button enables the user to navigate to previously visited screen.

# 23 Back

1. Define the name of the validation mapping in the Data Validation Name text field.
2. Select the source type for the validation from the Source Type drop down list.
3. Select the target type for the validation from the Target Type drop down list.
4. Select the source name from the Source Name drop down list.
5. Select the Target name from the Target Name drop down list.
6. To assign source to the validation, select an appropriate database from the Source Database drop down list. The selected database will be considered as Source while Validation.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 237
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. To assign target to the validation, select an appropriate database from the Target Database drop down list. The selected database will be considered as Target while Validation.
2. Select the database from the Host Database drop down list, the database where the source and target data will be copied from their respective databases for Validation. The validation results are stored in this database. A source or target database can also be a host database.
3. Select an appropriate method for comparison of data from the Comparison Method drop down list. (i.e., Matched Records or MisMatched Records). If “Matched Records” option is selected, only Show Data Exists in Source and Target check box will be visible on the screen.
4. Enter the frequency value in the Commit Frequency text field, to commit data after specified number of rows from both source and Target Databases.
5. Select Yes/No option in the Retain Staging Tables, to retain the staging tables or not.
6. By default “No” option is selected, because this Solix EDMS Validation Standard Edition (SE) version does not support retaining staging tables. The validation staging tables will be dropped automatically.
7. In Notification Email section, enter the email address in the Success Email text field, to which the notification emails should be sent when the source and target matches exactly, or within the defined threshold percent or range. It is recommended to use comma/semicolon, to enter multiple users email address list.
8. Enter the email address in the Failure Email text field, to which the notification emails should be sent when the source and target don’t match exactly, or their differences exceeds the defined threshold percent or range. It is recommended to use comma/semicolon, to enter multiple users email address list.
9. Select the template for the notification from the Notification Template drop down list, for sending (i.e., emailing) the Validation results.
10. Select the required preference from the Notification Preference drop down list (i.e., Attachment or Inline). Based on selected value results would be sent as an attachment or an inline text of a mail.
11. Enter the comments in the Notes text box.
12. Click Save button, to save the validation setup and a new validation will be created in the Knowledge Base.

The field marked as are mandatory fields.

In Retain Staging Tables, “Yes” option is disabled because Solix EDMS Standard Edition (SE) application does not support Retain Staging Tables feature.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 238
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.3.2.2 Column Matching

Matching columns enables the user to select the primary key or unique index column from the source and target table required to register for column matching. Based on matching columns, the data will be compared for columns selected in Column comparison screen.

For example, in the below query is used in data validation process.

SELECT        A.ORDER_NUMBER,
SUM (B.PRICING_QUANTITY) PRICING_QUANTITY,
SUM (B.SHIPPED_QUANTITY) SHIPPED_QUANTITY,
SUM (B.ORDERED_QUANTITY) ORDERED_QUANTITY,
SUM (B.SHIPPED_QUANTITY * B.UNIT_SELLING_PRICE) TOTAL_COST
FROM          OE_ORDER_HEADERS_ALL A, OE_ORDER_LINES_ALL B, OE_SALES_CREDITS C
WHERE         A.HEADER_ID = B.HEADER_ID
AND A.HEADER_ID = C.HEADER_ID
AND A.ORG_ID = 204
GROUP BY      A.ORDER_NUMBER

As per above query, ORDER_NUMBER is unique and hence this column will be used in Column matching to compare data against Order Number.

To perform Column Matching, do the following:

1. In Validation page, click Column Matching button.
2. The Validation Columns Matching screen will be displayed with available list of column matching. Users can add multiple column matchings’ as per business functionality.
3. Click Add button, to add a new matching column.
4. In Matching Columns Matching Details screen will be displayed as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 239
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Settings

# Data Validation

# Validations

# Validation Column Matchings

# Validation Column Matching Details

|Source Columns|Target columns|
|---|---|
|~Select| |

a. Source Columns drop down box will be showed all enabled columns from Source Object (Config/Custom SQL). Herein, the primary key or unique index column is selected to register for matching the column.

b. Target Columns drop down box will be displayed all enabled columns from Target Object (Config/Custom SQL). Herein, the primary key or unique index column is selected to register for matching the column.

c. Validate Column will be enabled based on selected option Yes/No.

d. Click Save button to save the validation column matching details.

The field marked as are mandatory fields.

# 13.3.2.3 Column Comparison

Comparison columns feature enables the user to validate the data between source and target databases based on the specified mapping criteria.

For example,

The following query is used in Validation process.

SELECT A.ORDER_NUMBER,
SUM (B.PRICING_QUANTITY) PRICING_QUANTITY,
SUM (B.SHIPPED_QUANTITY) SHIPPED_QUANTITY,
SUM (B.ORDERED_QUANTITY) ORDERED_QUANTITY,
SUM (B.SHIPPED_QUANTITY * B.UNIT_SELLING_PRICE) TOTAL_COST
FROM OE_ORDER_HEADERS_ALL A, OE_ORDER_LINES_ALL B, OE_SALES_CREDITS C
WHERE A.HEADER_ID = B.HEADER_ID
AND A.HEADER_ID = C.HEADER_ID
AND A.ORG_ID = 204
GROUP BY A.ORDER_NUMBER

In above query, apart from ORDER_NUMBER column remaining all columns can be used for the purpose of Column comparison. Based on business requirement, the comparison method varies accordingly.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 240
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# To perform Column Comparison, do the following:

1. In following Validations page, click Column Comparison button.
2. The Validation Column Comparison screen will be displayed with a list of existing column comparisons. The user can add multiple columns for comparison as per business functionality.
3. Click Add button to add a new comparison column. The Validation Source & Target Column Comparison Details screen appears as shown in the figure below.
4. In Validation Column Comparison Details screen, do the following:
1. Source Columns drop down display the columns enabled from Source Object (Config/Custom SQL) and allow the user to select the source column for data validation.
2. Target Columns drop down display the columns enabled from Target Object (Config/Custom SQL) and facilitate to select the target column for data validation.
3. Based on the data type of Source and Target Column, the corresponding option will be prompted in the Mapping Type drop down list, to perform validation effectively based on the criteria selected.
- For Character columns, Exact Match option will be prompted in the Mapping Type. This option enables to validate the data of Source and Target Column exactly.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 241
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

For Numeric or Date columns, Define Threshold option will be prompted in the Mapping Type. This option enables to validate the data based on Threshold Type (i.e., Range Difference, Percentage Difference or Fixed Value) selected. Additionally, The Threshold Type and Threshold Value will be prompted on the screen as shown in the figure below.

# Settings

# Data Validation

# Validations

# Validation Column Comparisons

# Validation Column Comparison Details

|Source Columns|Target Columns|
|---|---|
|colT-CTL-STI-ME V-RcH-RF|colT-CTL-STI-ME -RCH-RI|

Mapping Type

Validation Threshold

Threshold Type

Percentage Difference

Threshold Value

Validate Column

Save

Back

Select the appropriate type from the Threshold Type (i.e., Range Difference or Percentage Difference or Fixed Value).

If Range Difference is selected, Threshold From value and Threshold To Value will be prompted on the screen. Enter the range for threshold in Threshold From value and Threshold To Value text fields.

If Percentage Difference is selected, Threshold value field will be displayed. Enter the percentage value for threshold in the Threshold value text field.

If Fixed Value is selected, Threshold value field will be displayed. Enter a fixed value for threshold in the Threshold value text field. For example, if Threshold value = 10, it is considered as 0-10.

The Validate Column will be enabled based on selected option Yes/No. It facilitates to enable/disable the respective column comparison during data validation process.

Click Save button, to save the validation column comparison details.

The field marked as are mandatory fields.

For Date columns, only Range Difference and Fixed Value options are prompted in the Threshold Type drop down and enables to validate the data based on the selected threshold type.

In Source Column and Target Column drop down, “All Columns” option provides feasibility to register all the columns in source and target tables for.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 242
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.3.2.4 Notification Template

This feature enables the user to design a style sheet for notification in order to display the output of the Data Validation result in HTML file as per the user requirement. As the validation result is generated in HTML, the style sheet for the notification should be designed using HTML codes. Once the validation is executed successfully, the notification mail enclosed with HTML file will be sent to the specified user automatically.

To design a notification template, do the following:

1. Navigate to the following path: Setting > Data Validation > Notification Templates. The Notification Templates screen appears as shown in the figure below.

|Settings|Data Validation|Notification Templates| |
|---|---|---|---|
|Listing 1-2 of records|Search|Export As|Customize Columns|
|Notification Template Name|Hotes| | |
|Grid with Colors Template|Grid with Colors Template| | |
|Simple Grid Template|Simple Grid Template| | |
|Add|Edit| | |

Click Add button, to design a new template for notification. The Notification Template Details screen appears as shown in figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 243
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Notification Template Details

# Notification Template Name

Grid with Colors Template

|@results_type|@column_name|@column_value|
|---|---|---|
|~table|sbrt| |

# Notes

# Description

Grid with Colors Template

You have 975 characters remaining for your notes.

# Instructions

1. Enter the name of the template in the Notification Template text field.
2. Enter the style sheet data in the Style Sheet text box. The style sheet data should be encoded in HTML. While generating a notification, the result will be displayed according to the designed style sheet.
3. @results_type: Based on the Comparison Method selected in the Validation Mapping, the results of Validation will be generated and the type of result will be displayed @results_type in the HTML file. For example “Mis-Matched”.

@column_name: Display the column name of the data fetched based on the Comparison Method selected in the Validation Mapping.

@column_value: Display the data (i.e., value) fetched according to the Comparison Method selected in the Validation Mapping.
4. Enter the comments in the Notes text box.

Click the Save button to save the notification template information.

Once the notification template is saved, the respective template will be populated automatically in the list of Notification Template drop down list in the Validation Mapping Details screen.

The fields marked as are mandatory fields.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 244
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Email Server Settings for Notification

While preparing notification template, if the user wants to use any email server other than the Solix Mail server, the parameters associated to the mail server should to be updated. The following table provides the list of parameter which has to be updated.

|Parameters|Description|
|---|---|
|MAIL_SERVER|IP address of the email server, to which the emails will be send|
|MAIL_SERVER_PORT|Port of the email server which is used to sent the emails|
|EMAIL_USER|Email address of the user, through which the notification emails will be sent|

To edit Email Server setting, do the following:

1. Navigate through the following path: Admin &gt; Manage Source/Target Dictionary &gt; Parameters. The Parameters screen will be displayed with parameters defined in the Solix EDMS Standard Edition (SE).
2. To edit the parameter information of the MAIL_SERVER, do the following:
1. In Parameter Screen, select MAIL_SERVER parameter and click Edit button. The Parameter Details screen with mail server information will be displayed as shown in the figure below.
2. Admin Manage Source; Target Dictionary Parameters Parameter Details

|Parameter Name|Parameter Type|
|---|---|
|MAIL_SERVER|Default value|
|10.L15LZO|10.L15LZO|

Notes: Enter the IP address of the mail server

Description: Holds IP Address of the mail server to be Used while sending the messages to the User. Mail server from which the mails to the EDMS users has to be sent. You have 847 characters remaining for your notes.

Save Back

Enter IP address of the user mail server in the Value and Default Value text field. For example, 10.1.152.70.
3. Click Save button, to save the IP address of the mail server.
3. To edit the parameter information of the MAIL_SERVER_PORT, do the following

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 245
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 3. Parameter Configuration

# a.

In Parameter Screen, select MAIL_SERVER_PORT parameter and click Edit button. The Parameter Details screen with mail server port information will be displayed as shown in the figure below.

Admin
Manage Source Target Dictionary
Parameters
Parameter Details

# Parameter Details

|Parameter Name|Parameter Type|
|---|---|
|MAIL|SERVER_PORT|
|Value|Default value|
|Notes|Enter the port number of the mail server|
|Description|Holds Port Number of the mail server to be Used while sending the messages to the User|
|You have 913 characters remaining for your notes|You have 913 characters remaining for your notes|

Save Back

# b.

Enter port number of the user mail server in the Value and Default Value text field. For example, 25.

# c.

Click Save button, to save the port number of the mail server.

# 4. Editing EMAIL_USER Parameter

# a.

In Parameter Screen, select EMAIL_USER parameter and click Edit button. The Parameter Details screen with email user information will be displayed as shown in the figure below.

Admin
Manage Source Target Dictionary
Parameters
Parameter Details

# Parameter Details

|Parameter Name|Parameter Type|
|---|---|
|EMAIL_USER| |
|Value|Default value|
|Admsisoxcom|edmsesolixcom|
|Notes|Enter the email user id for sending notification emails|
|Description|Holds the Email User-id that will be Used for sending the mail|
|You have 937 characters remaining for your notes|You have 937 characters remaining for your notes|

Save Back

# d.

Enter email address to which the notifications need to be sent in the Value and Default Value text field. For example, abc@xyz.com.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 246
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Click Save button, to save the email user information. Once the email address is saved notifications emails will be sent to the specified address.

The field marked as are mandatory fields.

To limit the rows in the notification results, set the value of RECON_RESULTS_MAIL_LIMIT parameter in the Parameter screen. For example, to limit the rows to 500, set the default value of RECON_RESULTS_MAIL_LIMIT to “500”. Henceforth, the notification result will display 500 rows exclusively.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 247
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.4 Data Validation Execution

Once the data validation is designed successfully the data validation process can be executed. Based on the validation mapping setup, the data in the source and target database will be validated and the output will be sent to the respective user(s) through the notification mail in the given template.

To execute Data Validation, do the following:

1. Navigate to the following path: Data Validation &gt; Run Validation.
2. Select the intended data validation and click Run button, it will display Run parameters screen. In case of any default value provided at design time, those values will appear on the parameters screen. Users can override those parameter values if required and click Continue Button to carry out the execution process.
3. A unique Run-ID will be generated and displayed in the Run Schedule screen. To monitor the status of the data validation process, navigate to the Status Monitor screen. (Status &gt; Status Monitor).

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 248
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.5 Status Monitor

Status monitor serves as a dashboard to check the status of activities that have been executed. The function monitors the progress of jobs scheduled for run. It also gives a summary report of the jobs run.

Status Monitor allows to monitor the progress of all the activities scheduled for executing in Solix EDMS Standard Edition (SE).

Status Monitor also provides Previews, Job details, Log and so on.

The Status Monitor displays the list of all the jobs run for execution along with details including status. In Status Monitor screen, refer to the Run IDs in the first column to locate a specific validation job.

The status is shown as ‘In Process’ while the process is still in progress or has just initiated. On completion of validation process, the status of the corresponding validation activity will turns into ‘Process Completed’.

# 13.5.1 Navigation

To access status monitor link, follow the path: Schedule & Status > Status Monitor.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 249
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.5.2 Preview

Once the status of validation process turned into ‘Process Completed’, the user can be able to view the preview details of the respective validation. To preview the validation details, do the following:

1. In Status Monitor screen, click Preview icon of the corresponding Run ID. The Data Validation Summary screen will be displayed with consolidated results of validations executed based on the criteria selected (i.e., validation type) in the validation process as shown in the figure below.
2. To view the detailed results of validation according to the validation type, click button of the corresponding validation type. For example,
3. To view the results of Data Mismatches, click corresponding button. The Details screen will be displayed with the detailed information of Data Mismatches as shown in the figure below.
4. To view the detailed results of all validations executed in the respective Run ID, click Show All Details button in the Data Validation Summary screen. The Details screen will be displayed will the Data Validation Results as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 250
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.5.3 Parameters

Once the status of validation process turned into ‘Process Completed’, the user can be able to view the Parameter details of the respective validation. To view the parameter details, do the following:

1. In Status Monitor screen, click Parameter icon corresponding to the required Run ID, the Parameters window will be prompted as shown in the figure below.

Schedule Status Status Monitor Parameters

No Parameters defined

close

The Parameters window shows the parameter information of the validation process such as Object Name, Parameter Name and Parameter Value.

# 13.5.4 Validation Run Details

Once the status of the validation turned into ‘Process Completed’, the user can view the comprehensive information of validation job execution. To view the Validation job details, do the following:

1. In Schedule & Status > Status Monitor screen, click Details icon corresponding to the required Run ID, the Data Validation Run Details window will be prompted as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 251
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Schedule

|Listing|Status|Status Monitor|Data Validation Run|Details| | |
|---|---|---|---|---|---|---|
|1-8 of = records|Search|Activity|Status|Seq No|Start Date|End Date|
|Source Data Extraction - Create|Process Completed|2012 17:23:52|05-Jul-2012 17:23:53| | | |
|Source Data Extraction - Load|Process Completed|05-Jul-2012 17:23:53|05-Jul-2012 17:23:53| | | |
|Target Data Extraction - Create|Process Completed|05-Jul-2012 17:23:53|05-Jul-2012 17:23:55| | | |
|Target Data Extraction - Load|Process Completed|05-Jul-2012 17:23:55|05-Jul-2012 17:23:55| | | |
|Data Validation - Create Results|Process Completed|05-Jul-2012 17:23:59|05-Jul-2012 17:23:59| | | |
|Data Validation - Load Data|Process Completed|05-Jul-2012 17:23:59|05-Jul-2012 17:23:59| | | |
|Data Validation - Load Data|Process Completed|05-Jul-2012 17:24:00|05-Jul-2012 17:24:00| | | |

The Validation Run Details window shows the comprehensive information of the activities performed during the execution of data validation process such as Activity, Status, Sequence No and Start Date.

# 13.5.5 Log

Application Log captures the details of activities performed by users in Solix EDMS Validation Standard Edition (SE), which may be used in the event of audit trail system recovery.

To view the Log details, do the following:

1. In Status Monitor screen, click Log icon corresponding to the required Run ID, the Log window will be prompted as shown in the figure below.

# Log Details

|Log Details|Date & Time|
|---|---|
|Data Validation process: initiating for recon TESTRUM with Run ID 100015|2012-07-05 17:23:51.694|
|Fetching target database details|2012-07-05 17:23:51.932|
|Fetching source object alternative SQL statement|2012-07-05 17:23:51.961|
|Fetching target object alternative SQL statement|2012-07-05 17:23:51.98+|
|Connecting to source database|2012-07-05 17:23:52.086|
|Cutting source statement|2012-07-05 17:23:52.09|
|Creating table on source database|2012-07-05 17:23:52.359|
|Putting data into source table|2012-07-05 17:23:53.386|
|Connecting to target database|2012-07-05 17:23:53.946|
|Putting data into target table|2012-07-05 17:23:55.366|
|Creating results table on host database|2012-07-05 17:23:59.407|
|Putting target matched or not matched data into results table EDRS_RESULTS_100015|2012-07-05 17:23:59.56|
|Inserting source only results|2012-07-05 17:24:00.828|
|Setting Result|2012-07-05 17:24:02.815|
|Updating status completed for run|2012-07-05 17:24:02.83|

The Log Details shows the log information associated to the Validation.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 252
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.5.6 Email Notification

Once the Validation process is executed successfully, a notification mail will be sent to the specified user as shown in the figure below.

Dear User;

Data Validation of TESTDEMO initiated Admin Admin at 05-Jul-2012 17:37: has been successfully completed at 05-Jul-2012 17:37:56

Regards,

Enterprise Data Management Suite (Standard Edition)

This is a system generated mail. Please do not reply back to this email ID.

If you have a query or need any clarification you may log in to Enterprise Data Management Suite (Standard Edition) and verify the status monitor for Run Id 100016.

Based on the Notification Preference selected, the validation result will be sent in HTML file to the user in the selected preference (i.e., attachment or online). The output will be displayed according to the style sheet the user has designed for the notification (i.e., HTML code).

The Data Validation Result will be displayed in a HTML file as shown in the figure below.

# Data Validation Results for Run Id

Stating that the first 500 records out of 31952 records is displayed

|Sl No|ORDERNUMBER_SRC|ORDERNUMBER_TGT|PRODUCTCODE_SRC|PRODUCTCODE_TGT|QUANTITYORDERED_SRC|QUANTITYORDERED_TGT|PRICEEACH_SRC|PRICEEACH_TGT|ORDERLINENUMBER_SRC|ORDERLINENUMBER_TGT|
|---|---|---|---|---|---|---|---|---|---|---|
|10100|10100|524_3969|S18_4409| |35.29| | | | | |
|10100|10100|824_3969|5182248| |35.29| | | | | |
|1Q1Q0|1Q1QQ|524_3969|S18_1749| |35.29|43o 0| | | | |
|10100|10100|518_4409|S24_3969| |75.46|35.29| | | | |
|10100|10100|S18 4409|518_2248| |7546|55,09| | | | |
|1Q1Q0|1Q1Q0|S18_4409|S18_1749| |75.46|43c 0| | | | |
|10100|Im1M|518_2248|524_3969| |55.09|35.29| | | | |
|uU|10100|S18_2248|518_4409| |55 09|7546| | | | |
|Jcc|1Q1Q0|S18_2248|S18_1749| | | | | | | |
|10100|116|518_1749|524_3969| |136.0|35.29| | | | |
|uWU|10100|818_1749|5184409| | | | | | | |
|I0100|10100|S18_1749|S18_2248| |136,0|55.09| | | | |
|10101|10101|524_2022|524_1937| |44.35|32.53| | | | |
|10101|10101|24_2022|5132795| | | | | | | |
|10101|10101|524_2022|S18_2325| |44.35|108.06| | | | |
|1m101|11641|1957|S24_2022| |32.53|44.33| | | | |
|10101|10101|524_1937|S18_2795| |32.53|167.06| | | | |
|10101|10101|524_1937|S18_2325| |32.53|108.06| | | | |
|10101|1101|518_2795|S24_2022| |167.06| | | | | |
|uuI|10101|S18_2795|524_1977| |167.06|3253| | | | |
|10101|10101|S18_2795|S18_2325| |167.06|108.06| | | | |
|10101|10101|518_2325|524_2022| |44.37| | | | | |
|uu|10101|818_2725|524_1977| |108.06| | | | | |
|10101|10101|S18_2325|S18_2795| |108.06|167.06| | | | |
|10102|10102|518_1367|518_1342| |43.13|95| | | | |
|10102|10102|S18_1742|513_1367| |95|55| | | | |
|10103|10103|S700_2824|S32_3522| |94.07|63.35| | | | |
|10103|10103|5700_2824|532_1268| | |92.46| | | | |
|10103|10103|S700_2824|524_4258| | |83.62| | | | |
|10103|10103|S700_2824|S24_2300| | |I67 34| | | | |
|10103|10103|5700_2824|518_4668| | |40""| | | | |
|10103|10103|S700_2824|518_4500| | | | | | | |
|10103| |S700_2824|S18_3320| | |86.3| | | | |
|10103|10103|S700_2824|518_3136| |94.07|8602| | | | |
|10103|10103|S700_2824|518_2957| | |0 &| | | | |
|10103|10103|S700_2824|S18_2949| |94.07|92.19| | | | |
|10103|10103|5700_2824|518_2432| |94.07|58.34| | | | |

The above screen shows the output of the validation and displays comprehensive validation information of the first 500 records out of 31952 records performed validation for Data Mismatches.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 253
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

Data Exists OJly i Sowcek (Total Records 48)

Stating that the total number of records is displayed

|SL No|ORDERNUMBER_SRC|PRODUCTCODE_SRC|QUANTITYORDERED_SRC|PRICEEACH_SRC|ORDERLINENUMBER_SRC|
|---|---|---|---|---|---|
|1|10138|S24_3969| |32.82| |
|2|10138|S24_3432| |99.58| |
|3|10138|S24_3191| |77.05| |
|4|10138|S24_2887| |96.3| |
|5|10138|S24_2766|4|73.6| |
|6|10138|S24_2022|33|38.53| |
|7|10138|S24_1937|22|33.19| |
|8|10138|S24_1046| |59.53| |
|9|10138|S18_4933|23|64.86| |
|10|10138|S18_4409| |79.15| |
|11|10138|S18_2325|38|114.42| |
|12|10138|S18_2248|22|51.46| |
|13|10138|S18_1749|33|149| |
|14|10179|S700_3167| |80.| |
|15|10179|S700_2834|25|98.48| |
|16|10179|S700_1691|23|75.81| |
|17|10179|S50_1341|44|43.2| |
|18|10179|S32_4289| |63.97| |
|19|10179|S32_1374| |86.| |
|20|10179|S24_4278|27|66.65| |
|21|10179|S24_1785| |105.04| |
|22|10179|S18_2581| |82.79| |
|23|10360|S72_3212| |54.05| |
|24|10360|S700_3962| |92.36| |
|25|10360|S700_3505|35|83.14| |
|26|10360|S700_2610| |70.| |
|27|10360|S700_1138| | | |
|28|10360|S700_1938|32|86.61|64.67|
|29|10360|S24_3816|22| | |
|30|10360|S24_3151| |70.81| |
|31|10360|S24_2841| | | |
|32|10360|S24_2011|49|100.77|55.49|
|33|10360|S24_1785|22|106.14| |
|34|10360|S18_4522| |76.36| |
|35|10360|S18_3856| |101.64| |
|36|10360|S18_3259| |94.79| |
|37|10360|S18_3140|29|122.93| |
|38|10360|S18_3029| |71.4|14|
|39|10360|S18_2581|41|68.43| |
|40|10360|S18_1662| |126.15| |
|41|10399|S32_1374|32|97.89| |
|42|10399|S24_2000|58|75.41| |
|43|10399|S18_2625| | | |
|44|10399|S524_1578|50|104.81|51.48|
|45|10399|S12_2823|29|123.51| |
|46|10399|S10_4698|22|156.86| |
|47|10399|S10_2016| |99.91| |
|48|10399|S10_1678|40|77.52| |

The above screen shows the output of the validation and displays comprehensive validation information of records performed validation for Data Exists only in Sources.

By default, the sections (such as Data Mismatches, and so on) generated in the notification mail results will be restricted to display up to 500 records in order to

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 254
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

limit the mail size. While generating results in notification mail, the user is provided flexibility to manage the rows/records to be displayed in results by providing the value for the parameter called “RECON_RESULTS_MAIL_LIMIT” in the Parameters screen.

When validation result contains more than 500 records, the attachment will display the first 500 records of total validation results.

When validation result contains less than 500 records, the attachment will display the total number of validation results.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 255
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.6 Scheduler

Scheduler automates the activities such as Data Validation and Data Masking (i.e., Security Rule Assignments and Security Groups) to reduce the manual labor by scheduling and executing the activity on the specified time automatically. This chapter describes the Scheduler function in Solix EDMS Standard Edition (SE) and explains how the user can schedule and enable automatic execution of activity at the specified time and date based on the user-specified parameters.

# Features of Scheduler

- Scheduler supports Time-based Scheduling, a user can schedule automatic run of activity (such as Data Validation and Data Masking) at the given date and time.
- Scheduler enables the user to schedule and automate activity (such as Data Validation and Data Masking) run.

# Navigation

To access Scheduler link, follow the path: Schedule & Status > Scheduler.

# 13.6.1 Scheduling Activities

To schedule the execution of various activities, do the following.

1. Navigate to the following path: Schedule & Status > Scheduler. The Scheduler screen displays the list of existing schedules as shown in the figure below.

**Schedule Status**
|Schedule Id|Object Name|Start Date|Scheduled Status|Schedule Time|Notes|
|---|---|---|---|---|---|
|100160|ORCERCETALS-VALIDATION|2012/08/28|Pencing| | |
|100131|AFF-EMAIL|2012/08/27|Froces;Comflete-|9:00| |
|100130|36_20099|2012/08/28|Pencing|15:00| |
|100129|CUSTON_TEST|2012/08/27|Froces;Comflete-|19:00| |
|100128|36_20099|2012/08/27|Pencing|19:00| |
|100127|AFF-EMAIL|2012/08/27|Fencing|9:00| |
|100125|CUsTOM_TEST|2012/08/27|Pencing|19:10| |

2. Click Add button, to create a new schedule for executing the intended activity (for example, data validation process) automatically. The Schedule Details screen will be displayed as shown in the figure below.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 256
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Schedule & Status

# Scheduler

# Schedule Details

# Schedule Details

Help

|Activity|Object Name|
|---|---|
|-Select One--|~Select One-|
|Palmeters| |
|Star Date|Start Time|
| |KH24-MM|
|Current server time|10.36|

# Notes

Descripion

You have 1000 characters remaining for your notes

Save
Back
# 3.

In the Schedule Details screen, do the following:

1. Select an option from the Activity drop down list. Once the option is selected, the corresponding objects designed will be prompted in the Object Name drop down list.
2. Select the intended object from the Object Name drop down list.
3. Click Parameters button, to define the parameters for the execution of activity (for example, Validation).
In case, any parameters have been defined as part of the criteria while setting up a configuration corresponding to the selected activity (for example, validation), the user needs to specify an appropriate expression for those parameters before scheduling the activity. This may not be necessary if dynamic parameters are not defined.
4. The Parameters window prompts the parameters defined for the selected configuration as shown in the figure below.

# Source Object Run Parameters (ORDER_CONFIG)

|Name|Parameter|Value|
|---|---|---|
|ORG_ID|SORG_D|204|

# Target Object Run Parameters (ORDER_CONFIG)

|Name|Parameter|Value|
|---|---|---|
|ORG_ID|SORG_ID|204|

Save

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 257
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. The default value of the parameter will be displayed, the user can change the value of the parameter based on the requirement.
2. Click Save button, to save the parameter value of the respective schedule.

# 4. To specify the time and date for the respective Schedule, do the following:

1. Enter Start Date in the corresponding text field or select a date using visual calendar. The execution of scheduled job starts on the given date.
2. Enter Start Time in the corresponding text field. The execution of the scheduled job will starts on the given time for the specified date. The format of the timing is HH24: MM (for example, 17:26).

Enter comments in Notes field.

Click Save button to complete creation of the new schedule. The new schedule will be added to the schedules list and a unique Scheduler ID will be generated for the respective Scheduled job.

Once scheduled, the status of the activities in the schedules list is displayed as Pending until its kick-off time. On completion of the scheduled activity, the corresponding Run Status turns to ‘Process Completed’.

The fields marked as | are mandatory fields. Once the Scheduled job is saved, a unique Scheduler ID will be generated, whereas Run ID will be generated for the execution of job.

# 13.6.2 Edit an Existing Schedule

Exclusively, the scheduled activities can be edited before its kick-off time. A validation job scheduled by the user cannot be edited after kick-off.

# To edit an existing Schedule, do the following:

1. In the Schedules page, select the radio button adjacent to the schedule which needs to be edited.
2. Click Edit button below the list.
3. In the Edit Schedule Details dialog, do the following:
1. Activity and Object Name fields are non-editable text fields.
2. Make the necessary changes in the Start Date and Start Time fields.
3. Click Save button. The schedule will be updated accordingly.

The fields marked as | are mandatory fields.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 258
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.6.3 Monitoring Scheduler Status

To monitor the status of Scheduled job,

1. Navigate to Schedule & Status > Status Monitor
2. The Status Monitor screen displays a list of jobs run with respect to disparate activities in Solix EDMS Standard Edition (SE). Each job is assigned a unique Run ID. The first column contains the Run IDs of all the jobs. Use the vertical scroll bar on the right hand of the list to browse through the list to locate the required Run ID.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 259
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 13.7 Data Validation Process Flow Diagram

|Setup Environment|Variables|(source, target, runtime parameters)|
|---|---|---|
|Start Validation Process|Start Validation Process|Start Validation Process| | |
|Source|Target|Validation Process?|
|Connect to DB|Connect to DB|Error in Data|
|Execute SQL Statement|Execute SQL Statement| |
|Fetch Data|Fetch Data|Yes|
|Host / Validation DB|Store results and apply validation rules| |
|Validation Complete|Validation Complete|Email Operations team| |
|Troubleshoot and rerun validation|Troubleshoot and rerun validation|Email Business & IT Stakeholders| |

# 13.7.1 Validation Process

Validation screen is designed to execute the validation process. Data Validation Engine performs all the following activities as part of validation process.

# 13.7.1.1 Fetching Source Data

1. A Staging Table Creation for Source Data in Host Database.
1. Based on the column data types enabled in the Source Object (Config/Custom SQL), a staging/temporary table will be created with EDRS_SRC_<RUNID> name in Host Database Definition provided in validation mapping. Enables the user to will be generated uniquely from Run screen. For every execution, the Run ID will be generated.
2. When this process initiates the entry in AJ_PURGE_STATUS_DETAILS with ‘SOURCE_TABLE_CREATION’ activity, the status will be shown as ‘PG’ (in process) status.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 260
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 2. Source Query Execution and Insert Data into Source Data Staging Table in Host Database

1. Validation process connects to Source Database and executes Source Object Query and fetches data from Source Database. Fetched data will be inserted into above created temporary table EDRS_SRC_<RUNID>.
2. When this process initiates the AJ_PURGE_STATUS_DETAILS with ‘SOURCE_DATA_INSERTION’ activity, the status will be shown as ‘PG’ (in process) status.
3. After successful completion of this activity, the status becomes ‘PS’ (process completed).

# 13.7.1.2 Fetching Target Data

1. # A Staging Table Creation for Target Data in Host Database

1. Based on Target Object (Config/Custom SQL) enabled column data types, a staging/temporary table will be created with EDRS_TGT_<RUNID> name in Host Database Definition provided in Validation mapping. Enables the user to will be generated uniquely from Run screen. For every execution, a new Run ID will be generated.
2. When this process initiates the AJ_PURGE_STATUS_DETAILS with ‘TARGET_TABLE_CREATION’ activity, the status will be shown as ‘PG’ (in process) status.
3. After Successful completion of this activity Status becomes ‘PS’ (Process Completed).
2. # Source Query Execution and Insert Data into Source temporary Table in Host Database

1. Validation process connects to Target Database and executes Target Object Query and fetches data from Target Database. Fetched data will be inserted into above created temporary table EDRS_TGT_<RUNID>.
2. When this process initiates an entry in AJ_PURGE_STATUS_DETAILS with an activity of ‘TARGET_DATA_INSERTION’ will be inserted with ‘PG’ (in process) Status.
3. After successful completion of this activity, the status becomes ‘PS’ (process completed).

# 13.7.1.3 Validation

1. # Results Staging Table Creation in Host Database

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 261
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 1. Validation Process

a. Validation process creates a staging/Temporary table with EDRS_RESULTS_<RUNID> name in Host Database with Columns defined in Column Matching and Column Comparison Screens.

b. All Source Columns are appended with “_SRC” string and all target Columns appended with “_TGT” string. With these extra strings user can easily identify data from source and target objects.

c. When this process initiates the AJ_PURGE_STATUS_DETAILS with ‘RESULTS_TABLE_CREATION’ activity, the status will be shown as ‘PG’ (in process) status.

d. After Successful completion of this activity Status becomes ‘PS’ (process completed).

# 2. Identify Data available in both Source and target Databases and insert Results into staging Table in Host Database

a. This Process depends on Comparison Method value defined in Validation mapping. If Comparison method is “Matched Records” then matched rows from both Source and target staging tables will be inserted into results staging table. If Comparison method is “MisMatched Records” then mismatched rows from both Source and target staging tables will be inserted into results staging table.

b. If Comparison method is “Matched Records” then validation process uses ‘AND’ operand while comparing columns. If Comparison method is “MisMatched Records” then validation process uses ‘OR’ operand while comparing columns.

c. Validation process uses columns defined in Column Matching screen to build equi join condition to identify related data from both Source and target data.

d. Validation Process uses two Mapping types. They are “EXACT MATCH” or “DEFINE THRESHOLD” mapping types. If mapping type is EXACT Match then Columns can be compared with = operator and exact data verification will be processed. If mapping type is DEFINE THRESHOLD then Columns can be compared with ‘BETWEEN’ or ‘NOT BETWEEN’ or ‘>’ or ‘<=’ operator and data verification will be processed.

e. If mapping type is DEFINE THRESHOLD, again three different threshold types are using in Validation Process - “RANGE DIFFERENCE”, “PERCENTAGE DIFFERENCE” or “FIXED VALUE”. These two threshold types can be used against numeric data.

i. RANGE DIFFERENCE threshold type expects From and To Value. It uses following two formulas based on Comparison method.

If Comparison method is “Matched Records”

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 262
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# ABS

|(SOURCE_COLUMN|-|TARGET_COLUMN)| |
|---|---|---|---|
|BETWEEN|THRESHOLD_FROM_VALUE|AND|THRESHOLD_TO_VALUE|
|If Comparison method is “MisMatched Records”| | | |
|ABS (SOURCE_COLUMN - TARGET_COLUMN) NOT| | | |
|BETWEEN|THRESHOLD_FROM_VALUE|AND|THRESHOLD_TO_VALUE|

# ii. PERCENTAGE DIFFERENCE

threshold type expects a percentage variance value. It uses following two formulas based on Comparison method.

|If Comparison method is “Matched Records”| |
|---|---|
|(ABS (SOURCE_COLUMN - TARGET_COLUMN) / ABS (SOURCE_COLUMN + TARGET_COLUMN) / 2)*100 <= PERCENTAGE VALUE| |
|If Comparison method is “MisMatched Records”| |
|(ABS (SOURCE_COLUMN - TARGET_COLUMN) / ABS (SOURCE_COLUMN + TARGET_COLUMN) / 2)*100 >|PERCENTAGE VALUE|

# iii. FIXED VALUE

threshold type expects a Fixed Value Difference value. It uses following two formulas based on Comparison method.

|If Comparison method is “Matched Records”| |
|---|---|
|ABS (SOURCE_COLUMN - TARGET_COLUMN) <= THRESHOLD_TO_VALUE| |
|If Comparison method is “MisMatched Records”| |
|ABS (SOURCE_COLUMN - TARGET_COLUMN) >|THRESHOLD_TO_VALUE|

# f.

When this process initiates the AJ_PURGE_STATUS_DETAILS with ‘RESULTS_SOURCE_TARGET_TABLE’ activity, the status will be shown as ‘PG’ (in process) status.

# g.

After successful completion of this activity status becomes ‘PS’ (process completed).

# 3. Identify Data available only in Source and which does not exist in Target Databases

and insert into Results Staging Table in Host Database

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 263
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 4. Identify Data available only in Target and not exists in Source Databases insert into Results Staging Table in Host Database

a. This Process identifies the data available only Target Staging Table and Not exists in source staging table based columns defined in Column matching Screen. It uses NOT EXISTS operator to identify data available only in target.

b. This Process executes when Comparison method is “MisMatched Records”.

c. When this process initiates an entry in AJ_PURGE_STATUS_DETAILS with an activity of ‘RESULTS_SOURCE_TABLE’ will be inserted with ‘PG’ (in process) Status.

d. After Successful completion of this activity Status becomes ‘PS’ (process completed).

# 5. Notification process:

This process creates a HTML file that contains the result (i.e., identified data) of validation process and sends the same to the user email id specified in the validation mapping.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 264
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 14 Metadata Import/Export

Metadata Import/Export feature enables the user to import/export the metadata of the activities (such as data validation, security rule assignment, and security group) from one knowledgebase/repository to other knowledgebase repository. Also, it migrate all the attributes like tables, joins, relations, criteria associated to the respective activity (such as knowledgebase, data validation and so on) while import/export process.

# Benefits of Metadata Import/Export:

- Provide an ease to migrate metadata from one knowledgebase/repository to other.
- Avoid the recreation of similar metadata in different knowledgebase.
- Reduce the time consumption to export/import metadata in knowledgebase/repository.
- Reusability of metadata in different knowledgebase.

# Types of process in Metadata Import/Export

To accomplish the migration of metadata from one database to other, the user need to carried out the two processes in the given sequential manner:

1. Export Process: This process enables to export all the attributes like tables, joins, and relations associated to the activity and creates an exported file (.xml) in the default location (i.e., /usr/tmp/). Herein, .xml file will be created with prefixed as “ExportData_” and suffixed with generated Export Run ID. For example, “ExportData_102049.xml”, where 102049 represent the Run ID generated for export process.
2. Import Process: This process enables to import the metadata existing in the exported file to the target knowledgebase/repository.

It is assumed that knowledgebase availed during import/export process has been already created and authenticated to the respective user. Exclusively, the admin user has privileges to export metadata from any knowledgebase irrespectively. Whereas, the remaining users has only privileges to export metadata existing in the knowledgebase authenticated to that user. While importing/exporting the knowledgebase, by default all the activities (such as data validation, security rule assignment, and security group) existing in that knowledgebase will also be imported/exported.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 265
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 14.1 Export Process

This section navigates through the process to move all the attributes associated to the activity to the export file in the given path (i.e., /usr/tmp). It extracts the activities and metadata of activity in the knowledgebase from the sources repository and places it in the export file generated in the given path.

To perform export process, do the following:

1. Navigate to the following path: Tools &gt; Metadata Import/Export. The Metadata Import/Export screen will be displayed.
2. Select Export option from the Type drop down list. Once the option is selected, the remaining fields will be prompted in the screen.

|Tools|Metadata Export Import| |
|---|---|---|
|Knowledge Base|~Select One| |
|Activity|Type|Activity Name|
|Data Validation|Select One| |

Select the intended knowledgebase from the Knowledgebase drop down list, to pull the activities existing in the knowledgebase selected. Once the knowledgebase is selected, the activities associated to the knowledgebase will be displayed in the corresponding fields.
Select the type of activity to be exported from the Activity Type drop down list. Based on the activity type selected, the corresponding activities existing in the knowledgebase will be displayed in the Activity Name drop down list.
Select the intended activity from the Activity Name drop down list. In case, if the activity is not selected, then all the corresponding activities in that knowledgebase will be exported, by default.

For example, If activity type is selected as “Data Validation” and the activity name is not specified, then all the data validations existing in that knowledgebase will be exported by default).

Click Export button, to export the metadata details of the activity selected into export file (.xml). Once the export process is scheduled, a Run ID will be generated and the export file is created at the default location (i.e., /usr/tmp/) with prefixed as “ExportData_” and suffixed with generated Export Run ID.

For example, ExportData_102049.xml, where 102049 represent the Run ID generated for export process.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 266
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 7.

To monitor the status of the export process, navigate to status monitor (Schedule & Status > Status Monitor). The Status Monitor screen is displayed as shown in the figure below.

# Schedule & Status Status Monitor

|Listing 1-8 of 15 records|Listing 1-8 of 15 records|Listing 1-8 of 15 records|Listing 1-8 of 15 records|Listing 1-8 of 15 records|Listing 1-8 of 15 records|Listing 1-8 of 15 records|Listing 1-8 of 15 records|
|---|
|Run Id|Object Name|Status|Activity|Start Date|End Date|Preview|Parameter|
|101045|ExportData_100045|Protes; Completec|ExFORT_DATA|05-Dec-2012 16.0584|05-Cec-2012 16.05845| | |
|100044|Expor-Cata_01044|Proces; Complered|ExFORT_DATA|05-Cec-2012 15.58.57|05-Cec-2012 15.58.57| | |
|100043|Expor-Data|Proces; Comfletes|ExPORT_CATA|05-Dec-2012 15.53841|05-Cec-2012 15.53.47| | |
|100042|Expor-Cata_|Proces; Complared|EXFORT_DATA|05-Dec-2012 15.46.29|05-Cec-2012 15.46.30| | |
|100041|E~For-Cata_107041|Proces; Completec|EXFORT_DATA|05-Cec-2012 5.45.16|05-Cec-2012 15.45.17| | |
|100040|ExportCata_|Froces ComFle-ed|EXPORT_DATA|05-Cec-2012 15.42.38|05-Cac-2012 15.42.38| | |
|101039|Expor-Cata_0o039|ProcesComfleted|ExFORT_DATA|05-Cec-2012 15.35.21|05-Cec-2012 15.35.24| | |

# 8.

Verify the status of the export process using Run ID generated. Once the process is completed successfully, click Preview icon to view the path of exported file and/or download the exported file. The Preview screen will be displayed with the default location of the exported file created and provides an option to download the exported file.

Tools Export Data Download File Preview

Data Exported Successfully at location /usr/temp/ExportData_100045.xml; Click Here to download the exported file.

ExportData_100045 (1) xml Show all downloads

Whenever the application server is located on local desktop, the user can directly import the exported file from the default location (i.e., /usr/temp/ExportData_100045.xml).

Whenever the application server is located remotely, in such cases, the user is provided an option to download the file on to the local desktop and then import the exported file.

Click Here hyperlink, to download the exported file (.xml). Once the download is completed successfully, thereafter the user can import the metadata from the exported file to the target knowledgebase/repository.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 267
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 9. To view the parameter values provided while export process, click Parameter icon adjacent to the intended Run ID.

The Parameter screen will be displayed as shown in the figure below.

# Schedule Status Status Monitor

# Parameters

|Parameter Name|Parameter Value|
|---|---|
|File Name|/usr/Emp/ExportCata_100046.Xml|
|Knowledgebase|Cefau- KB|
|Activity Type|Surty Group|
|Activity Name|syb_cafe_rancors|

The field marked as “ ” are mandatory fields.

If Activity Type is selected as “Knowledgebase”, then Activity Name drop down will not be prompted on the screen.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 268
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 14.2 Import Process

Once the export process is completed, the user needs to perform import process which enables to move the metadata existing in the exported file to the target knowledgebase.

To import the exported file, do the following:

1. Navigate to the following path: Tools > Metadata Import/Export. The Metadata Import/Export screen will be displayed.
2. Select Import option from the Type drop down list. Once the option is selected, the remaining fields will be prompted in the screen.

|Tools -|Metadata Export/Import|
|---|---|
|Type|Import|
|File Name|Knowledge Base|
|Browse.|Select One|
|Import| |

Browse for the exported file location in the File Name text field. To locate the exported file, click Browse button and do the following:

Click Browse button. The Choose File to Upload popup screen will be prompted.
Locate the file in the popup screen and click Open button. The path of the exported file will be displayed in the File Name text field.

Select the intended knowledgebase from the Knowledge Base drop down list, to import the metadata into the selected knowledgebase.
Click Import button, to import the metadata from the exported file (.xml) to the selected knowledgebase. The Run ID will be generated for the respective import process.
To monitor the status of the import process, navigate to status monitor (Schedule & Status > Status Monitor). The Status Monitor screen is displayed as shown in the figure below. Verify the status of the import process using Run ID generated (for example, 101947).

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 269
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Schedule & Status

# Status Monitor

Refresh
All Records
Listing 1-8 of 15 records

Search
Export As
Customize Columns

|Run Id|Object Name|Status|Activity|Start Date|End Date|Preview|Parameter|
|---|---|---|---|---|---|---|---|
|100047|Expor-Data|00047|Proces; Comfletes|IPORT_DATA|05-Dec-2012 18.37.30|05-Cec-2012 18.37.32| |
|100046|Expor-Cata_| |Froces Completec|ExPORT_DATA|05-Dec-2012 16:18.38|05-Cec-2012 16:18.38| |
|100045|ExFor-Cata_10-045| |Proces; Completec|EXFORT_DATA|05-Cec-2012 16.05.44|05-Dec-2012 16.05*45| |
|100044|ExportCata_|00l44|Proces; Complered|EXPORT_DATA|05-Dec-2012 15.58.57|05-Cac-2012 15.58.57| |
|100043|Expor-Cata_| |ProcesComfleted|ExFORT_DATA|05-Cec-2012 15.53.41|05-Cec-2012 15.53.4-| |
|100042|Expor-Cata_100042| |Proces; Complered|EXPORT_DATA|05-C8c-2012 15.46.29|05-Cec-2012 15.46.30| |
|100041|Expor-Cata_|00041|Proces; Complere?|ExPORT_DATA|05-Cec-2012 15.45.16|05-Cec-2012 15.45.17| |

To view the parameter values provided during import process, click Parameter icon adjacent to the intended Run ID. The Parameter screen will be displayed as shown in the figure below.

# Parameters

Listing 1-2 of 2 records

|Parameter Name|Parameter Value|
|---|---|
|File Nare|~Fortcata (1).m|
|KnoudergeBa;e|TESTKB|

The fields marked as “|” are mandatory.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 270
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 15 Log

This section explains the process to monitor the status of all the activities in execution (Run ID details) and to trace out the log details for each activity.

# Navigation

To access status link, login to Solix EDMS Standard Edition (SE):

Place cursor at Log tab in the main menu.

# 15.1 Audit

Audit Trace enables to trace out the log details for each activity performed in Solix EDMS Standard Edition (SE) at various levels and generate a log file which shows the detailed report on the access logs of application objects. This feature avails to monitor the access of application objects through Audit. It maintains a track record of all application objects accessed by various users (i.e., irrespective of user).

Application Audit is used to get the report on the unauthorized access on Application Objects. This functionality helps to apply Audit on application objects on which the user wants to have a track record on unauthorized access by any other user.

# 15.1.1 Navigation

To access Audit link, follow the path: Log > Audit.

1. The Audit Details pop up will be displayed.
2. Check the options and Click OK button, to trace out the details of activities based on the selected level.

# 15.1.2 User Level

This option enables to trace and maintain the access details of a specific user (i.e., login and logout). The log file associated to the user will be generated in the format-<username><Date Time stamp>.txt and located in the path specified by the user in Parameter screen (i.e., LOG_FILE_PATH parameter). (Admin > Manage Source/Target Dictionary > Parameters)

To trace the user access details,

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 271
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

1. Check the User check box and Click OK button, to trace out the details of user access.
2. The log file with the &lt;username&gt;&lt;Date Time stamp&gt;.txt will be generated in the path specified by the user in LOG_FILE_PATH parameter (For example, /usr/tmp/).
3. For every login and logout, a separate log file will be generated with the &lt;username&gt;&lt;Date Time stamp&gt;.txt and maintain the details information of the login and login time of the user.

# 15.1.3 Application Level

Application Level enables to trace out the information of the application access right from the AUDIT ON and generates the information associated to the activities executing in the application (i.e., application server) irrespective of the user.

To trace the application access details,

1. Check the Trace check box in the Audit Details screen.
2. - Level One: Basic log details like the start and the end of process are captured.
- Level Two: Advanced log details like the start, the status, description of process been taken place in the corresponding step of execution and end of the process are captured. It includes Level One information as well.
- Level Three: Comprehensive details or full log of all the processes are captured which shows the query been executed in the step of corresponding activity. It includes Level One and Level Two information as well.

Select the required level option and Click OK button, to trace out the details of activities based on the selected level will generate a log file naming as EDMSTrace file with present time stamp in the path specified by the user.
3. EDMS Logs are maintained in the Log files created in the user specified path "/usr/tmp". A default log will be maintained with access details of each user.
4. To view the limited number of messages in a Log file, alter the default value of the NO_OF_LOG_MESSAGES parameter in the Parameter screen. (Admin> Manage Source/Target Dictionary > Parameters). Default value of parameter is 100.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 272
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 15.2 Application Log

This feature provides flexibility to view the log details from Solix EDMS Standard Edition (SE) application instead of viewing from OS level (i.e., /usr/tmp/). The details of activities performed by users in Solix EDMS Standard Edition (SE) are captured, which may be used in the event of audit trail system recovery.

# 15.2.1 Navigation

To access application log link, follow the path: Log > Application Log.

Displays the logs if the user selects an option from Audit.

Enabling of Audit will generate a log file on the machine where the application server is deployed (file format-<username><Date Time>.txt and <EDMSTrace><Date Time>).

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 273
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 16 Appendix

# 16.1 Appendix-A: Java based Algorithms

Location: Application

Java algorithms which support data masking in Solix EDMS Standard Edition (SE) are listed in the table given below.

|SECURITY RULE NAME|Data Type|DESCRIPTION|
|---|---|---|
|EMAIL|Character|Mask Email column value with first name, last name and domain name values in FIRST_NAME.LAST_NAME@Domainname format. Both FIRST_NAME and LAST_NAME columns should be available in same table. For example, Carl.Douglas@mycompany.com|
|FULL NAME|Character|Mask Full Name Value with first name and last name. Both FIRST_NAME and LAST_NAME columns should be available in same table. For example, Carl Douglas|
|SALARY PERCENT|Numeric|Mask Numeric value with a percentage variation of given range. For example, provide 10 percent at run time means + or -10 percent variation can be seen after masking.|
|SHUFFLE CHARS NUMERIC|Numeric|Mask Numeric Data by Shuffling the digits of a column value. For example, if original value is 123456789 then mask value could be 579314628.|
|SHUFFLE CHARS CHARACTER|Character|Mask Character Data by Shuffling the characters of a column value. For example, If original value is ABCDEFGH then mask value could be EGACBHFD.|
|NUMERIC DATA ENCRYPT|Numeric|Encrypts Numeric Column Data.|
|CHAR DATA ENCRYPT|Character|Encrypts Character Column Data.|
|TRUNCATE DATA|Character, Numeric and Date|Truncates Table Data.|
|MASK_CREDIT_CARD_WITH_FMT|Character|Mask Character Data with Randomly generated Credit Card Numbers (LUHN validated) based on selected Card Type with format character. For example, 4872-2670-0856-2847|
|MASK_CREDIT_CARD|Character|Mask Character Data with Randomly generated Credit Card Numbers (LUHN validated) based on selected Card Type. For example, 4338818716421722|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 274
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

|Mask Type|Data Type|Description|
|---|---|---|
|MASK_PHONE_NUMBER WITH_FMT|Character|Mask Character Data with Randomly generated US Phone Numbers with valid area codes along with format character. For example, 443-801-1719|
|MASK_PHONE_NUMBER|Character|Mask Character Data with randomly generated US Phone Numbers with valid area codes. For example, 4346565661|
|MASK_UK_SSN|Character|Mask Character Data with randomly generated UK National Identifier. For example, KR671426W|
|MASK_US_SSN_WITH_FMT|Character|Mask Character Data with randomly generated US Social Security Numbers along with format character. For example, 471-56-6525|
|MASK_US_SSN|Character|Mask Character Data with randomly generated US Social Security Numbers. For example, 934525467|
|NULLING OUT|Character|Mask Character column value with null values.|
|RANDOM DIGITS|Numeric|Masking Numeric data value with randomly generated digits in the given range.|
|RANDOM DIGITS CHAR COL|Character|Masking character data value having numeric data with randomly generated digits in the given range.|
|RANDOM DATES|Date|Masking Date values with randomly generated dates in the given date range. For example, 01-JAN-2001.|
|RANDOM NUMBERS|Numeric|Masking Numeric Data with randomly generated numeric values in the given range. For example, 9999.|
|RANDOM STRINGS|Character|Masking Character Data with randomly generated character string. For example, ABCDEFGH|
|NUMERIC ARRAYLIST VALUES|Numeric|Masking Numeric Data with the given list of numeric values separated by comma.|
|STR ARRAYLIST VALUES|Character|Masking Character Data with the given list of character values separated by comma.|
|FIXED NUMBER|Numeric|Masking Numeric data with the given fixed numeric value. For example, 9999 (fixed value)|
|FIXED STRING|Character|Masking character data with the given fixed string value. For example, ABCDEFGH (constant value)|
|FIXED DATE|Date|Masking character data with the given fixed date value. For example, 01-01-2013|
|SUBSTRING|Character|Masking data with Substring of the each column value. For example, If original value ABCDEFGH then mask value could be ABCD.|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 275
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# SHUFFLING NUMERIC

Numeric
Shuffling Numeric Column Values from one row to another. For example, Row one numeric value shuffles with row “n” value.

# SHUFFLING STRING

Character
Shuffling Character Column Values from one row to another. For example, Row one character value shuffles with row “n” value.

# SHUFFLING STRING

Date
Shuffling Date Column Values from one row to another. For example, Row one character value shuffles with row “n” value.

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 276
---
# 16.2 Appendix-B: Database Algorithms

Location: Database (Exclusively, Oracle)

To make use of DB algorithms to mask the data, it is mandatory to compile the following script in Oracle database where masking process is performing: “edms_database_security_algorithm.sql” under EDMS_Home > scripts folder.

DB algorithms which support data masking in Solix EDMS Standard Edition (SE) are listed in the table given below.

|Security Rule Name|Data Type|Description|
|---|---|---|
|DB-DATE|Date|This security rule generates the value of day and month randomly in date column, whereas the value of Year remains the same (i.e., Original value)|
|DB-EMAIL|Character|This security rule masks the email column values based on the given First Name Column, Last Name Column and Domain name value.|
|DB-FULLNAME|Character|This security rule masks the Full Name based on the column values provided in the FIRST_NAME and LAST_NAME parameters. Pre-requisite: Both the parameters (for example, FIRST_NAME and LAST_NAME) provided for the Full Name should be in Source table.|
|DB-SALARY|Numeric|This security rule increments or decrements the column values based on the given percentage of value. For example if the user provides 10, then the column value will be incremented or decremented randomly within the range of +10 to -10. [Source Value : 1500, Masked Value : 1545]|
|DB-SHUFFLE|Character|This security rule shuffles the characters within a string. For example, "SOLIX" is a string and after shuffling it is masked as "XOSLI"|
|DB-CREDIT-CARD-ALL-MASKX|Character|This security rule masks all the Numeric Characters with X. For example, if the value is equal to 123-234, then the value after masking is XXX-XXX|
|DB-CREDIT-CARD-PARTIAL-MASK|Character|Mask All Numeric Characters with X apart from first 4 Characters, like 1234-5678 masks with 1234-XXXX|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 277
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# Masking the table on which this security rule is assigned

|DB-SHUFFLE-COLUMN-CHARS|Character|This algorithm enables the user to mask the source column value randomly by leaving the first N number of characters.|
|---|---|---|
|DB-RANGE-MASK-ALONG-CHILD-TABLE|Numeric|This security rule mask the column of the parent table and replicate the masked value on the child table column data.|
|DB-FIXED-STRING|Character|This security rule masks the column value with the given fixed string value. [Parameter Value : Blake, Source Value : Miller, Masked Value : Blake]|
|DB-RANDOM-CCARD-GEN|Character|This security rule generates the Credit Card Valid Number randomly as per LUHN based on Card Type selected. [Parameter Value : Visa, Source Value : 4503 8803 9903 2326, Masked Value : 4322678416974018]|
|DB-RANDOM-US-SSN-GEN|Character|This security rule generates the US Social Security Number randomly. [Source Value : 554-98-2445, Masked Value : 315531544]|
|DB-RANDOM-US-SSN-GEN-FMT|Character|This security rule generates the US Social Security Number randomly along with format character (i.e, character used as separator). [Parameter Value : - , Source Value : 554-98-2445, Masked Value : 315-53-1544]|
|DB-RANDOM-NUMBERS-GEN-CHAR|Character|This security rule generates random numbers within a specified range for Character datatype columns. [Parameter Values : 10000,99999 , Source Value : 34782, Masked Value : 64669]|
|DB-RANDOM-NUMBERS-GEN-NUM|Numeric|This security rule generates random numbers within a specified range for NUMBER datatype columns. [Parameter Values : 10000,99999 , Source Value : 34782, Masked Value : 64669]|
|DB-SUBSTRING|Character|This security rule generates SUBSTRING of Original Value based on provided from character value to No of characters. [Parameter Values : 1,5 , Source Value : Debbie, Masked Value : Debbi]|
|DB-RANDOM-VALUE-FROM-LIST-CHAR|Character|This security rule generates a random STRING value from provided comma separated strings like abc, def, ghi. [Parameter Value : Debbie, Blake, Smith,Tunner , Source Value : Miller, Masked Value : Smith]|
|DB-RANDOM-DATES-GEN|Date|This security rule generates random dates within a specified DATE range. [Parameter Values : 2001-06-20,2012-06-20 , Source Value : 05/16/2012, Masked Value : 12/21/2007]|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 278
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

|Security Rule|Data Type|Description|
|---|---|---|
|DB-RANDOM-DIGITS-CHAR|Character|This security rule generates a numeric number between given minimum and maximum digits for CHARACTER data type columns. [Parameter Values : 2,6 , Source Value : 9785, Masked Value : 835840]|
|DB-US-PHONE-NUM-GEN|Character|This security rule generates random US Phone Numbers with valid area codes. [Source Value : 4085671234, Masked Value : 6498628963]|
|DB-US-PHONE-NUM-GEN-FMT|Character|This security rule generates random US Phone Numbers with valid area codes along with provided format character. [Parameter Value : - , Source Value : (408)5671234, Masked Value : 302-809-4281]|
|DB-VALUE-SHUFFLE|Character|This security rule is used to randomly generate the characters of First N Chars or Last N Chars or All Characters. For example if the Parameter values are provided as FIRST-N, 5. Then, Miller John will be masked as Ehyzfr, John|
|DB-FIXED-NUMBER|Numeric|This security rule masks the column value with the given fixed numeric value. [Parameter Value : 15000, Source Value : 1255, Masked Value : 15000]|
|DB-RANDOM-CCARD-GEN-FMT|Character|This security rule generates the Credit Card Valid Number randomly as per LUHN along with the format character (i.e., character used as separator) based on Card Type. [Parameter Values : Visa And - , Source Value : 4503 8803 9903 2326, Masked Value : 4322-6784-1697-4018]|
|DB-RANDOM-UK-SSN-GEN|Character|This security rule generates the UK Social Security Number randomly. [Source Value : JR567078H, Masked Value : LS648045P]|
|DB-RANDOM-STRINGS-GEN|Character|This security rule generates RANDOM STRING within given minimum and maximum length characters. [Parameter Values : 5,15 , Source Value : Blake, Masked Value : VxGNiUqHP]|
|DB-RANDOM-VALUE-FROM-LIST-NUM|Numeric|This security rule generates a random NUMERIC value from provided comma separated string like 26781, 99999, 355667, 13234. [Parameter Value : 26781,99999,355667,13234 , Source Value : 8778, Masked Value : 355667]|
|DB-RANDOM-DIGITS-NUM|Numeric|This security rule generates a Numeric number between given minimum and maximum digits for NUMBER data type columns. [Parameter Values : 2,6 , Source Value : 9785, Masked Value : 835840]|

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 279
---
# Solix EDMS Standard Edition (SE) 2.2

# Product User Manual

# 17 About Solix Technologies

Solix Technologies, Inc. is a leading provider of Enterprise Data Management solutions for public and private clouds. Solix data growth solutions help businesses improve application performance, reduce storage costs and meet compliance and data privacy requirements by achieving Information Lifecycle Management (ILM) goals. The Solix Cloud provides a pay-as-you-go model for database archiving and application retirement. The Solix Enterprise Data Management Suite (EDMS) software enables organizations to implement Database Archiving, Test Data Management (Data Subsetting), Data Masking and Application Retirement across all enterprise data. Solix Technologies is headquartered in Santa Clara, California and operates worldwide through an established network of value added resellers (VARs) and systems integrators.

Visit Solix Technologies on the web at http://www.solix.com and follow Solix on,

- Twitter
- Facebook

Copyright ©2014 Solix Technologies, Inc. All rights reserved

Page | 280`