# Generated by Django 4.2.11 on 2024-04-11 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_alter_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('CR', 'Occasional'), ('ML', 'Festival'), ('MS', 'Homas')], max_length=2),
        ),
    ]
