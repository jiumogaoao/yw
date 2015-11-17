<?php
if ((($_FILES["pic"]["type"] == "image/gif")
|| ($_FILES["pic"]["type"] == "image/jpeg")
|| ($_FILES["pic"]["type"] == "image/pjpeg"))
)
  {
  if ($_FILES["pic"]["error"] > 0)
    {
    echo '{"succeed":false,"message":"' . $_FILES["pic"]["error"] . '"}';
    }
  else
    {
	$wtime=md5(time());
    if (file_exists("upload/" . $wtime ))
      {
      echo  '{"succeed":false,"message":"文件重复"}';
      }
    else
      {
      move_uploaded_file($_FILES["pic"]["tmp_name"],
      "upload/" . $wtime);
      echo '{"succeed":true,"data":"' . "upload/" . $wtime .'"}';
      }
    }
  }
else
  {
  echo '{"succeed":false,"message":"文件异常"}';
  }
?>