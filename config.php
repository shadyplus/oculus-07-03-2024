<?php

$apiKey = 'yMP0zyq4FlaFplCSExInmO52StstFD0X3YbtnN85B1DxfbUlTTSUVTg5dhey';   // Ключ доступа к API

$apiSendLeadUrl = 'http://api.cpa.tl/api/lead/send';
$apiGetLeadUrl = 'http://api.cpa.tl/api/lead/feed';

$offer_id = 9793;  // для каждого оффера свой айди, надо уточнять его в админке или у суппортов

$stream_hid = 'qO6H2lZo';     // id потока, не обязательное, если указано, заявка будет привязана к потоку

if(!$apiKey){
    echo 'Ключ доступа к API не определен. Получите в личном кабинете или обратитесь в службу поддержки';
    die;
}


if(!$offer_id){
    echo 'ID оффера не определен';
    die;
}