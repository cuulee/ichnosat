Search.setIndex({docnames:["about","documentation","how_to_run","index","installation_and_requirements","software_architecture","src.core","src.core.downloader","src.core.processing_pipe","src.core.processing_pipe.src","src.core.system_manager","src.data","src.data.database","src.data.database.entities","src.data.database.services"],envversion:51,filenames:["about.rst","documentation.rst","how_to_run.rst","index.rst","installation_and_requirements.rst","software_architecture.rst","src.core.rst","src.core.downloader.rst","src.core.processing_pipe.rst","src.core.processing_pipe.src.rst","src.core.system_manager.rst","src.data.rst","src.data.database.rst","src.data.database.entities.rst","src.data.database.services.rst"],objects:{"src.core":{downloader:[7,0,0,"-"],processing_pipe:[8,0,0,"-"],system_manager:[10,0,0,"-"]},"src.core.downloader":{AmazonBucketManager:[7,0,0,"-"],Configuration:[7,0,0,"-"],ConfigurationManager:[7,0,0,"-"],Datasource:[7,0,0,"-"],Downloader:[7,0,0,"-"],DownloaderJob:[7,0,0,"-"],ProductDownloader:[7,0,0,"-"],SearchFilter:[7,0,0,"-"]},"src.core.downloader.AmazonBucketManager":{AmazonBucketManager:[7,1,1,""]},"src.core.downloader.AmazonBucketManager.AmazonBucketManager":{extract_date:[7,2,1,""],generate_url:[7,2,1,""],get_products_list:[7,2,1,""],load_products:[7,2,1,""]},"src.core.downloader.Configuration":{Configuration:[7,1,1,""]},"src.core.downloader.ConfigurationManager":{ConfigurationManager:[7,1,1,""]},"src.core.downloader.ConfigurationManager.ConfigurationManager":{datetime_from_string:[7,2,1,""],get_configuration:[7,2,1,""],load_aws_domain:[7,2,1,""],load_aws_products_regex:[7,2,1,""],load_aws_xmlns:[7,2,1,""],load_configuration:[7,2,1,""],load_end_date:[7,2,1,""],load_files_to_download:[7,2,1,""],load_inbox_path:[7,2,1,""],load_parallel_downloads:[7,2,1,""],load_start_date:[7,2,1,""],load_tiles:[7,2,1,""]},"src.core.downloader.Datasource":{Datasource:[7,1,1,""]},"src.core.downloader.Datasource.Datasource":{download_product:[7,2,1,""],get_products_list:[7,2,1,""]},"src.core.downloader.Downloader":{Downloader:[7,1,1,""]},"src.core.downloader.Downloader.Downloader":{create_search_filter:[7,2,1,""],start:[7,2,1,""]},"src.core.downloader.DownloaderJob":{DownloaderJob:[7,1,1,""]},"src.core.downloader.DownloaderJob.DownloaderJob":{refresh_configurations:[7,2,1,""],run:[7,2,1,""]},"src.core.downloader.ProductDownloader":{ProductDownloader:[7,1,1,""]},"src.core.downloader.ProductDownloader.ProductDownloader":{download_product:[7,2,1,""]},"src.core.downloader.SearchFilter":{SearchFilter:[7,1,1,""]},"src.core.processing_pipe":{src:[9,0,0,"-"]},"src.core.processing_pipe.src":{Job:[9,0,0,"-"],JobDispatcher:[9,0,0,"-"],Plugin:[9,0,0,"-"],PluginManager:[9,0,0,"-"],ProcessingPipeManager:[9,0,0,"-"]},"src.core.processing_pipe.src.Job":{Job:[9,1,1,""]},"src.core.processing_pipe.src.Job.Job":{fibonacci:[9,2,1,""],run:[9,2,1,""]},"src.core.processing_pipe.src.JobDispatcher":{JobDispatcher:[9,1,1,""]},"src.core.processing_pipe.src.JobDispatcher.JobDispatcher":{run:[9,2,1,""]},"src.core.processing_pipe.src.Plugin":{Plugin:[9,1,1,""]},"src.core.processing_pipe.src.Plugin.Plugin":{more_data:[9,2,1,""],read_pipe:[9,2,1,""],run:[9,2,1,""]},"src.core.processing_pipe.src.PluginManager":{PluginManager:[9,1,1,""]},"src.core.processing_pipe.src.PluginManager.PluginManager":{compile_plugins:[9,2,1,""],get_plugins:[9,2,1,""]},"src.core.processing_pipe.src.ProcessingPipeManager":{ProcessingPipeManager:[9,1,1,""]},"src.core.processing_pipe.src.ProcessingPipeManager.ProcessingPipeManager":{notify_to_scientific_processor:[9,2,1,""],process_product:[9,2,1,""],start_processing:[9,2,1,""]},"src.core.system_manager":{cli:[10,0,0,"-"],system_manager:[10,0,0,"-"]},"src.core.system_manager.system_manager":{SystemManager:[10,1,1,""]},"src.core.system_manager.system_manager.SystemManager":{compile_plugins:[10,2,1,""],create_database:[10,2,1,""],fix_inconsistent_data_in_db:[10,2,1,""],get_downloaded_products:[10,2,1,""],get_downloading_products:[10,2,1,""],get_pending_products:[10,2,1,""],get_processed_products:[10,2,1,""],get_processing_products:[10,2,1,""],is_first_installation:[10,2,1,""],set_first_installation_config:[10,2,1,""],trigger_downloader:[10,2,1,""]},"src.data":{database:[12,0,0,"-"]},"src.data.database":{base:[12,0,0,"-"],db:[12,0,0,"-"],entities:[13,0,0,"-"],services:[14,0,0,"-"]},"src.data.database.db":{DB:[12,1,1,""]},"src.data.database.db.DB":{create_db:[12,2,1,""]},"src.data.database.entities":{product:[13,0,0,"-"]},"src.data.database.entities.product":{Product:[13,1,1,""],ProductStatus:[13,1,1,""]},"src.data.database.entities.product.Product":{id:[13,3,1,""],last_modify:[13,3,1,""],name:[13,3,1,""],status:[13,3,1,""]},"src.data.database.entities.product.ProductStatus":{downloaded:[13,3,1,""],downloading:[13,3,1,""],pending:[13,3,1,""],processed:[13,3,1,""],processing:[13,3,1,""]},"src.data.database.services":{products_service:[14,0,0,"-"]},"src.data.database.services.products_service":{ProductsService:[14,1,1,""]},"src.data.database.services.products_service.ProductsService":{add_new_product:[14,2,1,""],get_a_downloaded_product:[14,2,1,""],get_downloaded_products:[14,2,1,""],get_downloading_products:[14,2,1,""],get_pending_products:[14,2,1,""],get_processed_products:[14,2,1,""],get_processing_products:[14,2,1,""],get_products_to_process:[14,2,1,""],update_product_status:[14,2,1,""]},src:{core:[6,0,0,"-"],data:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute"},terms:{"boolean":7,"char":[],"class":[7,9,10,12,13,14],"const":[],"enum":13,"final":[],"float":[],"function":10,"import":2,"int":9,"new":[1,3,4,5,9,12,14],"null":[],"public":[],"return":[7,9],"switch":[],"true":7,"var":[],"void":2,"while":2,AWS:[0,3,7],For:5,Such:3,That:[],The:[2,3,5,7,9,10],Then:[],There:[],These:[],Uses:[],Using:[],___:[],____:[],_____:[],______:[],__myplugin_class_h__:[],abl:[3,4],about:5,accept:2,adapt:7,add:14,add_new_product:14,addit:4,addon:4,adfgeotransform:[],admin:10,advantag:[],after:7,agendaless:[],algorithm:[5,9],all:[0,5,7,10],alloc:[],alpha:[],also:[2,4,7],amazon:7,amazonbucketmanag:[5,6],anatomi:5,antonin:[],aoi:3,api:[1,3,7,13],appear:2,appli:7,architectur:[1,3],archiv:4,area:3,arg1:[],arg2:[],arg3:[],arg:[],argument:7,armin:[],async:7,attribut:[],author:[],auto:5,autogener:3,automat:[0,3,5],avail:[0,3,5,7,9],aws:[0,7],b04:[],b08:[],band01:[],band4_dataset:[],band4_path:[],band:[],bar:2,base:[0,3,5,7,9,10,11,13,14],bash:[2,4],basi:5,basic:4,been:[2,3],befor:4,belgium:[],below:[],benoit:[],blabla:[],blank:[],block:4,brandl:[],brief:[],bua:3,bucket:7,build:[4,5],bullet:[],button:2,calcul:[],call:7,can:[2,3],care:[],catholiqu:[],center:[],certainli:[],cfg:5,check:2,cli:[5,6],click:2,client:2,clima:3,close:[],code:[0,3,4],com:4,comma:[],command:[2,4],comment:3,compil:[3,9],compile_plugin:[9,10],complet:7,compon:5,compos:[2,4,5],comput:[],concat_str:[],conf:5,config:7,configur:[0,1,3,5,6],configurationmanag:[5,6],connect:2,consid:10,consist:[],consol:4,constant:[],consult:[],contact:3,contain:[0,2,3,5,7,9],content:[3,5],contributor:[],convent:3,copi:[],copyright:[],core:5,could:2,cout:[],cpl_port:[],cplerr:[],cplfree:[],cplmalloc:[],creat:[1,2,3,4,5,12],create_databas:10,create_db:12,create_search_filt:7,creation:[2,5],credit:3,cron:3,crontab:5,cross:[0,3],current:[0,2,3,4],custom:3,customiz:[0,3],cvar:[],cycl:[],dai:7,daniel:[],data:[0,2,3,4,5,7],data_loc:[2,5],databas:[2,3,7,9,11],dataset:[],datasourc:[5,6],date:[0,2,3,7],date_str:7,datetim:7,datetime_from_str:7,debian:5,declar:[5,13],defin:7,definit:5,deleg:9,depend:[4,5],deput:5,descamp:[],descript:5,design:3,destination_path:[],detail:[2,5],develop:[3,4,5],devic:[],dialog:2,differ:2,direct:[],directori:[2,4],discuss:[],dispatch:9,doc:5,docker:[0,2,3,4,5],dockerfil:5,docstr:[],doctest:[],document:[3,4],domain:7,done:2,donwload:[7,9],doubl:[],down:[],download:[0,6,9,13],download_product:7,downloaderjob:[5,6],drawback:[],driver:[],dynam:[5,9],each:[0,3,5],easi:0,echo:2,edit:[],emphas:[],end:[5,7],end_dat:7,endif:[],endl:[],enough:[],entiti:[5,11,12,14],entri:[7,9],environ:5,err:[],event:7,everi:[2,5,9],exampl:[2,4,5],except:[],expect:[],explan:[],exploit:[0,3,12,14],expos:[],ext:13,extend:[0,3,4,5],extens:[],extern:10,external_interfac:5,extract:[3,7],extract_d:7,facilit:3,fals:7,featur:3,federico:[],fibonacci:9,field:[],file:[0,2,3,5,7,9],file_path:9,files_to_download:7,filter:[5,7],find:2,finish:2,first:2,fix_inconsistent_data:[],fix_inconsistent_data_in_db:10,flask:5,folder:[2,4,9],follow:[2,4,5],form:7,format:[],foundat:[],framework:5,frank:[],free:2,from:[0,3,4,7,9,12],fulli:[0,3],function1:[],futur:[],ga_readonli:[],gadl:[],gdal:[0,3,4,5],gdalallregist:[],gdalclos:[],gdaldataset:[],gdaldataseth:[],gdaldriv:[],gdalopen:[],gdalrasterband:[],gdt_float32:[],gener:[7,9],generate_url:7,geo:[],georg:[],geotiff:[],get:[0,3],get_a_downloaded_product:14,get_configur:7,get_downloaded_product:[10,14],get_downloading_product:[10,14],get_pending_product:[10,14],get_plugin:9,get_processed_product:[10,14],get_processing_product:[10,14],get_products_list:7,get_products_to_process:14,getdriverbynam:[],getgdaldrivermanag:[],getgeotransform:[],getprojectionref:[],getrasterband:[],getxsiz:[],getys:[],gf_write:[],github:[0,4,5],give:7,global:[],goal:[5,7],going:[2,4],graphic:[2,3],graphica:[],gregorio:[],group:[],gui:5,guid:[],handl:9,handler:7,has:[2,3,7],have:[2,4],haven:[],here:10,high:5,how:[1,3,5],html:[],http:[2,3,4,5,7,9],ichnosat:[0,4,5,9,10],idea:[],ifndef:[],imag:[3,4,5],implement:[5,9,10],improv:[],inbox:[2,5],inbox_path:7,inc:[],includ:3,inclus:[],index:2,info:[],inform:[],init:[5,6],initd:[],input:[],input_file1_path:[],input_filename_1:[],insid:14,inspect:9,instal:[1,2,3],instanc:[],instead:7,instruct:4,interest:[3,7],interfac:[2,3,5,7,9,10],intern:5,internet:7,interv:[0,3,5,7],introduct:5,involv:5,iostream:[],is_first_instal:10,isometr:[],item:[2,7],its:[],ivar:[],job:[5,6,8],jobdispatch:[5,6,8],jp2:[],jpeg2000:5,just:[],kei:[],keyword:[],knoledg:[],knowledg:4,kwarg:13,label:[],languag:4,last_item:7,last_modifi:13,latex:[],launch:[7,9],layer:10,left:2,level:5,librari:[0,3,4,5,9],licens:[3,5],light:5,like:[2,7],limit:[],line:2,link:[],linux:5,list:[2,3,5,7,9],load:[2,7],load_aws_domain:7,load_aws_products_regex:7,load_aws_xmln:7,load_configur:7,load_end_d:7,load_files_to_download:7,load_inbox_path:7,load_parallel_download:7,load_product:7,load_start_d:7,load_til:7,local:4,localhost:2,locat:[2,9],lock:9,log:5,logger:[5,11],logic:10,longer:[],look:[],lot:[],louvain:[],machin:4,macq:[],mai:[],main:[5,7],mainclass1:[],mainclass2:[],make:[],manag:[3,7,9,10,14],mani:[],markup:[],martin:[],master:4,math:[],matrix:[],max:9,max_valu:9,mean:[5,7],memori:[],menu:2,metadata:3,method:[5,7,9,12],mgr:3,might:4,min:4,minut:[],mit:[3,5],mkdir:4,modul:[2,3,5],monitor:5,month:7,more:5,more_data:9,mount:5,move:4,multithread:[0,3],must:2,myplugin:[],name:[2,7,9,13],ndvi:[0,2,3],need:4,network:9,new_statu:10,next:7,nginx:5,nice:[],non:[],none:[7,9],normal:2,note:2,noth:[],notify_to_scientific_processor:9,now:[2,7],npo:3,number:[0,3,5,9],nvdi_dataset:[],nxsize:[],nysiz:[],object:[7,9,10,12,14],offici:4,one:[],onli:[],onlu:3,open:[0,3],openjpeg:[],openjpg:5,oper:4,optim:7,option:[],order:[],org:[],orm:[5,12,14],other:5,our:[],out:9,outbox:[2,5],outbox_path:9,output:[],output_dataset:[],owen:[],packag:[3,4,5],page:[2,5,7],pagin:7,paragraph:[],parallel:[0,3],parallel_download:[],parallel_process:[],param:[],parament:7,paramet:[7,9,14],part:5,pass:7,path:9,pattern:7,pend:[2,7,13],pep:3,period:[],pip:5,pipe:[0,9],platform:[0,3,4,5,9,10],pleas:[4,5],plugin:[0,1,2,3,5,6,8],plugin_nam:9,plugin_path:9,pluginmanag:[5,6,8],plugins_path:9,pocoo:[],podriv:[],point:[7,9],pool:5,port:2,portal:[0,3],possibl:[5,13],post:5,postgr:2,postgresql:5,prefer:2,prefix:7,present:[2,5,9],prevent:[],preview:[],primari:4,privat:[],process:[0,3,4,5,9,13],process_algorithm:[],process_product:9,process_req:[],processing_pip:[5,6],processingpipemanag:[5,6,8],processor:[0,2,3,9],product:[0,3,5,7,9,11,12,14],product_list:7,product_nam:[7,9,14],product_path:[],productdownload:[5,6],products_servic:[5,11,12],productsservic:14,productstatu:13,professor:[],program:[2,4],progress:2,project:5,proper:7,properti:[0,7],prototyp:[],provid:[0,2,3,7],psycopg2:[],psycopg:[],pszproject:[],purpos:[4,5],put:[],pypi:[],python3:[],python:[0,3,4,5],queri:[2,7],queue:7,raffael:3,raffaelebua:[],rais:[],raster:[],rasterio:[],reach:9,read:9,read_pip:9,readi:2,readm:5,receiv:[0,2,5,7],redund:[],refresh_configur:7,regex:7,releas:3,relev:4,reload:7,remot:7,repositori:3,repres:[5,9],request:[5,7,9],requir:[1,3],result:[],retriev:[5,7,9],ronach:[],rst:[],rtype:[],rubric:[],run:[1,3,5,7,9],same:[0,3],sardegna:3,sardegnaclimaonlu:4,satellit:[0,2,3,4,5],save:[],schedul:3,scientif:9,scientific_processor:[5,6,8],scratch:12,script:2,search:7,searchfilt:[5,6],section:5,see:2,seealso:[],semant:7,sens:[0,2,3,5],sentinel:[0,3,7],separ:[],sequenc:9,server:[2,5],servic:[5,7,11,12],set:[2,4,5,7],set_first_installation_config:10,setgeotransform:[],setproject:[],setup:[],share:[0,3,5,9],should:4,show:3,shown:2,side:2,simpl:5,sinc:4,sinergis:7,singl:3,size:2,sizeof:[],sleep:2,snippet:[],softwar:[1,3],sourc:[0,3,4,5,7,9,10,12,13,14],special:[],specif:[],sphinx:[3,5],spread:5,sqlalchemi:[5,12,13,14],src:[3,5],start:[2,3,4,5,6,7,8],start_dat:7,start_downloader_interfac:[],start_process:9,state:9,statu:[7,13,14],status:13,std:[],stdio:[],stdlib:[],step:[2,4],stop:[1,3],store:7,stream:[2,9],string:[7,9],structur:4,submodul:[5,6,8,11],subpackag:[3,5],subsect:[],supervisord:5,support:[0,3],syntax:[],system:[2,3,4,9],system_manag:[5,6],systemmanag:10,tail:2,take:4,task:[5,9],team:[],templat:[],temporari:5,term:3,termin:2,test:[3,5],text:5,thei:[],them:5,thi:[0,2,4,5,7,9,10,12,14],third:5,thread:[5,7,9],tile:[0,2,3,5,7],time:[0,2,3,4,5,7],todo:[],tranform:[],trigger:[7,9],trigger_download:10,tutori:[3,5],txt:5,type:[7,9],ucl:[],under:3,understand:4,uniform:[],unit:3,universit:[],unix:2,unus:[],unzip:4,update_product_statu:14,url:7,use:4,used:[5,7],useful:[],user:[2,3,5,7],using:[4,7,9],usr:[2,4],util:9,utm:3,valgrind:5,valu:[7,9],variabl:[],varrazzo:[],vector:[],veget:2,vendor:5,version:[0,2,3,5],versionad:[],versionchang:[],vexel:[],via:[0,3,5,7,9],vim:[],virtual:5,visit:5,voic:2,volum:[],wait:2,want:[4,5],warmerdam:[],warn:[],watch:2,web:[3,5,9],webserv:5,wget:4,when:[2,5],where:[2,4,7,9],which:[],whole:7,work:[4,5],workflow:5,wrapper:[9,12,14],write:[],written:[0,3],www:[],year:7,yml:5,you:[2,4,5],your:[2,4,5],yournam:[],yyyi:7,zero:[],zip:4},titles:["About","Documentation","How to run","Welcome to Ichnosat","Installation and Requirements","Software architecture","src.core package","src.core.downloader package","src.core.processing_pipe package","src.core.processing_pipe.src package","src.core.system_manager package","src.data package","src.data.database package","src.data.database.entities package","src.data.database.services package"],titleterms:{"class":5,"new":[],about:0,activ:2,amazonbucketmanag:7,anatomi:[],api:5,architectur:5,base:12,build:[],cli:10,code:5,configur:7,configurationmanag:7,consol:2,contact:[],content:[6,7,8,9,10,11,12,13,14],core:[6,7,8,9,10],creat:[],creation:[],credit:[],cron:[],data:[11,12,13,14],databas:[5,12,13,14],datasourc:7,declar:[],diagram:5,document:[1,5],download:[2,3,4,5,7],downloaderjob:7,each:[],entiti:13,exampl:[],extern:5,external_interfac:[],file:[],folder:5,fork:3,github:3,global:[],graphic:[],gui:2,how:2,ichnosat:[2,3],implement:[],index:3,init:10,instal:4,intefac:5,interfac:[],interv:[],introduct:[],job:9,jobdispatch:9,launch:2,librari:[],linux:4,log:2,logger:[],maco:4,manag:5,mani:[],method:[],modul:[6,7,8,9,10,11,12,13,14],monitor:2,open:2,overview:5,packag:[6,7,8,9,10,11,12,13,14],parallel:[],paramet:[],platform:[],plugin:9,pluginmanag:9,port:[],present:[],process:2,processing_pip:[8,9],processingpipemanag:9,processor:5,product:[2,13],productdownload:7,products_servic:14,requir:4,restor:[],run:2,runner:[],schema:5,scientific_processor:[],searchfilt:7,sens:[],sequenc:5,servic:14,set:[],skill:4,softwar:[4,5],sourc:[],src:[6,7,8,9,10,11,12,13,14],start:[],stop:[],structur:5,submodul:[7,9,10,12,13,14],subpackag:[6,8,11,12],system:5,system_manag:10,technolog:5,test:[],thread:[],tile:[],time:[],todo:7,tutori:1,user:[],via:2,welcom:3,work:[]}})