@echo off
chcp 65001 >nul
cd /d "%~dp0"

set "NO_PROXY=github.com,*.github.com,api.github.com,localhost,127.0.0.1"
set "HTTP_PROXY="
set "HTTPS_PROXY="
set "ALL_PROXY="
set "http_proxy="
set "https_proxy="
set "all_proxy="

echo ========================================================
echo   Публикация сайта психолога Марии Морозовой на GitHub
echo   Репозиторий: https://github.com/psychomanya/psymorozova
echo ========================================================
echo.

git config user.name "psychomanya"
git config user.email "psychomanya@users.noreply.github.com"

git remote get-url origin >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Добавление remote origin...
    git remote add origin https://github.com/psychomanya/psymorozova.git
)

echo Индексация файлов...
git add .

echo Создание коммита...
git commit -m "feat: release psychologist portfolio website for Maria Morozova"

echo Отправка в ветку main...
git branch -M main
git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo  [УСПЕХ!] Проект успешно опубликован на GitHub!
    echo  Репозиторий: https://github.com/psychomanya/psymorozova
    echo  Сайт будет доступен по адресу:
    echo  https://psychomanya.github.io/psymorozova/
    echo ========================================================
) else (
    echo ========================================================
    echo  [ВНИМАНИЕ] Если репозиторий еще не создан на GitHub:
    echo  1. Перейдите по ссылке: https://github.com/new
    echo  2. Введите имя репозитория: psymorozova
    echo  3. Нажмите "Create repository" (не добавляя README)
    echo  4. Запустите этот файл еще раз!
    echo ========================================================
)
echo.
pause
