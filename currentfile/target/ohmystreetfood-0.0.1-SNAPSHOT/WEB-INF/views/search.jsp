<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>OhMyStreetFood!</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <!-- Font Awesome CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">
    <!-- CSS -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/styles.css">
</head>
<body>
    <div class="main">
        <div class="row">
			<div class="col-md-12">
				<form class="input-group">
					<input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
					<button class="btn btn-primary" type="button" id="button-addon2">
						<i class="fas fa-search" style="color: white;"></i>
					</button>
				</form>
			</div>
			
			<div class="col-md-12" >
				인기 검색어
				<p style="padding: 20px 0;">
					<button type="button" class="btn btn-outline-primary" style="margin: 5px 0; border-radius: 30px;">&nbsp;닭꼬치&nbsp;</button>
					<button type="button" class="btn btn-outline-primary" style="margin: 5px 0; border-radius: 30px;">&nbsp;떡볶이&nbsp;</button>
					<button type="button" class="btn btn-outline-primary" style="margin: 5px 0; border-radius: 30px;">&nbsp;오뎅&nbsp;</button>
					<button type="button" class="btn btn-outline-primary" style="margin: 5px 0; border-radius: 30px;">&nbsp;오뎅&nbsp;</button>
					<button type="button" class="btn btn-outline-primary" style="margin: 5px 0; border-radius: 30px;">&nbsp;오뎅&nbsp;</button>
					<button type="button" class="btn btn-outline-primary" style="margin: 5px 0; border-radius: 30px;">&nbsp;오뎅&nbsp;</button>
					<button type="button" class="btn btn-outline-primary" style="margin: 5px 0; border-radius: 30px;">&nbsp;오뎅&nbsp;</button>
					<button type="button" class="btn btn-outline-primary" style="margin: 5px 0; border-radius: 30px;">&nbsp;오뎅&nbsp;</button>
					<button type="button" class="btn btn-outline-primary" style="margin: 5px 0; border-radius: 30px;">&nbsp;오뎅&nbsp;</button>
					<button type="button" class="btn btn-outline-primary" style="margin: 5px 0; border-radius: 30px;">&nbsp;오뎅&nbsp;</button>
					<button type="button" class="btn btn-outline-primary" style="margin: 5px 0; border-radius: 30px;">&nbsp;오뎅&nbsp;</button>
					<button type="button" class="btn btn-outline-primary" style="margin: 5px 0; border-radius: 30px;">&nbsp;오뎅&nbsp;</button>
					<button type="button" class="btn btn-outline-primary" style="margin: 5px 0; border-radius: 30px;">&nbsp;오뎅&nbsp;</button>
				</p>
			</div>
		</div>
    </div>
    
    <!-- Menu -->
    <div class="row">
        <div class="col-md-12">
            <jsp:include page="menu.jsp" />
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
