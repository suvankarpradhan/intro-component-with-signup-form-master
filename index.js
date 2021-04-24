$('.btn').click(()=>{
    let fname = $('.first-name input').val();
    let lname = $('.last-name input').val();
    let email = $('.email input').val();
    let pward = $('.password input').val();
    let emailSyntex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(email);
    if(fname===''){
        $('#fname').text('First name cannot be empty');
        $('.fname').css('display','block');
        $('.first-name').css('border-color','hsl(0, 100%, 74%)')
    }else{
        $('#fname').text('');
        $('.fname').css('display','none');
        $('.first-name').css('border-color','hsl(246, 25%, 77%)')
    }
    if(lname===''){
        $('#lname').text('Last name cannot be empty');
        $('.lname').css('display','block');
        $('.last-name').css('border-color','hsl(0, 100%, 74%)')
    }else{
        $('#lname').text('');
        $('.lname').css('display','none');
        $('.last-name').css('border-color','hsl(246, 25%, 77%)')
    }
    if(!emailSyntex.test(email)){
        $('#email').text('Looks like this is not an email');
        $('.mail').css('display','block');
        $('.email').css('border-color','hsl(0, 100%, 74%)')
    }else{
        $('#email').text('');
        $('.mail').css('display','none');
        $('.email').css('border-color','hsl(246, 25%, 77%)')
    }
    if(pward===''){
        $('#pward').text('Password cannot be empty');
        $('.pward').css('display','block');
        $('.password').css('border-color','hsl(0, 100%, 74%)')
    }else{
        $('#pward').text('');
        $('.pward').css('display','none');
        $('.password').css('border-color','hsl(246, 25%, 77%)')
    }
})