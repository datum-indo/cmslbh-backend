import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonDocumentCreateOrConnectWithoutPersonInput } from "../inputs/PersonDocumentCreateOrConnectWithoutPersonInput";
import { PersonDocumentCreateWithoutPersonInput } from "../inputs/PersonDocumentCreateWithoutPersonInput";
import { PersonDocumentScalarWhereInput } from "../inputs/PersonDocumentScalarWhereInput";
import { PersonDocumentUpdateManyWithWhereWithoutPersonInput } from "../inputs/PersonDocumentUpdateManyWithWhereWithoutPersonInput";
import { PersonDocumentUpdateWithWhereUniqueWithoutPersonInput } from "../inputs/PersonDocumentUpdateWithWhereUniqueWithoutPersonInput";
import { PersonDocumentUpsertWithWhereUniqueWithoutPersonInput } from "../inputs/PersonDocumentUpsertWithWhereUniqueWithoutPersonInput";
import { PersonDocumentWhereUniqueInput } from "../inputs/PersonDocumentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonDocumentUpdateManyWithoutPersonInput {
  @TypeGraphQL.Field(_type => [PersonDocumentCreateWithoutPersonInput], {
    nullable: true
  })
  create?: PersonDocumentCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonDocumentCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: PersonDocumentCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonDocumentUpsertWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  upsert?: PersonDocumentUpsertWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonDocumentWhereUniqueInput], {
    nullable: true
  })
  connect?: PersonDocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonDocumentWhereUniqueInput], {
    nullable: true
  })
  set?: PersonDocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonDocumentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PersonDocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonDocumentWhereUniqueInput], {
    nullable: true
  })
  delete?: PersonDocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonDocumentUpdateWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  update?: PersonDocumentUpdateWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonDocumentUpdateManyWithWhereWithoutPersonInput], {
    nullable: true
  })
  updateMany?: PersonDocumentUpdateManyWithWhereWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonDocumentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PersonDocumentScalarWhereInput[] | undefined;
}
