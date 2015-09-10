var shortPass, badPass, goodPass, strongPass = [];
shortPass = ['Слишком короткий', 'text-muted']
badPass = ['Простой', 'text-warning']
goodPass = ['Хороший', 'text-info']
strongPass = ['Надежный', 'text-success']

function passwordStrength(password)
{
    score = 0 
    //password < 4
    if (password.length < 4 ) { return shortPass }
    //password length
    score += password.length * 4
    score += ( checkRepetition(1,password).length - password.length ) * 1
    score += ( checkRepetition(2,password).length - password.length ) * 1
    score += ( checkRepetition(3,password).length - password.length ) * 1
    score += ( checkRepetition(4,password).length - password.length ) * 1

    //password has 3 numbers
    if (password.match(/(.*[0-9].*[0-9].*[0-9])/))  score += 5 
    //password has 2 sybols
    if (password.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/)) score += 5 
    //password has Upper and Lower chars
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  score += 10 
    //password has number and chars
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  score += 15 
    //password has number and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([0-9])/))  score += 15 
    //password has char and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([a-zA-Z])/))  score += 15 
    //password is just a nubers or chars
    if (password.match(/^\w+$/) || password.match(/^\d+$/) )  score -= 10 
    //verifing 0 < score < 100
    if ( score < 0 )  score = 0 
    if ( score > 100 )  score = 100 
    
    if (score < 34 )  return badPass 
    if (score < 68 )  return goodPass
    return strongPass
}
function checkRepetition(pLen,str) {
    res = ""
    for ( i=0; i<str.length ; i++ ) {
        repeated=true
        for (j=0;j < pLen && (j+i+pLen) < str.length;j++)
            repeated=repeated && (str.charAt(j+i)==str.charAt(j+i+pLen))
        if (j<pLen) repeated=false
        if (repeated) {
            i+=pLen-1
            repeated=false
        }
        else {
            res+=str.charAt(i)
        }
    }
    return res
}
	setInterval( function() { 
		if($('#new_password').val()==''){
			$('#complexity, #coincidence').addClass('hidden')
		}
		else{
			$('#complexity, #coincidence').removeClass('hidden')
			if($('#new_password').val()!=$('#new_password_repeat').val()){ $('#coincidence span').attr('class', 'text-danger').html('нет'); $('button').addClass('disabled'); }
			else{ $('#coincidence span').attr('class', 'text-success').html('да'); $('button').removeClass('disabled');}
			var result = passwordStrength($('#new_password').val()) 
			$('#complexity span').html(result[0])
			$('#complexity span').attr('class', result[1])
		}
	} , 300)