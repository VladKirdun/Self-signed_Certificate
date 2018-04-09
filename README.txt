________________ Создание сертификата OPENSSL ________________

1. Создание закрытого ключа:
openssl req -batch -new -noout -newkey rsa:2048 -nodes -keyout cert.key

2. Создание файла сертификата (в процессе необходимо будет указать информацию о себе):
openssl req -new -key cert.key -out cert.csr

3. Самоподписание сертификата:
openssl x509 -req -days 365 -in cert.csr -signkey cert.key -out cert.crt

Сертификат готов. Для использования необходимо скопировать 
файлы ключа cert.key и сертификата cert.crt в необходимую директорию.

Дополнительно:

- Посмотреть информацию запроса (CSR):
openssl req -noout -text -in cert.csr

- Получить данные сертификата (CRT):
openssl x509 -noout -text -in cert.crt

- Проверить, относится ли закрытый ключ (cert.key) 
к тому или иному сертификату (cert.crt) и запросу (cert.csr):
openssl rsa -noout -modulus -in cert.key | openssl md5
openssl x509 -noout -modulus -in cert.crt | openssl md5
openssl req -noout -modulus -in cert.csr | openssl md5
Если команды вернули одинаковый вывод, то, скорее всего, этот ключ, запрос и сертификат связаны.
