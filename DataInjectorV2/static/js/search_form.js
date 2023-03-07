var _SearchForm = {
	//MediaList
	setMediaState:function (targetObjId, defaultValue) {
		// Ajax Call
		var params = "_uid=" + (new Date()).getTime();
		
		var url = _WEBSERVER_ROOT_URL + 'SupportMediaState.jsp';
		new Ajax.JSON(url, {
			method: 'get',
			parameters: params,
			onSuccess: function(result) {
				var rs = result.responseJSON;
				SelectBoxOptionAdd($(targetObjId), '', 'All');
				var selectedIndex = 0;
				
				if (rs.mediastate.item.length) {
					for(var i=0;i<rs.mediastate.item.length;i++) {
						var obj = rs.mediastate.item[i];
						if (obj._attributes.id == defaultValue) selectedIndex = i+1;
						SelectBoxOptionAdd($(targetObjId), obj._attributes.id, obj.state._text);
					}
				} else {
					var obj = rs.mediastate.item;
					if (obj._attributes.id == defaultValue) selectedIndex = 1;
					SelectBoxOptionAdd($(targetObjId), obj._attributes.id, obj.state._text);
				}
				
				$(targetObjId).selectedIndex = selectedIndex;
			},
			onFailure: function(xmlHttp) {
				alert(_Lan.error);
			}
		});
	}
	
	//readyPoolList
	, setMediaType:function (targetObjId, defaultValue) {
		// Ajax Call
		var params = "_uid=" + (new Date()).getTime();
		
		var url = _WEBSERVER_ROOT_URL + 'Support/MediaType';


		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var rs = JSON.parse(this.responseText);
				SelectBoxOptionAdd($(targetObjId), '', 'All');
				var selectedIndex = 0;
				if (rs.length) {
					for(var i=0;i<rs.length;i++) {
						var obj = rs[i];
						if (obj.supporttype == defaultValue) selectedIndex = i+1;
						SelectBoxOptionAdd($(targetObjId), obj.supporttype, obj.supporttype);
					}
				} else {
					var obj = rs;
					if (obj.supporttype == defaultValue) selectedIndex = 1;
					SelectBoxOptionAdd($(targetObjId), obj.supporttype, obj.supporttype);
				}
				
				$(targetObjId).selectedIndex = selectedIndex;
			} 
		};
		xhttp.open("GET", url + '?' + params, true);
		xhttp.send();


	},


	getErrorInfo: function () {
		var url = _WEBSERVER_ROOT_URL + "Support/ErrorTypeList";
		var params = "";
		console.log(url);
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var rs = JSON.parse(this.responseText);
				var selecterror = document.getElementById("selectOption");
				if (rs.length) {
					for (var i = 0; i < rs.length; i++) {
						var obj = rs[i];
						var option = document.createElement("option");
						option.value = obj.errortype;
						option.innerHTML = obj.errorname;
						selecterror.appendChild(option);
					}
				}
			} 
		};
		xhttp.open("GET", url + '?' + params, true);
		xhttp.send();
	}
	
	//Media List
	, setMediaErrorType: function (targetObjId, defaultValue) { //added by DS 
		// Ajax Call
		var params = "_uid=" + (new Date()).getTime();
		var url = _WEBSERVER_ROOT_URL + 'SupportMediaErrorType.jsp';
		new Ajax.JSON(url, {
			method: 'get',
			parameters: params,
			onSuccess: function(result) {
				var rs = result.responseJSON;
				SelectBoxOptionAdd($(targetObjId), '', 'All');
				var selectedIndex = 0;
				if (rs.item.length) {
					for(var i=0;i<rs.item.length;i++) {
						var obj = rs.item[i];
						if (obj.state == defaultValue) selectedIndex = i+1;
						SelectBoxOptionAdd($(targetObjId), obj.value, obj.comment);
					}
				} else {
					var obj = rs.item;
					if (obj.state == defaultValue) selectedIndex = 1;
					SelectBoxOptionAdd($(targetObjId), obj.value, obj.comment);
				}
				
				$(targetObjId).selectedIndex = selectedIndex;
			},
			onFailure: function(xmlHttp) {
				alert(_Lan.error);
			}
		});
	}	
	
	, setStorageID: function (targetObjId, defaultValue) {
		var params = ""; // "_uid=" + (new Date()).getTime();
		var url = _WEBSERVER_ROOT_URL + 'StorageList';
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var rs = JSON.parse(this.responseText);
				SelectBoxOptionAdd($(targetObjId), '', 'All');
				var selectedIndex = 0;
				if (rs.storageinfo.length) {
					for(var i=0;i<rs.storageinfo.length;i++) {
						var obj = rs.storageinfo[i];
						if (obj.storageid == defaultValue) selectedIndex = i+1;
						SelectBoxOptionAdd($(targetObjId), obj.storageid, unescapeHTML(obj.name));
					}
				} else {
					var obj = rs.storageinfo;
					if (obj.storageid == defaultValue) selectedIndex = 1;
					SelectBoxOptionAdd($(targetObjId), obj.storageid, unescapeHTML(obj.name));
				}
				$(targetObjId).selectedIndex = selectedIndex;
			} 
		};
		xhttp.open("GET", url + '?' + params, true);
		xhttp.send();

	}
	
	//storageForm
	, setProtocolType: function (targetObjId, defaultValue) {
		
		var params = "_uid=" + (new Date()).getTime();
		var startIdx = 0;
		
		var url = _WEBSERVER_ROOT_URL + 'SupportStorageProtocol.jsp';
		new Ajax.JSON(url, {
			method: 'get',
			parameters: params,
			onSuccess: function(result) {
				var rs = result.responseJSON;
				var selectedIndex = 0;
				
				if (rs.item.length) {
					for(var i=0;i<rs.item.length;i++) {
						var obj = rs.item[i];
						if (obj.id == defaultValue) selectedIndex = i+startIdx;
						SelectBoxOptionAdd($(targetObjId), obj.id, obj.state._text);
					}
				} else {
					var obj = rs.item;
					if (obj.id == defaultValue) selectedIndex = startIdx;
					SelectBoxOptionAdd($(targetObjId), obj.id, obj.state._text);
				}
				
				$(targetObjId).selectedIndex = selectedIndex;
			},
			onFailure: function(xmlHttp) {
				alert(_Lan.error);
			}
		});
	}
	
	, setProfileType: function(targetObjId, defaultValue) {
		
		// Ajax Call
		var params = "";
		var startIdx = 0;

		var url = _WEBSERVER_ROOT_URL + 'SupportProfileList.jsp';
		new Ajax.JSON(url, {
			method: 'get',
			parameters: params,
			onSuccess: function(result) {
			
				var rs = result.responseJSON;
				
				var selectedIndex = 0;
				var boolCheck = false;
				if (rs.profilelist.list.item.length) {
					for(var i=0;i<rs.profilelist.list.item.length;i++) {
						boolCheck = false;
						var obj = rs.profilelist.list.item[i];
						if (obj._attributes.id == defaultValue) selectedIndex = i+startIdx;
						if(defaultValue == ""){
							if (obj._attributes.id == rs.profilelist.list._attributes.basic) boolCheck = true;
						}else{
							if (obj._attributes.id == defaultValue) boolCheck = true;
						}
						//SelectBoxOptionAddCheck($(targetObjId), obj.id, obj.name, boolCheck);
						SelectBoxOptionAddCheck($(targetObjId), obj._attributes.id, obj._attributes.id, boolCheck);
					}
				}else{
					var obj = rs.profilelist.list.item;
					if (obj.id == defaultValue) selectedIndex = startIdx;
					//SelectBoxOptionAddCheck($(targetObjId), obj.id, obj.name);
					SelectBoxOptionAddCheck($(targetObjId), obj.id, obj.id);
				}
			},
			onFailure: function(xmlHttp) {
				alert(_Lan.error);
			}
		});
	}
	
	//memberList
	, setMemberState: function (targetObjId, defaultValue) {
		var params = "_uid=" + (new Date()).getTime();
		
		var url = _WEBSERVER_ROOT_URL + 'SupportMemberState.jsp';
		
		new Ajax.JSON(url, {
			method: 'get',
			parameters: params,
			onSuccess: function(result) {
				var rs = result.responseJSON;
				SelectBoxOptionAdd($(targetObjId), '', 'All');
				var selectedIndex = 0;
				
				if (rs.mediastate.item.length) {
					for(var i=0;i<rs.mediastate.item.length;i++) {
						var obj = rs.mediastate.item[i];
						if (obj._attributes.id == defaultValue) selectedIndex = i+1;
						SelectBoxOptionAdd($(targetObjId), obj._attributes.id, obj.state._text);
					}
				} else {
					var obj = rs.mediastate.item;
					if (obj._attributes.id == defaultValue) selectedIndex = 1;
					SelectBoxOptionAdd($(targetObjId), obj._attributes.id, obj.state._text);
				}
				
				$(targetObjId).selectedIndex = selectedIndex;
			},
			onFailure: function(xmlHttp) {
				alert(_Lan.error);
			}
		});
	}
	
	, setCheckServerName: function (targetObjId, defaultValue, flag, exist) {	//added by DS 
	
		var params = ""; //"_uid=" + (new Date()).getTime();
		var url = _WEBSERVER_ROOT_URL + 'CheckServerAllState';
		//var url = _WEBSERVER_ROOT_URL + '/priority/SupportCheckServerList2.jsp';
		new Ajax.JSON(url, {
			method: 'get',
			parameters: params,
			onSuccess: function(result) {
				var rs = JSON.parse(result.responseText);
				if(flag == 'search'){
					SelectBoxOptionAdd($(targetObjId), '', 'All');
				} else { //'list'
					SelectBoxOptionAdd($(targetObjId), '', 'Auto');
				}
				
				var selectedIndex = 0;
				
				if (rs.serverallstate.length) {
					//console.log(rs.item.length);
					for(var i=0;i<rs.serverallstate.length;i++) {
						var obj = rs.serverallstate[i];
						if (obj.ID == defaultValue) selectedIndex = i+1;
						if(flag == 'search'){
							SelectBoxOptionAdd($(targetObjId), obj.ID, obj.name);
						} else { //'list'
							SelectBoxOptionAdd2($(targetObjId), obj.ID, obj.name);
						}						
					}
				} else {
					var obj = rs.serverallstate;
					if (obj.id == defaultValue) selectedIndex = 1;
					
					if(flag == 'search'){
						SelectBoxOptionAdd($(targetObjId), obj.ID, obj.name);
					} else { //'list'
						SelectBoxOptionAdd2($(targetObjId), obj.ID, obj.name);
					}
				}
				
				$(targetObjId).selectedIndex = selectedIndex;
			},
			onFailure: function(xmlHttp) {
				alert(_Lan.error);
			}
		});
	}
	
	, setCheckServerNameSync: function (targetObjId, defaultValue, flag, exist) {	//added by DS 
		
		var params = "_uid=" + (new Date()).getTime();
		var url = _WEBSERVER_ROOT_URL + '/priority/SupportCheckServerList.jsp';
		//var url = _WEBSERVER_ROOT_URL + '/priority/SupportCheckServerList2.jsp';
		new Ajax.JSON(url, {
			method: 'get',
			asynchronous:false,
			parameters: params,
			onSuccess: function(result) {
				var rs = result.responseJSON;
				if(flag == 'search'){
					SelectBoxOptionAdd($(targetObjId), '', 'All');
				} else { //'list'
					SelectBoxOptionAdd($(targetObjId), '', 'Auto');
				}
				
				var selectedIndex = 0;
				
				if (rs.item.length) {
					for(var i=0;i<rs.item.length;i++) {
						var obj = rs.item[i];
						if (obj.id == defaultValue) selectedIndex = i+1;
						if(flag == 'search'){
							SelectBoxOptionAdd($(targetObjId), obj.id, obj.state);
						} else { //'list'
							SelectBoxOptionAdd2($(targetObjId), obj.state2, obj.state);
						}						
					}
				} else {
					var obj = rs.item;
					if (obj.id == defaultValue) selectedIndex = 1;
					
					if(flag == 'search'){
						SelectBoxOptionAdd($(targetObjId), obj.id, obj.state);
					} else { //'list'
						SelectBoxOptionAdd2($(targetObjId), obj.state2, obj.state);
					}
				}
				
				$(targetObjId).selectedIndex = selectedIndex;
			},
			onFailure: function(xmlHttp) {
				alert(_Lan.error);
			}
		});
	}
	
	, setProfileLanguage: function(targetObj, defaultValue) {
		
		// Ajax Call
		var params = "";
		var startIdx = 0;

		var url = _WEBSERVER_ROOT_URL + 'SupportProfileLanguageList.jsp';
		new Ajax.JSON(url, {
			method: 'get',
			parameters: params,
			onSuccess: function(result) {
			
				var rs = result.responseJSON;
				var selectedIndex = 0;
				var boolCheck = false;
				
				if (rs.profilelanguagelist.list.item.length) {
					for(var i=0;i<rs.profilelanguagelist.list.item.length;i++) {
						boolCheck = false;
						var obj = rs.profilelanguagelist.list.item[i];
						if (obj._attributes.id == defaultValue) selectedIndex = i+startIdx;
						if(defaultValue == ""){
							if (obj._attributes.id == rs.profilelanguagelist.list._attributes.basic) boolCheck = true;
						}else{
							if (obj._attributes.id == defaultValue) boolCheck = true;
						}
						SelectBoxOptionAddCheck($(targetObj), obj._attributes.id, obj.name._text, boolCheck);
					}
				}else{
					var obj = rs.profilelist.list.item;
					if (obj._attributes.id == defaultValue) selectedIndex = startIdx;
					SelectBoxOptionAddCheck($(targetObj), obj._attributes.id, obj.name._text);
				}
			},
			onFailure: function(xmlHttp) {
				alert(_Lan.error);
			}
		});
	}
}