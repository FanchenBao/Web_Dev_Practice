<!-- Masthead -->
<header class="masthead">
  <div class="container h-100">
    <div class="row h-100 align-items-center justify-content-center text-center">
      <div class="col-lg-10 align-self-end">
        <h1 class="text-uppercase text-white font-weight-bold">Currency Converter</h1>
        <hr class="divider my-4">
      </div>
      <div class="col-lg-8 align-self-baseline">
<!--
        <p class="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
        <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
-->
        <form method="post" id="currency-form"> 		
          <div class="form-group">
            <div class="form-item">
              <label id="from">From</label>
              <select name="from_currency" id="from_currency"></select>
            </div>
            <div class="form-item">
              <label id="amount">Amount</label>	
              <input type="text" placeholder="Currency" name="amount" id="amount" autocomplete="off" />
            </div>
            <div class="form-item">
              <label id="to">To</label>
              <select name="to_currency" id="to_currency"></select>
            </div>
            <br>
            <button type="submit" name="convert" id="convert" class="btn btn-primary">Convert</button>
            <button type="submit" id="switch" class="btn btn-success"><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></button>
          </div>			
        </form>	

        <div class="result form-group" id="converted_rate">&nbsp;</div>
        <div class="result" id="converted_amount">&nbsp;</div>       
      </div>
      <?php include('footer.php') ?>
    </div>
  </div>
  
</header>