<div id="page-content">
  <?php include("navigation.php")?>

  <header class="masthead">
    <div class="container">
      <div class="intro-text">
        <div class="intro-heading">Vote for your favorite baby names!</div>
        <!--    note that all fields that are to be submitted MUST have 'name' field-->
        <form method="post" id="babyname_form">
          <div class="row text-center">
            <div class="col-md-4">
              <div class="radio-group boy">
                <img src="../img/boy.png" alt="Boy"><input type="radio" name="gender" id="gender" value="M">
              </div>
              <table class="table table-striped table-sm" id="table-boy" style="display: none">
                <thead>
                  <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Name</th>
                    <th scope="col">Votes</th>
                  </tr>
                </thead>
                <tbody class="table-body" id="display-boy" ></tbody>
            </table>
            </div>
            <div class="col-md-4">
              <div class="radio-group girl">
                <img src="../img/girl.png" alt="Girl"><input type="radio" name="gender" id="gender" value="F" checked="checked">
              </div>
              <table class="table table-striped table-sm" id="table-girl" style="display: none">
                <thead>
                  <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Name</th>
                    <th scope="col">Votes</th>
                  </tr>
                </thead>
                <tbody class="table-body" id="display-girl"></tbody>
            </table>
            </div>
            <div class="col-md-4">
              <input type="text" name="name" id="name" placeholder="Enter a name" autocomplete=off>
              <div class="list-group" id="suggestion-box">
              </div>
<!--
            </div>
            <div class="col-md-2">
-->
              <div><button class="btn btn-primary btn-lg" type="submit" name="vote" id="vote">Vote!</button></div>
              <div class="alert" role="alert" id="vote-result" style="display: none"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </header>
</div>