________________ �������� ����������� OPENSSL ________________

1. �������� ��������� �����:
openssl req -batch -new -noout -newkey rsa:2048 -nodes -keyout cert.key

2. �������� ����� ����������� (� �������� ���������� ����� ������� ���������� � ����):
openssl req -new -key cert.key -out cert.csr

3. �������������� �����������:
openssl x509 -req -days 365 -in cert.csr -signkey cert.key -out cert.crt

���������� �����. ��� ������������� ���������� ����������� 
����� ����� cert.key � ����������� cert.crt � ����������� ����������.

�������������:

- ���������� ���������� ������� (CSR):
openssl req -noout -text -in cert.csr

- �������� ������ ����������� (CRT):
openssl x509 -noout -text -in cert.crt

- ���������, ��������� �� �������� ���� (cert.key) 
� ���� ��� ����� ����������� (cert.crt) � ������� (cert.csr):
openssl rsa -noout -modulus -in cert.key | openssl md5
openssl x509 -noout -modulus -in cert.crt | openssl md5
openssl req -noout -modulus -in cert.csr | openssl md5
���� ������� ������� ���������� �����, ��, ������ �����, ���� ����, ������ � ���������� �������.
