#!/bin/bash

#####################################
## Copyright 2015 Graham Turner.   ##
## Not suitable for production use ##
#####################################

####################################
## This script assembles (builds) ##
## the application and outputs it ##
## into the production directory. ##
## NOTE: no tests are run.        ##
####################################

FILE=../production/application.html ;

cat > $FILE <<EOF
<!DOCTYPE html>
<html lang="en-GB">
    <head>
EOF

echo "        <script type='text/javascript'>" >> $FILE ;
echo -e "\n            \"use strict\";" >> $FILE ;
for file in ../development/*.js ;
do 
	echo "Processing $file file.." ; 
	cat $file | sed -e '1,9d' | sed 's/^/            /' >> $FILE ;
	echo >> $FILE ;
done
echo -e "\n        </script>\n" >> $FILE ;

echo -e "        <style type='text/css'>\n" >> $FILE ;
for file in ../development/*.css ;
do 
	echo "Processing $file file.." ; 
	cat $file | sed -e '1,8d' | sed 's/^/            /' >> $FILE ;
	echo >> $FILE ;
done
echo -e "\n         </style>\n" >> $FILE ;

echo -e "    </head>\n" >> $FILE ;
echo -e "    <body>\n" >> $FILE ;
for file in ../development/*.html ;
do 
	echo "Processing $file file.." ; 
	cat $file | sed -e '1,7d' | sed 's/^/        /'>> $FILE ;
	echo >> $FILE ;
done
echo -e "\n    </body>" >> $FILE ;
echo "</html>" >> $FILE ;

echo $(date) "All files processed correctly, application.html is placed in the production folder..." ;
exit 0 ;