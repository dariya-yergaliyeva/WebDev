from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer

    @action(detail=True, methods=['get'])
    def discount(self, request, pk=None):
        product = self.get_object()
        discounted_price = product.price * 0.9

        data = {
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'discounted_price': discounted_price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.id
        }

        return Response(data)