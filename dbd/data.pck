GDPC                                                                                 $   res://Scenes/Ball.tscn.converted.scnk      h      L���T_Ϫ��Y5A%   res://Scenes/Brick.tscn.converted.scn�
      �      ܂N#il= ��]�c'   res://Scenes/LevelOne.xml.converted.scn�      �      ��
{�h�|@����m   res://Scripts/ball.gdcg#      �      #�r!+�x��,   res://Scripts/paddle.gdc(      �      ��t��r����D��   res://Scripts/world.gdc�+            �F��J��i����}   res://Textures/ball.png-      V       ��X󼱭Ā�! ��   res://Textures/brick.pngX-      g       TC���z����#����   res://Textures/paddle.png�-      S       �	/����m0!��j���   res://export.cfg.            R�@�J�]֛�0l��@�   res://icon.png1M      �
      ������윫��EǨ   res://icon.png.flags�W             ���	�����t GD*   res://engine.cfb�W      �      �:lkk��/@�>�UERSRC                    PackedScene                                                                       .        resource/name    custom_solver_bias    extents    script/script 	   _bundled       Script    res://Scripts/ball.gd    Texture    res://Textures/ball.png    
   local://1 f      $   res://Scenes/Ball.tscn.convert.tscn �         RectangleShape2D                 
     �@  �@   PackedScene          	         names "   "      Ball    RigidBody2D    input/pickable    shapes/0/shape    shapes/0/transform    shapes/0/trigger    collision/layers    collision/mask    mode    mass 	   friction    bounce    gravity_scale    custom_integrator    continuous_cd    contacts_reported    contact_monitor 	   sleeping 
   can_sleep    velocity/linear    velocity/angular    damp_override/linear    damp_override/angular    script/script 	   __meta__    Sprite    Sprite    transform/scale    texture    CollisionShape2D    CollisionShape2D    shape    trigger    _update_shape_index       node_paths                                       version             conn_count              node_count          	   variants                            �?          �?                                      �?            �?                                               
     HC  H�                                           _edit_group_       
     �@  �@                                      nodes     M   ��������       ����                                              	      
         	      
                                                                                  @          ����                     @          ����                !                conns               editable_instances        RSRCRSRC                    PackedScene                                                                       .        resource/name    custom_solver_bias    extents    script/script 	   _bundled       Texture    res://Textures/brick.png    
   local://1 C      %   res://Scenes/Brick.tscn.convert.tscn x         RectangleShape2D                 
     �A  `A   PackedScene          	         names "         Brick    StaticBody2D    bricks    input/pickable    shapes/0/shape    shapes/0/transform    shapes/0/trigger    collision/layers    collision/mask    constant_linear_velocity    constant_angular_velocity 	   friction    bounce 	   __meta__    Sprite    Sprite    transform/scale    texture    CollisionShape2D    CollisionShape2D    shape    trigger    _update_shape_index       node_paths                                       version             conn_count              node_count          	   variants                            �?          �?                           
                       �?                   _edit_group_       
      @   @                                       nodes     6   ��������       ����                                        	      
               	      
            @          ����                     @          ����                               conns               editable_instances        RSRCRSRC                    PackedScene                                                                       resource/name    custom_solver_bias    extents    script/script    points 	   _bundled       Script    res://Scripts/world.gd    Script    res://Scripts/paddle.gd    Texture    res://Textures/paddle.png    PackedScene    res://Scenes/Brick.tscn 
   
   local://2 o      
   local://3 �      
   local://4 �      
   local://5 N      
   local://6 �      
   local://7 �      
   local://8 M      
   local://9 �         local://10 �      &   res://Scenes/LevelOne.xml.convert.xml <         RectangleShape2D                 
      B  �@   ConvexPolygonShape2D                 %                    �C   �  �C   �   �   ConvexPolygonShape2D                 %                 �   �  (D   �   D       ConvexPolygonShape2D                 %         D      (D   �  (D  �C   D  �C   ConvexPolygonShape2D                 %        (D  �C   D  �C   D      (D   �   ConvexPolygonShape2D                 %                    �C   �  �C   �   �   ConvexPolygonShape2D                 %                 �   �  (D   �   D       ConvexPolygonShape2D                 %         D      (D  �C   D  �C   ConvexPolygonShape2D                 %         D  �C  (D  �C   D       PackedScene          	         names "   P      World    script/script    Node2D    Paddle    transform/pos    input/pickable    shapes/0/shape    shapes/0/transform    shapes/0/trigger    collision/layers    collision/mask    collision/margin 	   __meta__    KinematicBody2D    Sprite    transform/scale    texture 
   Collision    shape    trigger    _update_shape_index    CollisionShape2D    Anchor    Position2D    Walls    shapes/1/shape    shapes/1/transform    shapes/1/trigger    shapes/2/shape    shapes/2/transform    shapes/2/trigger    shapes/3/shape    shapes/3/transform    shapes/3/trigger    shapes/4/shape    shapes/4/transform    shapes/4/trigger    shapes/5/shape    shapes/5/transform    shapes/5/trigger    shapes/6/shape    shapes/6/transform    shapes/6/trigger    shapes/7/shape    shapes/7/transform    shapes/7/trigger    constant_linear_velocity    constant_angular_velocity 	   friction    bounce    StaticBody2D    CollisionPolygon2D    build_mode    polygon    shape_range    Bricks    Brick    Brick1    Brick2    Brick3    Brick4    Brick5    Brick6    Brick7    Brick8    Brick9    Score    focus/ignore_mouse    focus/stop_mouse    size_flags/horizontal    size_flags/vertical    margin/left    margin/top    margin/right    margin/bottom    text    percent_visible    lines_skipped    max_lines_visible    Label       node_paths              version             conn_count              node_count          	   variants    -             
     �C  �C                     �?   �      �?                 o�:                     _edit_group_       
      @   @                
          B                                                            	         
   
                       �?            _edit_group_       %            �C   �  �C   �   �  (D   �  (D  �C   D  �C   D                  �C   �  �C   �   �  (D   �  (D  �C   D  �C   D            
         �@         
     �C   B
     �C  �B
     �C  �B
     �C   B
     @C   B
     �C  �B
     @C  �B
     �C  �B
     �C   B
     �C   B                  B     �A     �B   	   Score: 0    ����      nodes       ��������       ����                            ����
                                 	      
                                         ����      	      
                    ����                                      ����                     2      ����                                                                             !      "      #      $      %      &      '      (      )      *      +      ,      -      	      
      .      /      0      1                       3   3   ����   4      5      6                           7   ����               ���8                          ���9                          ���:                          ���;                          ���<                           ���=            !              ���>            "              ���?            #              ���@            $              ���A            %               O   B   ����   C   &   D   &   E   '   F      G   (   H   )   I   *   J   (   K   +   L      M      N   ,             conns               editable_instances        RSRCGDSC
      
      �      ��������τ�   �������   �������򶶶�   �����϶�   ����������������Ŷ��   �������������Ŷ�   ����׶��   �����Ŷ�   �������������������Ŷ���   ���϶���   ����������ƶ   �������Ӷ���   ����Ӷ��   ���������Ӷ�   �������Ӷ���   ����Ҷ��   ������������������϶   �����޶�   ��������ض��   ������Ŷ   �������������Ŷ�   �������϶���   ���������Ҷ�   ������������������϶   ϶��   ����������������¶��   ��Ҷ   ��������Ŷ��         ,              bricks        /root/WorldF            Paddle        Anchor        /root/World/Paddle                                                            	   !   
   (      )      /      8      A      B      H      I      S      ^      p      �      �      �      �      �      4MM:�  M:�  �  MM2�  FGL�  �  F�  GMM2�  F�  GL�  ;�  �  FG�  �  )�	  �  L�  &�	  J�
  F�  GL�  �  F�  GJ�  �  �  �  �	  J�  FG�  �  &�	  J�  FG�  L�  ;�  �  FGJ�  FG�  ;�  �  FG�	  J�  F�  GJ�  FG�  ;�  �  J�  FG�'  F�  �  H�  G�  �  F�  G�  �  &�  FGJ�  �  FGJ�  J�  L�  �  F�  GJ�  �	  �  �  FGPGDSC
            �      ������������τ�   ���������Ӷ�   ��������嶶�   ��������Ŷ��   �����϶�   ����������������Ŷ��   ����������������¶��   �������������Ŷ�   ����׶��   ϶��   ������Ŷ   ������ζ   �����������¶���   ������������Ŷ��   ζ��   ������Ŷ   �����¶�   ����¶��   ���Ӷ���   ����������������   ���������Ҷ�   ���ڶ���   �������Ӷ���   �������Ӷ���   �������¶���   ��������Ҷ��      res://Scenes/Ball.tscn                                                                            !   	   &   
   '      .      7      E      O      P      W      k      t      �      �      4MM:�  =FGM:�  �  M;�  �  MM2�  FGL�  �  F�  G�  �  F�  G�  M2�  F�  GL�  ;�	  �
  FGJ�	  �  ;�  �  FGJ�  FGJ�  I�  �  F�  F�  H�	  GGMM2�  F�  GL�  &�  J�  �  J�  �  J�  FG�  	�  L�  ;�  �  J�  FG�  �  J�  F�
  FG�  F�  H�  GG�  �  FGJ�  FGJ�  F�  G�  �  �  PGDSC
            &      ���ӄ�   ����Ӷ��   ��������Ӷ��   ����Ӷ��   �������Ӷ���   �������¶���             Score��	      Score: 	                   
                        4MM;�  9�  MM2�  F�  GL�  �  �  �  �  F�  GJ�  F�  �/  F�  GGP�PNG

   IHDR         ��~   IDAT�c`��|��������@ G�KN(�    IEND�B`��PNG

   IHDR          w }Y   .IDATH���1 0������@Xq�Kb �
`x������&@� �[��E��    IEND�B`��PNG

   IHDR   (      ��}    IDAT(�c�\��?� L� B`ԁ� !��ʪ�O    IEND�B`�[convert_images]

action="none"
compress_quality=0.7
formats="png"
shrink=1.0

[convert_samples]

action="none"
max_hz=44100
trim=false

[convert_scenes]

convert_text_scenes=true

[export_filter]

filter=""
filter_exclude=""
type="all"

[platform:Android]

apk_expansion/SALT=""
apk_expansion/enable=false
apk_expansion/public_key=""
architecture/arm=true
architecture/x86=false
command_line/extra_args=""
custom_package/debug=""
custom_package/release=""
debug/debugging_enabled=true
keystore/release=""
keystore/release_password=""
keystore/release_user=""
one_click_deploy/clear_previous_install=true
package/icon=""
package/name=""
package/signed=true
package/unique_name="org.godotengine.$genname"
permissions/access_checkin_properties=false
permissions/access_coarse_location=false
permissions/access_fine_location=false
permissions/access_location_extra_commands=false
permissions/access_mock_location=false
permissions/access_network_state=false
permissions/access_surface_flinger=false
permissions/access_wifi_state=false
permissions/account_manager=false
permissions/add_voicemail=false
permissions/authenticate_accounts=false
permissions/battery_stats=false
permissions/bind_accessibility_service=false
permissions/bind_appwidget=false
permissions/bind_device_admin=false
permissions/bind_input_method=false
permissions/bind_nfc_service=false
permissions/bind_notification_listener_service=false
permissions/bind_print_service=false
permissions/bind_remoteviews=false
permissions/bind_text_service=false
permissions/bind_vpn_service=false
permissions/bind_wallpaper=false
permissions/bluetooth=false
permissions/bluetooth_admin=false
permissions/bluetooth_privileged=false
permissions/brick=false
permissions/broadcast_package_removed=false
permissions/broadcast_sms=false
permissions/broadcast_sticky=false
permissions/broadcast_wap_push=false
permissions/call_phone=false
permissions/call_privileged=false
permissions/camera=false
permissions/capture_audio_output=false
permissions/capture_secure_video_output=false
permissions/capture_video_output=false
permissions/change_component_enabled_state=false
permissions/change_configuration=false
permissions/change_network_state=false
permissions/change_wifi_multicast_state=false
permissions/change_wifi_state=false
permissions/clear_app_cache=false
permissions/clear_app_user_data=false
permissions/control_location_updates=false
permissions/delete_cache_files=false
permissions/delete_packages=false
permissions/device_power=false
permissions/diagnostic=false
permissions/disable_keyguard=false
permissions/dump=false
permissions/expand_status_bar=false
permissions/factory_test=false
permissions/flashlight=false
permissions/force_back=false
permissions/get_accounts=false
permissions/get_package_size=false
permissions/get_tasks=false
permissions/get_top_activity_info=false
permissions/global_search=false
permissions/hardware_test=false
permissions/inject_events=false
permissions/install_location_provider=false
permissions/install_packages=false
permissions/install_shortcut=false
permissions/internal_system_window=false
permissions/internet=false
permissions/kill_background_processes=false
permissions/location_hardware=false
permissions/manage_accounts=false
permissions/manage_app_tokens=false
permissions/manage_documents=false
permissions/master_clear=false
permissions/media_content_control=false
permissions/modify_audio_settings=false
permissions/modify_phone_state=false
permissions/mount_format_filesystems=false
permissions/mount_unmount_filesystems=false
permissions/nfc=false
permissions/persistent_activity=false
permissions/process_outgoing_calls=false
permissions/read_calendar=false
permissions/read_call_log=false
permissions/read_contacts=false
permissions/read_external_storage=false
permissions/read_frame_buffer=false
permissions/read_history_bookmarks=false
permissions/read_input_state=false
permissions/read_logs=false
permissions/read_phone_state=false
permissions/read_profile=false
permissions/read_sms=false
permissions/read_social_stream=false
permissions/read_sync_settings=false
permissions/read_sync_stats=false
permissions/read_user_dictionary=false
permissions/reboot=false
permissions/receive_boot_completed=false
permissions/receive_mms=false
permissions/receive_sms=false
permissions/receive_wap_push=false
permissions/record_audio=false
permissions/reorder_tasks=false
permissions/restart_packages=false
permissions/send_respond_via_message=false
permissions/send_sms=false
permissions/set_activity_watcher=false
permissions/set_alarm=false
permissions/set_always_finish=false
permissions/set_animation_scale=false
permissions/set_debug_app=false
permissions/set_orientation=false
permissions/set_pointer_speed=false
permissions/set_preferred_applications=false
permissions/set_process_limit=false
permissions/set_time=false
permissions/set_time_zone=false
permissions/set_wallpaper=false
permissions/set_wallpaper_hints=false
permissions/signal_persistent_processes=false
permissions/status_bar=false
permissions/subscribed_feeds_read=false
permissions/subscribed_feeds_write=false
permissions/system_alert_window=false
permissions/transmit_ir=false
permissions/uninstall_shortcut=false
permissions/update_device_stats=false
permissions/use_credentials=false
permissions/use_sip=false
permissions/vibrate=false
permissions/wake_lock=false
permissions/write_apn_settings=false
permissions/write_calendar=false
permissions/write_call_log=false
permissions/write_contacts=false
permissions/write_external_storage=false
permissions/write_gservices=false
permissions/write_history_bookmarks=false
permissions/write_profile=false
permissions/write_secure_settings=false
permissions/write_settings=false
permissions/write_sms=false
permissions/write_social_stream=false
permissions/write_sync_settings=false
permissions/write_user_dictionary=false
screen/immersive_mode=true
screen/orientation=0
screen/support_large=true
screen/support_normal=true
screen/support_small=true
screen/support_xlarge=true
screen/use_32_bits_view=true
user_permissions/0=""
user_permissions/1=""
user_permissions/10=""
user_permissions/11=""
user_permissions/12=""
user_permissions/13=""
user_permissions/14=""
user_permissions/15=""
user_permissions/16=""
user_permissions/17=""
user_permissions/18=""
user_permissions/19=""
user_permissions/2=""
user_permissions/3=""
user_permissions/4=""
user_permissions/5=""
user_permissions/6=""
user_permissions/7=""
user_permissions/8=""
user_permissions/9=""
version/code=1
version/name="1.0"

[platform:BlackBerry 10]

debug/debugging_enabled=true
package/category="core.games"
package/custom_template=""
package/description="Game made with Godot Engine"
package/icon=""
package/name=""
package/unique_name="com.godot.noname"
release/author="Cert. Name"
release/author_id="Cert. ID"
version/code=1
version/name="1.0"

[platform:HTML5]

browser/enable_run=false
custom_package/debug=""
custom_package/release=""
debug/debugging_enabled=false
html/controls_enabled=true
html/font_family="arial,sans-serif"
html/head_include=""
html/style_include=""
html/title="Die Bricks, Die!"
options/memory_size=3

[platform:Linux X11]

binary/64_bits=true
custom_binary/debug=""
custom_binary/release=""
debug/debugging_enabled=true
resources/bundle_dependencies_(for_optical_disc)=false
resources/pack_mode=0

[platform:Mac OSX]

application/bits_mode=0
application/copyright=""
application/icon=""
application/identifier="org.godotengine.macgame"
application/info="Made with Godot Engine"
application/name=""
application/short_version="1.0"
application/signature="godotmacgame"
application/version="1.0"
custom_package/debug=""
custom_package/release=""
debug/debugging_enabled=true
display/high_res=false

[platform:Windows Desktop]

binary/64_bits=true
custom_binary/debug=""
custom_binary/release=""
debug/debugging_enabled=true
resources/bundle_dependencies_(for_optical_disc)=true
resources/pack_mode=0

[script]

action="compile"
encrypt_key=""
�PNG

   IHDR   @   @   �iq�  
wIDATx��]LSi��|�i�-���������B]1#��F�YG�If&Y�Y�L�g�2��Y�n�7dܛ�dՌza��Xu �u�`�PP�(D
�V[���X���p�9���~dW��{���}�s���I��e5 v����t/��Ӵ�)))����  ��4����g~�LÏ�;���T.i�y `�c�A1�:u�) _�)�ό!��il?,K^,U�e
H�z8̦���%�@��V��|�=.L�}	��G��"��b�4g�6�0�3n&�O�  TC��B�,�w\�Ø�?*%�@����:���u��c�����3�����~6h�~��.�G(��C^�B��vX��iǝ3[PN�B��;~�X��x	6S��d<��t��f��>��U~�'pEyHK_F[��`�;fǸm$��u���րAD�b�-�S�͸�el�X(H�3Y��|㖈�bu���H$E�L�w�"0�'6O ����>�tS�T	�OG`��44U{�����	қ m���gx�nk�~$2R%�u�4�/��vD�eQ	����e�E�գd�\���.Ԇ4�Pz�n��A@����{-�&�|���T�>:��'���
L��p�>��M����C���`3�������`#G���n�r��s���1ؼ�mY���W#K(ŋ'?czj
 �r�f���"[Z  0yrY���(�e4��-�A�|u�7�ŅT���1ԇ�5��T��8�K6Y�s�|e��Ad
D�T��m��"�x�3&<�P�`#e��lz�LP�.�{�~U�:�h��uh��	f;����xc���O��~OOO� _W�(�����#5XP��B�MB^>��T �$���`t��á�T ��0^���J6���Cס>`�܏��/E�d2%I�
�iz�?��֦�uJJ
� S~��K�R����Eq�f14n���r]L�E�YP�B]���QP��=� w��P��	]W�+O�W��6�R������m��!��C�J�C�+(e����}Kn=�n�}>�6@��B�߶!�<���]kPV��n$����b�<�<';��m�� ��މY��.ȥ4�b���ɓ ���
TWW� ��/wo�7�
�m*5��ѣp�ݐH$����N�<w����I���ަ����^>|�n ���N�9s���P�T�\[���\hV�`sz��$2P�� p��I�4:���DC}#��V�ȑ# ���Ehl{��x�m�yK,������4>ȸ���U2Z9�U2|��/��b�oۀ�6���W$C&+gϞEC}cX}C}#��g�/L�c"f�dg��[ZZ���ׄ��^hV�h������<!/ P__ϨSCCC�:֑(�MQ�%�A���F&+1�g�$��m�f�w����=&���#��� ��gh~8  ���A��*��>�� t:�ݍ��o���qԝ�Y�̰z�$Ǐ���o�mX��o��ߏ9��}���Y�L|��A�ٳ�m�`dv�h��v*�
������:��ւ��  �y�n��E�ҏo���r��QSS���p8�T* @cۣ��d&���p�f�߶.���b�J�
5�����������E��9p�_�Z_�ʵ���t���h~8�[�|�����ϊ	�c3z�q�]t:	�@�bxl�y�Kخ0 d�
Q��E	��*
r�''��` �k��؇L���iJ�'�����?G��ؼ(�M$����>���1<�h��,� D��*���znb��CZ:Ab�YȖΜ	셵���n����	(���n�%��U�eF:���ٸ�#0߿�lY!To�HY��N�@����HY������:��Kxn������I!���-�!|N;��a�m#����r�D^�e�K�/���Ḥ�$��$'H/zo^���+7l�=c�i�DkP:�����/i�~:���2�Z��A�A�[����Q<a6�9d��{�s����_�)��]F�!��#6�粃��!�D��r�MTJ���>A�Lpe$B��pY�)߻�r;��?#G�_��$�E�"]��,x���uD)���cȄ)?	�ˇX]�h0�'`�n��Y�(����
<�h��ǀ>�U ��U�m�D��D�;�.@5@O�7��{���]V�`F�ل��&pDR�섌.�0&IC���J- D���j�� S~�MX��N�?�R��+����1��t81�>w\���:�-+d|\Q^�n�ӎ�{��G)))ᣀ��m�ŋzss���C&L��&I/l�np��e�x�����b�x��7qDҸ�Z��Ka�]�ޤx�a�!2�)?�{���b_7"�Ah=`>�:�z-)^�����`�נ��7��6�����d����B��}�/�)#�r`��]x��������t�w�jh�	�~��@^�<��v��!V�A�qKT��b�ۀ�;M�`�(0�ē0�-+�D�g�Zj\�aX���b�!
&N%,iJY�Be�{�}�[_l��X�6�`�T���.�a��
�x���´��9`�F�(��y��s��s9 L�N��������νa�6�X(`l�`���%|U��`� �4��unc.�R��'9u�"}�H����>    IEND�B`�gen_mipmaps=false
ECFG      application/name         Bricksme   application/main_scene$         res://Scenes/LevelOne.xml      application/icon         res://icon.png     display/width      �     display/height      h     image_loader/filter             image_loader/gen_mipmaps          	   remap/all�           res://Scripts/paddle.gd    res://Scripts/paddle.gdc |��   res://Scripts/ball.gd    res://Scripts/ball.gdc �   res://Scripts/world.gd c   res://Scripts/world.gdc    res://Scenes/Brick.tscn &   res://Scenes/Brick.tscn.converted.scn lz   res://Scenes/Ball.tscn %   res://Scenes/Ball.tscn.converted.scn MB^   res://Scenes/LevelOne.xml J6(   res://Scenes/LevelOne.xml.converted.scn �Z      GDPC