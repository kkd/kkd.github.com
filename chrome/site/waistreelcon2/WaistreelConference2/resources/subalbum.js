function box_start() {
	document.write('<table border="0" cellspacing="0" cellpadding="0" align="center">');
	document.write('<tr><td style="width:9px; height:8px; background-color:#F0F0F0"><img src="resources/photo_top_left.png" width="9" height="8" alt="" class="layout"></td><td style="width:200px; height:8px; background:url(\'resources/photo_top.png\') #F0F0F0 repeat-x"><img src="resources/spacer.gif" width="1" height="8" alt="" class="layout"></td><td style="width:11px; height:8px; background-color:#F0F0F0"><img src="resources/photo_top_right.png" width="11" height="8" alt="" class="layout"></td></tr>');
	document.write('<tr><td style="width:9px; background:url(\'resources/photo_left.png\') #F0F0F0 repeat-y"><img src="resources/spacer.gif" width="9" height="1" alt="" class="layout"></td><td style="width:200px; background-color:#F0F0F0; text-align:center" class="photoDescription">');
}

function box_end() {
	document.write('</td><td style="width:11px; background:url(\'resources/photo_right.png\') #F0F0F0 repeat-y"><img src="resources/spacer.gif" width="11" height="1" alt="" class="layout"></td></tr>');
	document.write('<tr><td style="width:9px; height:12px; background-color:#F0F0F0"><img src="resources/photo_bottom_left.png" width="9" height="12" alt="" class="layout"></td><td style="width:200px; height:12px; background:url(\'resources/photo_bottom.png\') #F0F0F0 repeat-x"><img src="resources/spacer.gif" width="1" height="12" alt="" class="layout"></td><td style="width:11px; height:12px; background-color:#F0F0F0"><img src="resources/photo_bottom_right.png" width="11" height="12" alt="" class="layout"></td></tr></table>');
}
