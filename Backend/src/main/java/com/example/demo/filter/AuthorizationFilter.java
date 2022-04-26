//package com.example.demo.filter;
//
//import com.auth0.jwt.JWT;
//import com.auth0.jwt.JWTVerifier;
//import com.auth0.jwt.algorithms.Algorithm;
//import com.auth0.jwt.interfaces.DecodedJWT;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//import static org.springframework.http.HttpHeaders.AUTHORIZATION;
//
//public class AuthorizationFilter extends OncePerRequestFilter {
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        if(request.getServletPath().equals("/login")){
//            filterChain.doFilter(request,response);
//        }else{
//            String authorizationHeader = request.getHeader(AUTHORIZATION);
//            // add && authorizationHeader.startWith("something");
//            if(authorizationHeader !=null && authorizationHeader.startsWith("Bearer ") ){
//                 String token =authorizationHeader.substring("Bearer ".length())
//                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
//                JWTVerifier verifier = JWT.require(algorithm).build();
//                DecodedJWT decodedJWT = verifier.verify(token);
//                // 1:41
//
//
//            }
//        }
//    }
//}