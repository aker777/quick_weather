<?php

namespace App\Controller;

use App\Form\WeatherFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WeatherController extends AbstractController
{
    #[Route('/', name: 'weather')]
    public function index(Request $request): Response
    {
//        Creation du form form
        $form = $this->createForm(WeatherFormType::class);

//      Envoie de la vue
        return $this->render('weather/index.html.twig', [
            'weatherForm' => $form->createView(),
        ]);
    }
}
